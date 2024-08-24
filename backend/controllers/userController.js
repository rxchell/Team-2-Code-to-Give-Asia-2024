import asyncHandler from "../middleware/asyncHandler.js";
import { auth } from "../configfirebase.js";
import { firestore } from "../configfirebase.js";
import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// @desc    login user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (userCredential) {
    const user = userCredential.user;
    const token = await user.getIdToken();

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 5 * 60 * 1000, // 5 mins
    });
    res.json({
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      // TODO user type
    });
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Logged out successfully" });
});

// @desc    Register user
// @route   POST /api/users
// @access  Private/Admin
const registerUser = asyncHandler(async (req, res) => {
  // TODO add other fields once form confirmed
  const { name, email, password } = req.body;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  // TODO link up details from user collection

  if (userCredential) {
    const user = userCredential.user;
    const token = await user.getIdToken();

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 5 * 60 * 1000, // 5 mins
    });
    res.json({
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      // TODO user type
    });
  }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getAllUsers = asyncHandler(async (req, res) => {
  const usersRef = collection(firestore, "users");
  const usersSnapshot = await getDocs(usersRef);
  const usersList = usersSnapshot.docs.map((doc) => doc.data());
  res.status(200).json(usersList);
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userRef = doc(firestore, "users", id);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    res.status(200).json(userSnap.data());
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userRef = doc(firestore, "users", id);
  await deleteDoc(userRef);
  const user = getAuth().currentUser;
  await firebaseDeleteUser(user);
  res.status(200).json({ message: "User deleted successfully" });
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    address,
    area,
    contactEmail,
    contactNum,
    contactPerson,
    entityCertificate,
    postalCode,
    tags,
    type,
  } = req.body;
  const userRef = doc(firestore, "users", id);
  await setDoc(userRef, { name, email, address, area, contactEmail, contactNum, contactPerson, entityCertificate, postalCode, tags, type }, { merge: true });
  const user = getAuth().currentUser;
  await updateProfile(user, { displayName: name });
  res.status(200).json({ message: "User updated successfully" });
});

export { loginUser, logoutUser, registerUser, getAllUsers, getUserById, deleteUser, updateUser };
