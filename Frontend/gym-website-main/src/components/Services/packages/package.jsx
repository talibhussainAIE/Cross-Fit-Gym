import React from "react";
import { CSSTransition } from 'react-transition-group';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import "./Package.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const packages = [
  {
    title: "Basic Plan",
    price: "Rs 1000/month",
    features: [
      "Access to gym equipment",
      "Free parking",
      "1 Personal Training Session",
    ],
  },
  {
    title: "Standard Plan",
    price: "Rs 1500/month",
    features: [
      "Access to gym equipment",
      "Group Classes",
      "3 Personal Training Sessions",
      "Free Parking",
    ],
  },
  {
    title: "Premium Plan",
    price: "Rs 2000/month",
    features: [
      "Access to gym equipment",
      "Unlimited Group Classes",
      "5 Personal Training Sessions",
      "Sauna Access",
      "Free Parking",
    ],
  },
];

const benefits = [
  {
    title: "Expert Trainers",
    description: "Our trainers are certified professionals who are dedicated to helping you achieve your fitness goals.",
  },
  {
    title: "Modern Equipment",
    description: "We offer state-of-the-art gym equipment to ensure you have the best tools for your workouts.",
  },
  {
    title: "Flexible Schedules",
    description: "Choose from a variety of class schedules and times to fit your busy lifestyle.",
  },
  {
    title: "Exclusive Member Benefits",
    description: "Enjoy additional perks such as discounts on merchandise, guest passes, and more.",
  },
  {
    title: "Community Support",
    description: "Be part of a supportive community that encourages and motivates you to reach your goals.",
  },
];

const Package = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />

      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <div className="fade-in">
          {/* Banner Section */}
          <div className="banner-section">
            <div className="banner-img"></div>
            <div className="banner-content">
              <h1>Welcome to Our Membership Plans</h1>
              <p>Explore the best packages that suit your fitness needs and start your journey with us.</p>
            </div>
          </div>

          {/* Packages Section */}
          <div className="packages-page">
            <h1 className="packages-title">Our Membership Packages</h1>
            <div className="packages-container">
              {packages.map((pkg, index) => (
                <CSSTransition key={index} in={true} timeout={500} classNames="fade">
                  <div className="package-card">
                    <h2 className="package-title">{pkg.title}</h2>
                    <p className="package-price">{pkg.price}</p>
                    <ul className="package-features">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <button className="sign-up-btn">
                      <a href="/">Sign Up</a>
                    </button>
                  </div>
                </CSSTransition>
              ))}
            </div>

            {/* Benefits Section with Slider */}
            <div className="benefits-section">
              <h2 className="benefits-title">Why Choose Our Packages?</h2>
              <Slider {...settings} className="benefits-slider">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </CSSTransition>

      <Footer />
    </>
  );
};

export default Package;
