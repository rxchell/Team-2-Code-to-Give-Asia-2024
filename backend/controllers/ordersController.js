import asyncHandler from "../middleware/asyncHandler.js";
import { firestore } from "../configfirebase.js";

const collectionName = 'orders'

// @desc    Get all orders for a particular userId
// @route   GET /api/orders/:userId
// @access  Private
const getAllOrders = asyncHandler(async (req, res, next) => {
    const userId = req.params.userId;
    let orders = [];

    const querySnapshot = await firestore.collection(collectionName)
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
    
    const queryDoc = await firestore.collection(collectionName).doc(orderId).get();
    const order = queryDoc.data()

    if (!queryDoc.exists || order.userId !== userId) {
        res.status(404)
        throw new Error('No orders found for this userId and orderId');
    }
    
    res.status(200).json(order);
})

export { getAllOrders, getOrderById }