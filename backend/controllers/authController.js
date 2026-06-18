const crypto = require("crypto");
const User = require("../models/user");
const { isMailConfigured, sendPasswordResetOtpEmail } = require("../config/mailer");

const hashPassword = (password, salt) =>
  crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");

const generateToken = () => crypto.randomBytes(48).toString("hex");
const hashOtp = (otp) => crypto.createHash("sha256").update(otp).digest("hex");
const generateOtp = () => `${crypto.randomInt(100000, 1000000)}`;
const OTP_EXPIRY_IN_MS = 10 * 60 * 1000;

const buildAuthPayload = (user) => ({
  token: user.sessionToken,
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
  },
});

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required." });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    const passwordSalt = crypto.randomBytes(16).toString("hex");
    const passwordHash = hashPassword(password, passwordSalt);
    const sessionToken = generateToken();

    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      passwordSalt,
      sessionToken,
    });

    return res.status(201).json(buildAuthPayload(user));
  } catch (error) {
    console.log("Signup Error:", error.message);
    return res.status(500).json({ message: "Unable to create account right now." });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const passwordHash = hashPassword(password, user.passwordSalt);

    if (passwordHash !== user.passwordHash) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    user.sessionToken = generateToken();
    await user.save();

    return res.status(200).json(buildAuthPayload(user));
  } catch (error) {
    console.log("Login Error:", error.message);
    return res.status(500).json({ message: "Unable to login right now." });
  }
};

const getCurrentUser = async (req, res) =>
  res.status(200).json({
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    },
  });

const logout = async (req, res) => {
  try {
    req.user.sessionToken = null;
    await req.user.save();

    return res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    console.log("Logout Error:", error.message);
    return res.status(500).json({ message: "Unable to logout right now." });
  }
};

const requestPasswordResetOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    if (!isMailConfigured()) {
      return res.status(500).json({
        message:
          "Email service is not configured. Add SMTP credentials in backend/.env first.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(404).json({ message: "No account found with this email." });
    }

    const otp = generateOtp();

    user.passwordResetOtpHash = hashOtp(otp);
    user.passwordResetOtpExpiresAt = new Date(Date.now() + OTP_EXPIRY_IN_MS);
    await user.save();

    await sendPasswordResetOtpEmail({
      to: user.email,
      otp,
      name: user.name,
    });

    return res.status(200).json({
      message: "OTP sent successfully to your email.",
    });
  } catch (error) {
    console.log("Request Password Reset OTP Error:", error.message);
    return res.status(500).json({ message: "Unable to send OTP right now." });
  }
};

const resetPasswordWithOtp = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    if (!email || !otp || !password) {
      return res
        .status(400)
        .json({ message: "Email, OTP, and new password are required." });
    }

    if (String(password).length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long." });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(404).json({ message: "No account found with this email." });
    }

    const isOtpValid =
      user.passwordResetOtpHash &&
      user.passwordResetOtpExpiresAt &&
      user.passwordResetOtpExpiresAt.getTime() > Date.now() &&
      user.passwordResetOtpHash === hashOtp(String(otp).trim());

    if (!isOtpValid) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    const passwordSalt = crypto.randomBytes(16).toString("hex");
    user.passwordSalt = passwordSalt;
    user.passwordHash = hashPassword(password, passwordSalt);
    user.passwordResetOtpHash = null;
    user.passwordResetOtpExpiresAt = null;
    user.sessionToken = generateToken();
    await user.save();

    return res.status(200).json({
      message: "Password reset successful.",
      ...buildAuthPayload(user),
    });
  } catch (error) {
    console.log("Reset Password With OTP Error:", error.message);
    return res.status(500).json({ message: "Unable to reset password right now." });
  }
};

module.exports = {
  signup,
  login,
  logout,
  getCurrentUser,
  requestPasswordResetOtp,
  resetPasswordWithOtp,
};
