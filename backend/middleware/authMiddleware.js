import asyncHandler from "./asyncHandler.js";
import { auth, firestore } from "../configfirebase.js";

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Read the JWT from the cookie
    token = req.cookies.jwt;

    if (token) {
        const user = await auth.verifyIdToken(token);
        const userId = user.uid;
        const userDocRef = firestore.collection('users').doc(userId)
        const userSnap = await userDocRef.get();
        if (userSnap) {
            req.user = userSnap.data()
        } else {
            throw new Error("Not authorized, token failed");
        }

        next()
    } else {
        res.status(401);
        throw new Error("Not authorized, no token")
    }
})

// Agency middleware
const agency = asyncHandler(async (req, res, next) => {
    if (req.user && req.user.isAgency) {
        next();
    } else {
        throw new Error("Not authorized as agency");
    }
})

// Donor middleware
const donor = asyncHandler(async (req, res, next) => {
    if (req.user && req.user.isDonor) {
        next();
    } else {
        throw new Error("Not authorized as donor");
    }
})

// Admin middleware
const admin = asyncHandler(async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        throw new Error("Not authorized as admin");
    }
})

export { protect, agency, donor, admin }