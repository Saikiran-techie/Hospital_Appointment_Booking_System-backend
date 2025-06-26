const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// ✅ Proper CORS config middleware — remove duplicate
app.use(cors({
  origin: "https://hospital-appointment-booking-system-umber.vercel.app",  // no trailing slash here
  methods: ["GET", "POST"],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// ✅ Body parser middleware
app.use(bodyParser.json());

// ✅ Payment route
app.use("/api", paymentRoutes);

// ✅ Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Hospital Management System API!');
});

// ✅ Export app
module.exports = app;
