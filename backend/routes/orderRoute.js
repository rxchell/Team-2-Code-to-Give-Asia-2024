import express from "express";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../configfirebase.js";

const router = express.Router();
const collectionName = "orders";

// Get a specific order by ID
router.get("/get", async (req, res) => {
    let documentRef = doc(firestore, `${collectionName}/${req.query.orderID}`);
    let documentSnapshot = await getDoc(documentRef);
    if (!documentSnapshot.exists()) {
        res.json({ errorMessage: `${req.query.orderID} orderID not found` });
        return;
    }

    res.json(documentSnapshot.data());
});

// Get all orders
router.get("/getall", async (req, res) => {
    let returnResult = [];
    try {
        const querySnapshot = await getDocs(collection(firestore, collectionName));
        for (let doc of querySnapshot.docs) {
            returnResult.push({ [doc.id]: doc.data() });
        }
    } catch (error) {
        res.json({ errorMessage: error.message });
        return;
    }

    res.json(returnResult);
});

// Update an order by ID
router.post("/update", async (req, res) => {
    if (!req.body.orderID) {
        res.json({ errorMessage: `orderID not found in object! Please pass orderID in the object` });
        return;
    }

    let documentRef = doc(firestore, `${collectionName}/${req.body.orderID}`);
    delete req.body["orderID"];
    try {
        await updateDoc(documentRef, req.body);
    } catch (error) {
        res.json({ errorMessage: `Error updating document: ${error.message}` });
        return;
    }

    res.json(req.body);
});

// Delete an order by ID
router.delete("/delete", async (req, res) => {
    if (!req.body.orderID) {
        res.json({ errorMessage: `orderID not found in object! Please pass orderID in the object` });
        return;
    }

    let documentRef = doc(firestore, `${collectionName}/${req.body.orderID}`);
    try {
        await deleteDoc(documentRef);
    } catch (error) {
        res.json({ errorMessage: `Error deleting document: ${error.message}` });
        return;
    }

    res.json({ message: "Delete success" });
});

// Create a new order
router.put("/create", async (req, res) => {
    const { orderID, donationID, userID, quantity, status } = req.body;

    if (!orderID || !donationID || !userID || quantity === undefined || !status) {
        res.json({ errorMessage: `Missing required fields` });
        return;
    }

    let collectionRef = collection(firestore, collectionName);
    try {
        const docRef = await addDoc(collectionRef, { orderID, donationID, userID, quantity, status });
        res.json({ [docRef.id]: { orderID, donationID, userID, quantity, status } });
    } catch (error) {
        res.json({ errorMessage: `Error adding document: ${error.message}` });
        return;
    }
});

export default router;