import { firestore } from "../configfirebase.js";
import { Filter } from "firebase-admin/firestore";
import asyncHandler from "../middleware/asyncHandler.js";

const COLLECTION_NAME = "donations";

// @desc    Fetch all Donations
// @route   GET /api/donations
// @access  Public
const getDonations = asyncHandler(async (req, res) => {
  let returnResult = [];

  const querySnapshot = await firestore.collection(COLLECTION_NAME).get();
  for (let doc of querySnapshot.docs) {
    returnResult.push({ [doc.id]: doc.data() });
  }

  res.json(returnResult);
});

// @desc    Fetch Donation by id
// @route   GET /api/donations/:id
// @access  Public
const getDonationByID = asyncHandler(async (req, res) => {
  let documentRef = firestore.doc(`${COLLECTION_NAME}/${req.params.id}`);
  let documentSnapshot = await documentRef.get();
  if (documentSnapshot.exists) {
    // TODO include docID as well
    res.json(documentSnapshot.data());
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
      result.push({ [documentSnapshot.id]: documentSnapshot.data() });
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
  res.json({ [docRef.id]: req.body });
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
