import express from "express";

import { createDonation, deleteDonation, getDonationByID, getDonations, updateDonation } from "../controllers/donationController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import { createDonation, deleteDonation, getDonationByID, getDonationsByUserID, getDonations, updateDonation } from "../controllers/donationController.js";


const router = express.Router();

router.get("/:id", getDonationByID);
router.route("/").get(protect, admin, getDonations);
router.get("/user/:id", getDonationsByUserID);
router.post("/", createDonation);
router.delete("/:id", deleteDonation);
router.put("/:id", updateDonation);

export default router;
