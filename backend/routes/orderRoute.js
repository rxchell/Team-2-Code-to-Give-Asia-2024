import express  from 'express'
import { getAllOrders, getOrderById } from '../controllers/ordersController.js';
const router = express.Router()

router.get('/:userId', getAllOrders);
router.get('/:userId/:orderId', getOrderById);

export default router