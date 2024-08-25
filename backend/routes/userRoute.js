import express from 'express'
import { registerUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import multer from 'multer';

const router = express.Router()
var upload = multer({ dest: "./uploads" }).single('uploadCertificate')

router.post('/', upload, registerUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router