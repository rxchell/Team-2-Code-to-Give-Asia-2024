import express from "express";

import { createDonation, deleteDonation, getDonationByID, getDonations, updateDonation, getDonationsByUserID } from "../controllers/donationController.js";
import { protect, admin, donor } from "../middleware/authMiddleware.js";

import multer from 'multer';

var upload = multer({ dest: "./uploads" }).single('imageURL')
const router = express.Router();

router.get("/user", protect, getDonationsByUserID);
router.get("/:id", getDonationByID);
// router.route("/").get(protect, admin, getDonations);
router.route("/").get(getDonations);
router.get("/user/:id", getDonationsByUserID);
router.post("/", protect, donor, upload, createDonation);
router.delete("/:id", deleteDonation);
router.put("/:id", updateDonation);

export default router;
