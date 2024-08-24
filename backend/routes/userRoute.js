import express from 'express'
import { loginUser, logoutUser, registerUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
const router = express.Router()

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/', registerUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router