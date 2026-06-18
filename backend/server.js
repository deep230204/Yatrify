require("dotenv").config({ path: require("path").join(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

if (!process.env.GEMINI_API_KEY) {
  console.warn("GEMINI_API_KEY is missing. Gemini fallback itinerary generation will be skipped.");
}

if (!process.env.GROQ_API_KEY) {
  console.warn("GROQ_API_KEY is missing. Primary Groq itinerary generation will be skipped.");
}

if (!process.env.GOOGLE_PLACES_API_KEY && !process.env.GOOGLE_MAPS_API_KEY) {
  console.warn("GOOGLE_PLACES_API_KEY is missing. Real hotel, restaurant, and attraction data will not load.");
}

if (
  !process.env.SMTP_HOST ||
  !process.env.SMTP_USER ||
  !process.env.SMTP_PASS ||
  !process.env.MAIL_FROM
) {
  console.warn("SMTP mail settings are missing. OTP emails will not be sent until SMTP_HOST, SMTP_USER, SMTP_PASS, and MAIL_FROM are set.");
}

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Yatrify Backend Running");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/trip", require("./routes/tripRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
