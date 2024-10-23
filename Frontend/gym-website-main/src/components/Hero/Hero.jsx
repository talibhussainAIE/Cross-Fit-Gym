import React, { useState } from "react";
import BannerForm from "./BannerForm"; // Import BannerForm
import backgroundVideo from "@/assets/backgroundVideo2.mp4"; // Use alias '@'

// Inline styles for background video container
const videoContainerStyle = {
  position: "relative", // Make the video background relative to the container
  width: "100%",
  overflow: "hidden",
  marginTop: 87
};

const videoStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  objectFit: "cover", // Cover the entire container
  zIndex: 0, // Ensure video stays behind content
};

const PopupForm = ({ closePopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white p-10 rounded-xl shadow-lg max-w-lg w-full relative animate-slide-in"
        style={{ transform: "translateY(-20px)", transition: "all 0.5s ease" }}
      >
        <h2 className="text-3xl font-bold text-[#fd9a00] mb-6 animate-fade-in">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-8 animate-fade-in">
          Please fill this form and our team will contact you shortly.
        </p>
        <form className="space-y-5 animate-fade-in">
          <input
            type="text"
            className="block w-full p-4 border-2 border-[#fd9a00] rounded-md bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fd9a00] focus:border-transparent transition-transform duration-300 hover:scale-105"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="block w-full p-4 border-2 border-[#fd9a00] rounded-md bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fd9a00] focus:border-transparent transition-transform duration-300 hover:scale-105"
            placeholder="Your Email"
          />
          <textarea
            className="block w-full p-4 border-2 border-[#fd9a00] rounded-md bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fd9a00] focus:border-transparent transition-transform duration-300 hover:scale-105"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-[#fd9a00] text-white font-bold rounded-md shadow-md transition-transform duration-300 hover:scale-105"
          >
            Submit
          </button>
        </form>
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-black text-xl font-bold"
          onClick={closePopup}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleGetStartedClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="col-md-2 col-sm-2 col-lg-2 col-12 offset-lg-1 aos-init aos-animate">
      {/* Video background */}
      <div style={videoContainerStyle}>
        <video style={videoStyle} autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content goes here */}
        <div className="loogo">
          <div className="dark:bg-black dark:text-white duration-300">
            <div className="bg-white/70 dark:bg-black/80 duration-300">
              <div className="container min-h-[620px] flex items-center justify-between">
                <div className="text-left space-y-5 w-1/2">
                  <p data-aos="fade-up" className="text-primary text-2xl">
                    Transform Your Body, Elevate Your Mind.
                  </p>
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="text-5xl md:text-7xl font-bold"
                  >
                    WELCOME TO <span>CROSSFIT</span>!
                  </h1>
                  <p data-aos="fade-up" data-aos-delay="500">
                    “The body achieves what the mind believes.”
                  </p>
                  <button
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-once="true"
                    className="primary-btn"
                    onClick={handleGetStartedClick} // Trigger popup on click
                  >
                    <a href="#">get started</a>
                  </button>
                </div>
                <div className="w-1/2">
                  <BannerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show Popup Form */}
      {isPopupVisible && <PopupForm closePopup={closePopup} />}
    </div>
  );
};

export default Hero;
