import express from 'express'
import { registerUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
const router = express.Router()

router.post('/', registerUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router