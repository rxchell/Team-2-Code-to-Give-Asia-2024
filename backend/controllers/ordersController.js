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
    const order = queryDoc.data()

    if (!queryDoc.exists || order.userId !== userId) {
        res.status(404)
        throw new Error('No orders found for this userId and orderId');
    }
    
    res.status(200).json(order);
})

// TODO
// @desc    Get a specific order by its id for a particular user
// @route   GET /api/orders/:userId/:orderId
// @access  Private
// const createOrder = asyncHandler(async (req, res) => {
//     const userId = req.params.userId;

//     let collectionRef = firestore.collection(COLLECTION_NAME);
//     let docRef = null;
//     delete req.body["orderID"];
    
//     docRef = await collectionRef.add(req.body);
//     res.json({ [docRef.id]: req.body });
//     res.status(200).json(order);
// })

// TODO
// const updateOrder = asyncHandler(async (req, res) => {
//     const { userId, orderId } = req.params;
// })

export { getAllOrders, getOrderById }