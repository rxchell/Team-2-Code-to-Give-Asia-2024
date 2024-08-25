import { firestore } from "../configfirebase.js";
import { Filter } from "firebase-admin/firestore";
import asyncHandler from "../middleware/asyncHandler.js";

const COLLECTION_NAME = "donations";

const addDonorName = async (donationObjects) => {
  let users = [];
  const querySnapshot = await firestore.collection("users").get();
  for (let doc of querySnapshot.docs) {
    users.push({ ...doc.data(), id: doc.id });
  }

  for (let donation of donationObjects) {
    let userObj = users.find((obj) => obj["id"] == donation["donorID"]);
    console.log("userObj:", userObj, "donation['donorID']:", donation["donorID"]);
    if (!userObj) {
      continue;
    }
    donation["donorName"] = userObj["name"];
  }

  return donationObjects;
};

// @desc    Fetch all Donations
// @route   GET /api/donations
// @access  Public
const getDonations = asyncHandler(async (req, res) => {
  let returnResult = [];

  const querySnapshot = await firestore.collection(COLLECTION_NAME).get();
  for (let doc of querySnapshot.docs) {
    returnResult.push({ donationID: doc.id, ...doc.data() });
  }

  returnResult = await addDonorName(returnResult);
  console.log(returnResult);
  res.json(returnResult);
});

// @desc    Fetch Donation by id
// @route   GET /api/donations/:id
// @access  Public
const getDonationByID = asyncHandler(async (req, res) => {
  let documentRef = firestore.doc(`${COLLECTION_NAME}/${req.params.id}`);
  let documentSnapshot = await documentRef.get();
  if (documentSnapshot.exists) {
    res.json({ donationID: req.params.id, ...documentSnapshot.data() });
  } else {
    throw new Error("Resource not found");
  }
});

// @desc    Fetch Donation by user id
// @route   GET /api/donations/user/:id
// @access  Public
const getDonationsByUserID = asyncHandler(async (req, res) => {
  let result = [];
  let collectionRef = firestore.collection(COLLECTION_NAME);
  let filter = Filter.where("donorID", "==", req.params.id);

  let querySnapshot = await collectionRef.where(filter).get();
  if (!querySnapshot.empty) {
    querySnapshot.forEach((documentSnapshot) => {
      // console.log(`Found document at ${documentSnapshot.ref.path}`);
      result.push({ donationID: documentSnapshot.id, ...documentSnapshot.data() });
    });
  }
  res.json(result);
});

// @desc    Create Donation
// @route   POST /api/donations
// @access  Private/Donor
const createDonation = asyncHandler(async (req, res) => {
  let collectionRef = firestore.collection(COLLECTION_NAME);
  // TODO validation of order

  docRef = await collectionRef.add(req.body);
  res.json({ donationID: docRef.id, ...req.body });
});

// @desc    Update Donation
// @route   PUT /api/donations/:id
// @access  Private/Donor
const updateDonation = asyncHandler(async (req, res) => {
  let documentRef = firestore.doc(`${COLLECTION_NAME}/${req.params.id}`);
  // TODO check if user is donor of donation

  let updateRes = await documentRef.update(req.body);
  // console.log(`Document updated at ${res.updateTime}`);

  res.json({ message: "Donation updated succesfully" });
});

// @desc    Delete Donation
// @route   DELETE /api/donations/:id
// @access  Private/Donor
const deleteDonation = asyncHandler(async (req, res) => {
  let documentRef = firestore.doc(`${COLLECTION_NAME}/${req.params.id}`);
  // TODO check if user is donor of donation

  await documentRef.delete();
  res.json({ message: "Doantion deleted successfully" });
});

export { getDonations, getDonationByID, getDonationsByUserID, createDonation, updateDonation, deleteDonation };
