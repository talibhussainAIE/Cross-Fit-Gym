import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import About from "./About";
import About2 from "./About2";
import About3 from "./About3";
import Heroabout from "./Heroabout";

// Component import



const AboutPage = () => {
  return (
    <>
      <Navbar/>
      <Heroabout/>
      <About/>
      <About2 />
      
      <About3 />
      <Footer/>
    </>
  );
};

export default AboutPage;
