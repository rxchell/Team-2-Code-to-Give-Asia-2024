import express from "express";
import { createDonation, deleteDonation, getDonationByID, getDonations, updateDonation } from "../controllers/donationController.js";

const router = express.Router();

router.get("/:id", getDonationByID);
router.get("/", getDonations);
router.post("/", createDonation);
router.delete("/:id", deleteDonation);
router.put("/:id", updateDonation);

export default router;
