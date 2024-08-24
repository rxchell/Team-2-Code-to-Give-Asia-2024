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
  let documentRef = firestore.doc(`${collectionName}/${req.query.donationID}`);
  let documentSnapshot = await documentRef.get();
  if (!documentSnapshot.exists) {
    res.json({ errorMessage: `${req.query.donationID} donationID not found` });
    return;
  }

  res.json(documentSnapshot.data());
});

// Get All
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

// Update
router.post("/update", async (req, res) => {
  if (!req.body.donationID) {
    res.json({ errorMessage: `donationID not found in object! Please pass donationID in the object` });
    return;
  }

  let documentRef = firestore.doc(`${collectionName}/${req.body.donationID}`);
  delete req.body["donationID"];
  try {
    let updateRes = await documentRef.update(req.body);
    // console.log(`Document updated at ${res.updateTime}`);
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

  let documentRef = firestore.doc(`${collectionName}/${req.body.donationID}`);
  try {
    let deleteRes = await documentRef.delete();
    // console.log(`Document updated at ${res.updateTime}`);
  } catch (error) {
    res.json({ errorMessage: `Error deleting document: ${error}` });
    return;
  }

  res.json({ message: "Delete success" });
});

// Create
router.put("/create", async (req, res) => {
  let collectionRef = firestore.collection(collectionName);
  let docRef = null;
  delete req.body["donationID"];
  try {
    docRef = await collectionRef.add(req.body);
    // console.log(`Added document with id: ${docRef.id}`);
  } catch (error) {
    res.json({ errorMessage: `Error adding document: ${error}` });
    return;
  }
  res.json({ [docRef.id]: req.body });
});

export default router;
