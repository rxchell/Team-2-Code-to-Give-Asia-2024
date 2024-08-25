import asyncHandler from "../middleware/asyncHandler.js";
import { firestore } from "../configfirebase.js";

const COLLECTION_NAME = 'orders'

// @desc    Get all orders for a particular userId
// @route   GET /api/orders/:userId
// @access  Private
const getAllOrders = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    let orders = [];

    const querySnapshot = await firestore.collection(COLLECTION_NAME)
        .where('userId', '==', userId).get();
    
    if (querySnapshot.empty) {
        res.status(404)
        throw new Error('No orders found for this userId');
    }

    querySnapshot.forEach(doc => {
        orders.push({ [doc.id]: doc.data() });
    });

    res.status(200).json(orders);
})

// @desc    Get a specific order by its id for a particular user
// @route   GET /api/orders/:userId/:orderId
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
    const { userId, orderId } = req.params;
    
    const queryDoc = await firestore.collection(COLLECTION_NAME).doc(orderId).get();
    const order = queryDoc.data();

    if (!queryDoc.exists || order.userId !== userId) {
        res.status(404)
        throw new Error('No orders found for this userId and orderId');
    }
    
    res.status(200).json(order);
})

// @desc    Create a new order request for a particular user
// @route   POST /api/orders/:userId/
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const { quantity, donationId } = req.body;
    const defaultStatus = "Pending"

    if (!quantity || !donationId) {
        res.status(400);
        throw new Error('quantity and donationId fields are required');
    }

    const donationRef = firestore.collection('donations').doc(donationId);
    const doc = await donationRef.get();
    const currentData = doc.data();

    let newQuantity = currentData.servingSize - quantity

    const updateData = {
        "servingSize": newQuantity,
        updatedAt: new Date().toISOString()
    };

    const orderBody = {
        userId: userId,
        quantity: quantity,
        donationId: donationId,
        status: defaultStatus,
        createdAt: new Date().toISOString()
    };
    
    const docRef = await firestore.collection(COLLECTION_NAME).add(orderBody);
    await donationRef.update(updateData); 

    const newDoc = await docRef.get();
    res.status(201).json({
        id: docRef.id,
        ...newDoc.data()
    });
})

// @desc    Update an existing order request for a particular user
// @route   POST /api/orders/:userId/:orderId
// @access  Private
const updateOrder = asyncHandler(async (req, res) => {
    const { userId, orderId } = req.params;
    
    const orderRef = firestore.collection(COLLECTION_NAME).doc(orderId);
    const doc = await orderRef.get();
    const currentData = doc.data();

    if (!doc.exists || currentData.userId !== userId) {
        res.status(404);
        throw new Error('No orders found for this userId and orderId');
    }

    const updateData = {
        ...req.body,
        updatedAt: new Date().toISOString()
    };

    await orderRef.update(updateData);
    const updatedDoc = await orderRef.get();

    res.status(200).json({
        id: orderId,
        ...updatedDoc.data()
    });
});

export { getAllOrders, getOrderById, createOrder, updateOrder }