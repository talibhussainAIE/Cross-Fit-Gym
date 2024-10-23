import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

// Component import
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import About from "./components/About/About";
import About2 from "./components/About/About2";
import About3 from "./components/About/About3";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Servicescopy";
import Testimonial from "./components/Testimonials/Testimonials";

// Import the user table component
import UserTable from "./tableinfo/UserTable";

const Home = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />

      <Hero />
      <About />
      <About2 />
      <About3 />

      {/* Add the table here */}
      <div className="user-table-section">
        <h2>Our Users</h2>
        <UserTable /> {/* <-- Renders the table */}
      </div>

      <Contact />
      <Services />
      <AppStoreBanner />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
