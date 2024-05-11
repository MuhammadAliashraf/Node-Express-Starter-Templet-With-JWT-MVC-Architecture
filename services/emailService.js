const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "", // example@gmail.com
    pass: "", // App key 
  },
});

const sendWelcomeEmail = async (email) => {
  try {
    const mailOptions = {
      from: "WelcomeUser@gmail.com", 
      to: email,
      subject: "Welcome to Your App",
      text: `Thank you ${email} for registering on Your App. We are excited to have you!`,
    };
    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent successfully");
  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
};

module.exports = { sendWelcomeEmail };
