// Import the functions you need from the SDKs you need
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from 'firebase-admin/firestore'

import 'dotenv/config'

// Firebase configuration

// Initialize Firebase and needed functions
const app = initializeApp(
  { credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS) }
);
// Firestore
export const firestore = getFirestore(app);
export const auth = getAuth(app);
