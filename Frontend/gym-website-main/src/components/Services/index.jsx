import React from "react";
import { FaDumbbell, FaRunning, FaUser } from "react-icons/fa"; // Gym-related icons
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Heroservices from "./Heroservices";
import BannerImg from "../../assets/image1.jpg"; 
import BannerImg2 from "../../assets/image2.jpg";
import BannerImg3 from "../../assets/image3.jpg";

const packages = [
  {
    name: "Gold Package",
    price: "RS 1000",
    icon: <FaUser className="text-5xl text-primary" />,
    description: "Access to all group classes, use of all fitness equipment, one personal training session per month, and exclusive member events.",
  },
  {
    name: "Flexible Package",
    price: "Rs 1500",
    icon: <FaDumbbell className="text-5xl text-primary" />,
    description: "Unlimited access to gym facilities, two personal training sessions per month, nutritional consultation once a month, and discounts on workshops.",
  },
  {
    name: "Platinum Package",
    price: "Rs 2000",
    icon: <FaRunning className="text-5xl text-primary" />,
    description: "All-inclusive access to gym, classes, and specialty areas, weekly personal training sessions, tailored fitness and nutrition plan, and priority booking for events.",
  },
];

const Index = () => {
  return (
    <>
      <Navbar />
      <Heroservices />
      <div className="dark:bg-black dark:text-white py-14 bg-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            <div data-aos="fade-up">
              <img
                src={BannerImg}
                alt="About Us"
                className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px rgba(0,0,0,0.50)] mx-auto transition-transform transform hover:scale-105 duration-300"
              />
            </div>
            <div>
              <div className="space-y-5 sm:p-16 pb-6">
                <div data-aos="zoom-in" className="flex items-center gap-4">
                  <div className="text-primary/70 text-7xl" />
                  <div>
                    <p className="text-primary">Our Services</p>
                    <h1 className="text-2xl sm:text-4xl font-bold">What We Offer</h1>
                  </div>
                </div>
                <p data-aos="fade-up" className="leading-8 tracking-wide">
                  We offer a wide range of services designed to help you achieve your fitness goals. From group classes to personal training, we provide everything you need to succeed.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                  Whether you're just starting out or are a seasoned athlete, our programs are tailored to meet your unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-14 dark:bg-dark bg-white duration-300">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            <div>
              <div className="space-y-5 sm:p-16 pb-6">
                <div data-aos="zoom-in" className="flex items-center gap-4">
                  <div className="text-primary/70 text-7xl" />
                  <div>
                    <p className="text-primary">Our Approach</p>
                    <h1 className="text-2xl sm:text-4xl font-bold">How We Work</h1>
                  </div>
                </div>
                <p data-aos="fade-up" className="leading-8 tracking-wide">
                  Our approach combines functional movements with high-intensity workouts to ensure maximum effectiveness. We focus on building strength, endurance, and flexibility in a supportive environment.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                  Our trainers are dedicated to helping you push your limits and achieve your best results.
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <img
                src={BannerImg2}
                alt=""
                className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px rgba(0,0,0,0.50)] mx-auto transition-transform transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-14 dark:bg-black bg-slate-100 duration-300">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            <div data-aos="fade-up">
              <img
                src={BannerImg3}
                alt=""
                className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px rgba(0,0,0,0.50)] mx-auto transition-transform transform hover:scale-105 duration-300"
              />
            </div>
            <div>
              <div className="space-y-5 sm:p-16 pb-6">
                <div data-aos="zoom-in" className="flex items-center gap-4">
                  <div className="text-primary/70 text-7xl" />
                  <div>
                    <p className="text-primary">Our Community</p>
                    <h1 className="text-2xl sm:text-4xl font-bold">Join Us</h1>
                  </div>
                </div>
                <p data-aos="fade-up" className="leading-8 tracking-wide">
                  At our gym, you’re not just a member; you’re part of a vibrant community. We support each other through every workout, celebrating achievements big and small.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                  Together, we can achieve greatness, and no one is left behind on this fitness journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-black dark:text-white py-14 bg-slate-100">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Our Packages</h1>
            <p>Choose the package that best suits your fitness journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <div className="flex justify-center mb-4">{pkg.icon}</div>
                <h2 className="text-xl font-bold text-center mb-2">{pkg.name}</h2>
                <p className="text-center mb-4">{pkg.description}</p>
                <p className="text-center text-lg font-bold">{pkg.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
