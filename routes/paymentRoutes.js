const express = require("express");
const { createOrder } = require("../controllers/paymentController");

const router = express.Router();

// ✅ POST route for Razorpay order creation
router.post("/create-razorpay-order", createOrder);

module.exports = router;
