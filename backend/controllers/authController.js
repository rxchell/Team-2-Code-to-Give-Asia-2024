import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import asyncHandler from "../middleware/asyncHandler.js";
import { auth } from '../configfirebase.js';

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
};

const app = initializeApp(firebaseConfig);
export const client_auth = getAuth(app);

// @desc    login user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { phoneNumber, password } = req.body;
    let user = await auth.getUserByPhoneNumber(phoneNumber)
    if (!user) {
        throw new Error("No user with this phone number")
    }
    const userEmail = user.email

    const userCredential = await signInWithEmailAndPassword(client_auth, userEmail, password);

    if (userCredential) {
        user = userCredential.user
        const token = await user.getIdToken()

        res.cookie('jwt', token, {
            httpOnly: true, secure: true, sameSite: 'strict', maxAge: 5 * 60 * 1000 // 5 mins 
        });
        res.json({ message: "login successful" })
    }
})

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', { httpOnly: true, expires: new Date(0) });
    res.status(200).json({ message: 'Logged out successfully' })
})

export { loginUser, logoutUser }