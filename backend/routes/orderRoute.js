import express from "express";
import { getAllOrders, getOrderById, createOrder, updateOrder } from "../controllers/ordersController.js";
import { adminCreateOrder, adminDeleteOrder, adminGetAllOrders, adminGetOrderById, adminUpdateOrder } from "../controllers/ordersAdminController.js"
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin Routes
router.post("/admin/create", protect, admin, adminCreateOrder);
// router.post("/admin/create", adminCreateOrder);
router.get("/admin/getById", protect, admin, adminGetOrderById);
router.get("/admin/getAll", protect, admin, adminGetAllOrders);
// router.get("/admin/getAll", adminGetAllOrders);
router.delete("/admin/delete", protect, admin, adminDeleteOrder);
router.put("/admin/update", protect, admin, adminUpdateOrder);

// User Routes
router.post('/', protect, createOrder);
router.patch('/:orderId', protect, updateOrder);
router.get('/', protect, getAllOrders);
router.get('/:orderId', protect, getOrderById);

export default router;