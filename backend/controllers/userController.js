import asyncHandler from "../middleware/asyncHandler.js";
import { auth } from "../configfirebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// @desc    login user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    if (userCredential) {
        const user = userCredential.user
        const token = await user.getIdToken()

        res.cookie('jwt', token, {
            httpOnly: true, secure: true, sameSite: 'strict', maxAge: 5 * 60 * 1000 // 5 mins 
        });
        res.json({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            // TODO user type
        })
    }
})

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', { httpOnly: true, expires: new Date(0) });
    res.status(200).json({ message: 'Logged out successfully' })
})

// @desc    Register user
// @route   POST /api/users
// @access  Private/Admin
const registerUser = asyncHandler(async (req, res) => {
    // TODO add other fields once form confirmed
    const { name, email, password } = req.body;

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // TODO link up details from user collection

    if (userCredential) {
        const user = userCredential.user
        const token = await user.getIdToken()

        res.cookie('jwt', token, {
            httpOnly: true, secure: true, sameSite: 'strict', maxAge: 5 * 60 * 1000 // 5 mins 
        });
        res.json({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            // TODO user type
        })
    }
})

export { loginUser, logoutUser, registerUser }