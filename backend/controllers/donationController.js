import { firestore } from "../configfirebase.js";
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
})

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
        throw new Error("Resource not found")
    }
})

// @desc    Create Donation
// @route   POST /api/donations
// @access  Private/Donor
const createDonation = asyncHandler(async (req, res) => {
    let collectionRef = firestore.collection(COLLECTION_NAME);
    // TODO validation of order


    docRef = await collectionRef.add(req.body);
    // TODO include user
    res.json({ [docRef.id]: req.body })
})

// @desc    Update Donation
// @route   PUT /api/donations/:id
// @access  Private/Donor
const updateDonation = asyncHandler(async (req, res) => {
    let documentRef = firestore.doc(`${COLLECTION_NAME}/${req.params.id}`);
    // TODO check if user is donor of donation

    let updateRes = await documentRef.update(req.body);
    // console.log(`Document updated at ${res.updateTime}`);

    res.json({ message: "Donation updated succesfully" });
})

// @desc    Delete Donation
// @route   DELETE /api/donations/:id
// @access  Private/Donor
const deleteDonation = asyncHandler(async (req, res) => {
    let documentRef = firestore.doc(`${COLLECTION_NAME}/${req.params.id}`);
    // TODO check if user is donor of donation

    await documentRef.delete()
    res.json({ message: "Doantion deleted successfully" });
})

export { getDonations, getDonationByID, createDonation, updateDonation, deleteDonation }