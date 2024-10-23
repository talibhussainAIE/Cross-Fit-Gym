const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const FormSubmission = require('../models/FormSubmission');

// Route to handle form submissions
router.post('/submit', async (req, res) => {
    const { userEmail, trainerName, trainerEmail, userMessage } = req.body;

    try {
        // Save form data to MongoDB
        const submission = new FormSubmission({
            userEmail:"faizanzeeshan444@gmail.com",
            trainerName,
            trainerEmail,
            userMessage,
        });
        await submission.save();

        // Send confirmation email
        let transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        console.log('transporter',transporter)
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: 'Confirmation Email',
            text: `Hello, thank you for submitting the form. Your trainer is ${trainerName}.`,
        };
        console.log('mailOptions',mailOptions)
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Form submitted and confirmation email sent!' });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error });
    }
});

// Route to fetch form data (for frontend display)
router.get('/data', async (req, res) => {
    try {
        const submissions = await FormSubmission.find();
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
    }
});



module.exports = router;
