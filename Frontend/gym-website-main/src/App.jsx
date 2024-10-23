import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Component imports
import Home from "./home";
import AboutPage from "./components/About";
import Contactpage from "./components/Contact";
import ServicePage from "./components/Services";
import Thank from "./components/Thankyou/Thank";
import Package from "./components/Services/packages/package";
import Servicescopy from "./components/Services/Servicescopy";
import UserTable from "./tableinfo/UserTable"; // <-- Import the new table component
// 

const App = () => {
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
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<Thank />} />
          <Route path="/package" element={<Package />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/services-copy" element={<Servicescopy />} />
          <Route path="/user-table" element={<UserTable/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
