import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BannerForm.css"; // Import your CSS file

const BannerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate(); // Use React Router's useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Submit form data (e.g., send it to a server)
    console.log("Form submitted:", { name, email, phoneNumber, message });
    
    // Clear form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setTermsAccepted(false);

    // Navigate to the thank-you page after submission
    navigate("/thank-you");
  };

  return (
    <div
      className="col-md-2 col-sm-2 col-lg-2 col-12 offset-lg-3 aos-init aos-animate"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <div className="bannerform">
        <h4>Get a FREE TIP</h4>
        <p>Discuss Your plans With Our Experts</p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="emailAddress"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              name="phoneNumber"
              placeholder="Phone Number*"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              placeholder="Brief Discussion about your book*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="form-check">
            <label>
              <input
                id="check-bx"
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <p>
                By proceeding, you confirm that you have read and agree to our
                <a href="/terms-condition/"> Terms and Privacy.</a>
              </p>
            </label>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerForm;
