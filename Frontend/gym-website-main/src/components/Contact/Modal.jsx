import React, { useState } from "react";
import "./Modal.css"; // Ensure the CSS file path is correct

const Modal = ({ isOpen, onClose }) => {
  // State to manage form inputs, including age
  const [formData, setFormData] = useState({ name: "", email: "", age: "", message: "" });
  const [responseMessage, setResponseMessage] = useState(""); // For showing backend response

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post form data to backend
      const response = await fetch(`http://localhost:5001/register`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const resJson = await response.json();
      if(resJson.error){
        setResponseMessage(resJson.error);
      } else {
        setResponseMessage(resJson.message);
      }
      setFormData({ name: "", email: "", age: "", message: "" }); // Reset form fields after submission
      // Optionally reload page or close modal
      // location.reload(); or onClose();
      location.reload
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Error sending message. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="bannerform">
          <h4>JOIN US</h4>
          <p>Ready to join us? Fill out the form below and become part of our community</p>

          {/* Display response message */}
          {responseMessage && <p>{responseMessage}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Your Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
