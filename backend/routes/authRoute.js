import { loginUser, logoutUser } from "../controllers/authController.js"
import express from 'express'

const router = express.Router()

router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router