import React from "react";
import Navbar from "../Navbar/Navbar";
import Herocont from "./Herocont";
import Footer from "../Footer/Footer";


import Contactt from "../Contact/Contactt/Contactt"; // Adjust path as needed


const Contactpage = () => {
  return (
    <>
      <Navbar />
      <Herocont />
      
      {/* Contact Form Section */}
      <Contactt />

      {/* Contact Section Below */}
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="  gap-6 bg-gray-100 dark:bg-dark py-8 px-6 ">
            <div className="col-span-2 space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-black/80 dark:text-white">
                <span className="text-primary">Work hard now, glow later.</span>{" "}
                Your body reflects the choices you make every day
              </h1>
            </div>
            
     
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contactpage;
