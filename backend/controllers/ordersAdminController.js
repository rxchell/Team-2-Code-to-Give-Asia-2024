import asyncHandler from "../middleware/asyncHandler.js";
import { firestore } from "../configfirebase.js";

const COLLECTION_NAME = "orders";

// @desc    TODO
// @route   GET /api/orders/:userId
// @access  Private
const adminCreateOrder = asyncHandler(async (req, res) => {
    let collectionRef = firestore.collection(COLLECTION_NAME);
    let docRef = null;
    delete req.body["orderID"];
    
    docRef = await collectionRef.add(req.body);
    res.json({ [docRef.id]: req.body });
})

// @desc    TODO
// @route   GET /api/orders/:userId
// @access  Private
const adminGetOrderById = asyncHandler(async (req, res) => {
    let documentRef = firestore.doc(`${COLLECTION_NAME}/${req.query.orderID}`);
    let documentSnapshot = await documentRef.get();
    if (!documentSnapshot.exists) {
        res.status(404)
        throw new Error(`${req.query.orderID} orderID not found` );
    }

    res.json(documentSnapshot.data());
})

// @desc    TODO
// @route   GET /api/orders/:userId
// @access  Private
const adminGetAllOrders = asyncHandler(async (req, res) => {
    let returnResult = [];
    const querySnapshot = await firestore.collection(COLLECTION_NAME).get();

    if (querySnapshot.empty) {
        res.status(404)
        throw new Error('No orders made');
    }

    for (let doc of querySnapshot.docs) {
        returnResult.push({ [doc.id]: doc.data() });
    }

    res.json(returnResult);
})

// @desc    TODO
// @route   GET /api/orders/:userId
// @access  Private
const adminUpdateOrder = asyncHandler(async (req, res) => {
    if (!req.body.orderID) {
        res.status(404)
        throw new Error('orderID not found! Please pass orderID in the object')
    }
    
    let documentRef = firestore.doc(`${COLLECTION_NAME}/${req.body.orderID}`);
    delete req.body["orderID"];
    try {
        let updateRes = await documentRef.update(req.body);
    } catch (error) {
        throw new Error (`Error updating document: ${error}`)
    }

    res.json(req.body);
})

// @desc    TODO
// @route   GET /api/orders/:userId
// @access  Private
const adminDeleteOrder = asyncHandler(async (req, res) => {
    if (!req.body.orderID) {
        res.status(404)
        throw new Error('orderID not found! Please pass orderID in the object')
    }

    let documentRef = firestore.doc(`${COLLECTION_NAME}/${req.body.orderID}`);

    try {
        let deleteRes = await documentRef.delete();
    } catch (error) {
        throw new Error (`Error deleting document: ${error}`)
    }

    res.json({ message: "Delete success" });
})

export { adminCreateOrder, adminDeleteOrder, adminGetAllOrders, adminGetOrderById, adminUpdateOrder }