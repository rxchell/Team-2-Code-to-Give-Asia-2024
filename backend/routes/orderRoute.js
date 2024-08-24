import express from "express";
import { getAllOrders, getOrderById } from "../controllers/ordersController.js";
import { adminCreateOrder, adminDeleteOrder, adminGetAllOrders, adminGetOrderById, adminUpdateOrder } from "../controllers/ordersAdminController.js"

const router = express.Router();

// Admin Routes
router.post("/admin/create", adminCreateOrder);
router.get("/admin/getById", adminGetOrderById);
router.get("/admin/getAll", adminGetAllOrders);
router.delete("/admin/delete", adminDeleteOrder);
router.put("/admin/update", adminUpdateOrder);

// User Routes
// TODO router.post('/:userId', createOrder);
// TODO router.post('/:userId/:orderId', updateOrder);
router.get('/:userId', getAllOrders);
router.get('/:userId/:orderId', getOrderById);

export default router;