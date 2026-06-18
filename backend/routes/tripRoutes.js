const express = require("express");
const router = express.Router();
const {
  generateTrip,
  getMyTrips,
  toggleSaveTrip,
  updateTrip,
  deleteTrip,
} = require("../controllers/tripController");
const { protect } = require("../middleware/authMiddleware");

router.get("/mine", protect, getMyTrips);
router.post("/generate", protect, generateTrip);
router.patch("/:id", protect, updateTrip);
router.patch("/:id/save", protect, toggleSaveTrip);
router.delete("/:id", protect, deleteTrip);

module.exports = router;
