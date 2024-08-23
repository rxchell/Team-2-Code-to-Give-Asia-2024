import express from 'express'
import { loginUser, logoutUser, registerUser } from '../controllers/userController.js';
const router = express.Router()

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/', registerUser);

export default router