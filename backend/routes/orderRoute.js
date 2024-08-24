import express from "express";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../configfirebase.js";

const router = express.Router();
const collectionName = "orders";

// Get by orderID
router.get("/get", async (req, res) => {
  let documentRef = firestore.doc(`${collectionName}/${req.query.orderID}`);
  let documentSnapshot = await documentRef.get();
  if (!documentSnapshot.exists) {
    res.json({ errorMessage: `${req.query.orderID} orderID not found` });
    return;
  }

  res.json(documentSnapshot.data());
});

// Get all orders
router.get("/getall", async (req, res) => {
  let returnResult = [];
  try {
    const querySnapshot = await firestore.collection(collectionName).get();
    for (let doc of querySnapshot.docs) {
      returnResult.push({ [doc.id]: doc.data() });
    }
  } catch (error) {
    res.json({ errorMessage: error });
    return;
  }

  res.json(returnResult);
});

// Update order by orderID
router.post("/update", async (req, res) => {
  if (!req.body.orderID) {
    res.json({ errorMessage: `orderID not found! Please pass orderID in the object` });
    return;
  }

  let documentRef = firestore.doc(`${collectionName}/${req.body.orderID}`);
  delete req.body["orderID"];
  try {
    let updateRes = await documentRef.update(req.body);
    // console.log(`Document updated at ${res.updateTime}`);
  } catch (error) {
    res.json({ errorMessage: `Error updating document: ${error}` });
    return;
  }

  res.json(req.body);
});

// Delete an order
router.delete("/delete", async (req, res) => {
  if (!req.body.orderID) {
    res.json({ errorMessage: `orderID not found! Please pass orderID in the object` });
    return;
  }

  let documentRef = firestore.doc(`${collectionName}/${req.body.orderID}`);
  try {
    let deleteRes = await documentRef.delete();
  } catch (error) {
    res.json({ errorMessage: `Error deleting document: ${error}` });
    return;
  }

  res.json({ message: "Delete success" });
});

// Create an order
router.put("/create", async (req, res) => {
  let collectionRef = firestore.collection(collectionName);
  let docRef = null;
  delete req.body["orderID"];
  try {
    docRef = await collectionRef.add(req.body);
  } catch (error) {
    res.json({ errorMessage: `Error adding document: ${error}` });
    return;
  }
  res.json({ [docRef.id]: req.body });
});

export default router;