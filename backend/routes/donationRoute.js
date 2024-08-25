import express from "express";

import { createDonation, deleteDonation, getDonationByID, getDonations, updateDonation, getDonationsByUserID } from "../controllers/donationController.js";
import { protect, admin } from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/user", protect, getDonationsByUserID);
router.get("/:id", getDonationByID);
router.route("/").get(protect, admin, getDonations);
// router.route("/").get(getDonations);
router.post("/", createDonation);
router.delete("/:id", deleteDonation);
router.put("/:id", updateDonation);

export default router;
