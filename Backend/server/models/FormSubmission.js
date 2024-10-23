const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    trainerName: { type: String, required: true },
    trainerEmail: { type: String, required: true },
    userMessage: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);
module.exports = FormSubmission;
