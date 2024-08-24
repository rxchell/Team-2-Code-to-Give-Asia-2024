import { collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { firestore } from '../configfirebase.js';
import asyncHandler from "../middleware/asyncHandler.js";

// @desc    Get all orders
// @route   GET /api/orders
// @access  Public
const getAllOrders = asyncHandler(async (req, res) => {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'orders'));
        const orders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(orders);
    } catch (error) {
        res.status(500).send('Error getting orders: ' + error.message);
    }
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Public
const getOrderById = asyncHandler(async (req, res) => {
    try {
        const orderRef = doc(firestore, 'orders', req.params.id);
        const orderSnap = await getDoc(orderRef);

        if (!orderSnap.exists()) {
            return res.status(404).send('Order not found');
        }

        res.json({ id: orderSnap.id, ...orderSnap.data() });
    } catch (error) {
        res.status(500).send('Error getting order: ' + error.message);
    }
});

// @desc    Update order by ID
// @route   PUT /api/orders/:id
// @access  Private/Admin
const updateOrderById = asyncHandler(async (req, res) => {
    try {
        const orderRef = doc(firestore, 'orders', req.params.id);
        const { orderId, donationId, userId, quantity, status } = req.body;

        await updateDoc(orderRef, {
            orderId: orderId || (await getDoc(orderRef)).data().orderId,
            donationId: donationId || (await getDoc(orderRef)).data().donationId,
            userId: userId || (await getDoc(orderRef)).data().userId,
            quantity: quantity || (await getDoc(orderRef)).data().quantity,
            status: status || (await getDoc(orderRef)).data().status,
        });

        res.json({ id: req.params.id, orderId, donationId, userId, quantity, status });
    } catch (error) {
        res.status(500).send('Error updating order: ' + error.message);
    }
});

// @desc    Delete order by ID
// @route   DELETE /api/orders/:id
// @access  Private/Admin
const deleteOrderById = asyncHandler(async (req, res) => {
    try {
        const orderRef = doc(firestore, 'orders', req.params.id);
        await deleteDoc(orderRef);
        res.sendStatus(204); // No Content
    } catch (error) {
        res.status(500).send('Error deleting order: ' + error.message);
    }
});

// @desc    Create a new order
// @route   POST /api/orders
// @access  Private/Admin
const createOrder = asyncHandler(async (req, res) => {
    try {
        const { orderId, donationId, userId, quantity, status } = req.body;

        if (!orderId || !donationId || !userId || quantity === undefined || !status) {
            return res.status(400).send('Missing required fields');
        }

        const docRef = await addDoc(collection(firestore, 'orders'), {
            orderId,
            donationId,
            userId,
            quantity,
            status
        });

        res.status(201).json({ id: docRef.id, orderId, donationId, userId, quantity, status });
    } catch (error) {
        res.status(500).send('Error creating order: ' + error.message);
    }
});

export { getAllOrders, getOrderById, updateOrderById, deleteOrderById, createOrder };