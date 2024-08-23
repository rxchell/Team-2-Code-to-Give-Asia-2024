// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD67j4K-mYCf1wvXrW4MypsJeZFCs0wBeQ",
  authDomain: "codetogive2024-96f53.firebaseapp.com",
  projectId: "codetogive2024-96f53",
  storageBucket: "codetogive2024-96f53.appspot.com",
  messagingSenderId: "413236645295",
  appId: "1:413236645295:web:8327cb005100eb0a70335a",
};

// Initialize Firebase and needed functions
const app = initializeApp(firebaseConfig);
// Firestore
export const firestore = getFirestore(app);
