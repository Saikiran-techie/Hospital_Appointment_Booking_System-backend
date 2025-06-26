const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// ✅ CORS Config — allow localhost + vercel in development
const allowedOrigins = [
  "http://localhost:3000", // local development
  "https://hospital-appointment-booking-system-umber.vercel.app" // production frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl or Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS policy violation — Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST"],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(bodyParser.json());

// ✅ Routes
app.use("/api", paymentRoutes);

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('Welcome to the Hospital Management System API!');
});

// Export app
module.exports = app;
