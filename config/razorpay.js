const Razorpay = require("razorpay");

// ✅ Ensure environment variables exist
if (!process.env.RP_KEY_ID || !process.env.RP_KEY_SECRET) {
    throw new Error("Missing Razorpay credentials in environment variables.");
}

const razorpayInstance = new Razorpay({
    key_id: process.env.RP_KEY_ID,
    key_secret: process.env.RP_KEY_SECRET,
});

module.exports = razorpayInstance;

// ✅ Razorpay instance with secure key and secret from .env
