import express from "express";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../configfirebase.js";

const router = express.Router();
const collectionName = "donations";

// // middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// };
// router.use(timeLog);

// Get
router.get("/get", async (req, res) => {
  const docRef = doc(firestore, collectionName, req.query.foodDonationID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined
    res.json({ errorMessage: `${req.query.foodDonationID} not found` });
    return;
  }

  res.json(docSnap.data());
});

// Get All
router.get("/getall", async (req, res) => {
  let returnResult = {};

  const querySnapshot = await getDocs(collection(firestore, collectionName));
  querySnapshot.forEach((doc) => {
    returnResult[doc.id] = doc.data();
  });

  res.json(returnResult);
});

// Update
router.post("/update", async (req, res) => {
  if (!req.body.donationID) {
    res.json({ errorMessage: `donationID not found in object! Please pass donationID in the object` });
    return;
  }
  const docRef = doc(firestore, collectionName, req.body.donationID);

  try {
    await updateDoc(docRef, req.body);
  } catch (error) {
    res.json({ errorMessage: `Error updating document: ${error}` });
    return;
  }
  res.json(req.body);
});

// Delete
router.delete("/delete", async (req, res) => {
  if (!req.body.donationID) {
    res.json({ errorMessage: `donationID not found in object! Please pass donationID in the object` });
    return;
  }
  try {
    await deleteDoc(doc(firestore, collectionName, req.body.donationID));
  } catch (error) {
    res.json({ errorMessage: `Error deleting document: ${error}` });
    return;
  }
  res.json({ message: "success" });
});

// Create
router.put("/create", async (req, res) => {
  try {
    const docRef = await addDoc(collection(firestore, collectionName), req.body);
    console.log("Document written with ID: ", docRef.id);
    res.json({ [docRef.id]: req.body });
  } catch (error) {
    res.json({ errorMessage: `Error adding document: ${error}` });
    return;
  }
});

export default router;
