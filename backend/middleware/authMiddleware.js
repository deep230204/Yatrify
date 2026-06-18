const User = require("../models/user");

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Login required." });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Login required." });
    }

    const user = await User.findOne({ sessionToken: token });

    if (!user) {
      return res.status(401).json({ message: "Session expired. Please login again." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Auth Middleware Error:", error.message);
    return res.status(500).json({ message: "Authentication failed." });
  }
};

module.exports = { protect };
