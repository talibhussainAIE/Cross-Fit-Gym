import React, { useState } from 'react';

const BannerForm = () => {
    const [formData, setFormData] = useState({
        userEmail: '',
        trainerName: '',
        trainerEmail: '',
        userMessage: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });a
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/form/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data.message); // Display confirmation message on success
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="userEmail"
                placeholder="Your Email"
                value={formData.userEmail}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="trainerName"
                placeholder="Trainer Name"
                value={formData.trainerName}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="trainerEmail"
                placeholder="Trainer Email"
                value={formData.trainerEmail}
                onChange={handleChange}
                required
            />
            <textarea
                name="userMessage"
                placeholder="Your Message"
                value={formData.userMessage}
                onChange={handleChange}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default BannerForm;
