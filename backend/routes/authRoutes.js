const express = require("express");
const {
  signup,
  login,
  logout,
  getCurrentUser,
  requestPasswordResetOtp,
  resetPasswordWithOtp,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password/request-otp", requestPasswordResetOtp);
router.post("/forgot-password/reset", resetPasswordWithOtp);
router.get("/me", protect, getCurrentUser);
router.post("/logout", protect, logout);

module.exports = router;
