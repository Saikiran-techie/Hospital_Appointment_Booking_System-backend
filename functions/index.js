const functions = require("firebase-functions");
const axios = require("axios");

exports.sendEmail = functions.https.onCall(async (data, context) => {
    try {
        const serviceId = functions.config().emailjs.service_id;
        const templateId = functions.config().emailjs.template_id;
        const userId = functions.config().emailjs.user_id;

        const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
            service_id: serviceId,
            template_id: templateId,
            user_id: userId,
            template_params: {
                to_name: data.to_name,
                from_name: data.from_name,
                message: data.message,
                reply_to: data.reply_to
            }
        });

        return { success: true, data: response.data };
    } catch (error) {
        console.error("EmailJS Error:", error.response ? error.response.data : error.message);
        throw new functions.https.HttpsError("internal", "Email sending failed");
    }
});
