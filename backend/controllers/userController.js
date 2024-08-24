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

        // setting userRole
        const isAdmin = false;
        const isAgency = false;
        const isDonor = false;
        if (userRole && userRole == 'admin') {
            isAdmin = true;
        } else if (userRole && userRole == 'agency') {
            isAgency = true;
        } else if (userRole && userRole == 'donor') {
            isDonor = true;
        }

        // stores user information
        userDocRef.set({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            isAdmin: isAdmin,
            isAgency: isAgency,
            isDonor: isDonor
            // TODO include other information once confirmed
        })
        res.json({
            message: "user registered successfully"
        })
    }
})

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
  const user = auth.currentUser;
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
  await setDoc(userRef, { name, address, area, contactEmail, contactNum, contactPerson, entityCertificate, postalCode, tags, type }, { merge: true });
  const user = auth.currentUser;
  console.log(user);
  if (user) {
    await updateProfile(user, { displayName: name });
  } else {
    return res.status(401).json({ message: "User not authenticated" });
  }
  
  res.status(200).json({ message: "User updated successfully" });
});

export { registerUser, getAllUsers, getUserById, deleteUser, updateUser };
