import asyncHandler from "../middleware/asyncHandler.js";
import { auth, firestore } from "../configfirebase.js";

// @desc    Register new user 
// @route   POST /api/users
// @access  Private/Admin
const registerUser = asyncHandler(async (req, res) => {
    // TODO add other fields once form confirmed
    const { name, email, password, phoneNumber, userRole } = req.body;

    const user = await auth.createUser({
        displayName: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    });

    if (user) {
        const userId = user.uid
        const userDocRef = firestore.collection('users').doc(userId)

        // create role for user, default is individual
        await auth.createCustomToken(userId, { userRole: userRole || "individual" });

        // stores user information
        userDocRef.set({
            name: name,
            email: email,
            phoneNumber: phoneNumber
            // TODO include other information once confirmed
        })
        res.json({
            message: "user registered successfully"
        })
    }
})

export { registerUser }