
const Razorpay = require("razorpay");

const razorpayInstance = new Razorpay({
    key_id: process.env.RP_KEY_ID,
    key_secret: process.env.RP_KEY_SECRET,
});

module.exports = razorpayInstance;
// This module exports the Razorpay instance configured with the key ID and secret from environment variables.
// This allows other parts of the application to use Razorpay functionalities like creating orders, processing payments, etc.