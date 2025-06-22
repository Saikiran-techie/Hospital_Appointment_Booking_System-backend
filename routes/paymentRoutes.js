
const express = require("express");
const { createOrder } = require("../controllers/paymentController");

const router = express.Router();

router.post("/create-razorpay-order", createOrder);

module.exports = router;
