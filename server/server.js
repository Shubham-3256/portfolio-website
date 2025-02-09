require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5001; // Change 5000 to 5001 or another available port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Sending Route
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter to send emails
  let transporter = nodemailer.createTransport({
    service: "gmail", // Using Gmail SMTP
    auth: {
      user: process.env.EMAIL, // Your Gmail address
      pass: process.env.PASSWORD, // Your App Password (NOT your Gmail password)
    },
  });

  let mailOptions = {
    from: `"${name}" <${email}>`, // Sender name & email
    to: process.env.EMAIL, // Your email where you receive messages
    subject: `New Contact Form Submission from ${name}`,
    text: `You received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Error sending message." });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
