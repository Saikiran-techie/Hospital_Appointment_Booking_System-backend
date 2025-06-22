
const razorpayInstance = require("../config/razorpay");

exports.createOrder = async (req, res) => {
    const { amount, currency = "INR", receipt } = req.body;

    try {
        const options = {
            amount, // amount in paise (₹500 = 50000)
            currency,
            receipt,
        };

        const order = await razorpayInstance.orders.create(options);

        res.status(200).json(order);
    } catch (error) {
        console.error("Razorpay Order Error:", error);
        res.status(500).json({ error: "Failed to create order" });
    }
};

