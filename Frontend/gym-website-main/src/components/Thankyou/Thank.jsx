import React from 'react';
import './Thank.css'; 

const Thank = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thank You!</h1>
        <p>Your submission has been received successfully.</p>
        <p>We will get back to you shortly.</p>
        <a href="/" className="back-home">Back to Home</a>
      </div>
    </div>
  );
};

export default Thank;
