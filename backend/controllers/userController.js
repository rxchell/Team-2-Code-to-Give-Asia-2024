import asyncHandler from "../middleware/asyncHandler.js";
import { auth, firestore, storage } from "../configfirebase.js";

// @desc    Register new user 
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // TODO add other fields once form confirmed
  const { organisationName,
    password,
    area,
    address,
    postalCode,
    operationHour,
    entityNature,
    accountType,
    contactPerson,
    contactNumber,
    contactEmail, } = req.body;

  const user = await auth.createUser({
    displayName: organisationName,
    email: contactEmail,
    phoneNumber: contactNumber,
    password: password
  });

  if (user) {
    const userId = user.uid
    const userDocRef = firestore.collection('users').doc(userId)

    // setting accountType
    let isAdmin = false;
    let isAgency = false;
    let isDonor = false;
    if (accountType && accountType == 'admin') {
      isAdmin = true;
    } else if (accountType && accountType == 'agency') {
      isAgency = true;
    } else if (accountType && accountType == 'donor') {
      isDonor = true;
    }

    console.log(req.file);
    // console.log(req.body)
    const imageFile = req.file
    // save image to firebase
    await storage.bucket().upload(imageFile.path);
    const imageRef = storage.bucket().file(imageFile.filename)
    imageRef.makePublic()
    let uploadCertificate = imageRef.publicUrl();
    console.log(uploadCertificate)

    // stores user information
    userDocRef.set({
      id: userId,
      isAdmin,
      isAgency,
      isDonor,
      organisationName,
      area,
      address,
      postalCode,
      operationHour,
      entityNature,
      uploadCertificate,
      contactPerson,
      contactNumber,
      contactEmail,
    })
    res.status(200).json({
      message: "user registered successfully"
    })
  }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getAllUsers = asyncHandler(async (req, res) => {
  const usersSnapshot = await firestore.collection('users').get();
  const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.status(200).json(usersList);
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userSnap = await firestore.collection('users').doc(id).get();

  if (userSnap.exists) {
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

  //delete user from firebase authentication
  await auth.deleteUser(id);

  //delete user document from Firestore
  await firestore.collection('users').doc(id).delete();

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
    phoneNumber,
    contactPerson,
    entityCertificate,
    postalCode,
    tags,
    type,
  } = req.body;
  const userRef = firestore.collection('users').doc(id);
  await userRef.set({
    name,
    email,
    address,
    area,
    phoneNumber,
    contactPerson,
    entityCertificate,
    postalCode,
    tags,
    type
  }, { merge: true });

  //   await auth.updateUser(id, { displayName: name, email: email });

  res.status(200).json({ message: "User updated successfully" });
});

export { registerUser, getAllUsers, getUserById, deleteUser, updateUser };
