import express from 'express';
import { getAllOrders, getOrderById, updateOrderById, deleteOrderById, createOrder } from '../controllers/orderController.js';
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

// Define routes and map them to controller functions
router.get('/', asyncHandler(getAllOrders)); // Get all orders
router.get('/:id', asyncHandler(getOrderById)); // Get order by ID
router.put('/:id', asyncHandler(updateOrderById)); // Update order by ID
router.delete('/:id', asyncHandler(deleteOrderById)); // Delete order by ID
router.post('/', asyncHandler(createOrder)); // Create a new order

export default router;