// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Create a transporter using your Ethereal SMTP credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "social.globalitmaster@gmail.com", // Your Ethereal email address
        pass: "ilmo xowa jbey aqkh", // Your Ethereal email password
      },
    });

    const mailOptions = {
      from: `<${email}>`, // Sender's name and email
      to: "social.globalitmaster@gmail.com", // Your receiving email address
      subject: subject,
      text: message,
      html: `<b>${message}</b>`, // Use HTML if needed
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId); // Log the message ID
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
