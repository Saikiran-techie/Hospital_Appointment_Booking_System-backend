const razorpayInstance = require("../config/razorpay");

exports.createOrder = async (req, res) => {
    const { amount, currency = "INR", receipt } = req.body;

    // ✅ Basic validation
    if (!amount || !receipt) {
        return res.status(400).json({ error: "Amount and receipt ID are required." });
    }

    try {
        const options = {
            amount,       // in paise (e.g., ₹200 = 20000)
            currency,
            receipt,
        };

        const order = await razorpayInstance.orders.create(options);

        if (!order || !order.id) {
            throw new Error("Order creation returned empty response");
        }

        res.status(200).json(order);
    } catch (error) {
        console.error("❌ Razorpay Order Creation Error:", error);
        res.status(500).json({ error: "Failed to create Razorpay order." });
    }
};
