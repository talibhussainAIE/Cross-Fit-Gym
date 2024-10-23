import React from "react";
import BannerImg from "../../assets/hero2.jpg";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Heroabout = () => {
  return (
    <div
      style={BgStyle}
      className="dark:bg-black dark:text-white duration-300 "
    >
      <div className="bg-white/70  dark:bg-black/80 duration-300 ">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl md:text-7xl font-bold"
            >
              ABOUT US 
            </h1>
            <p data-aos="fade-up" className="leading-8 tracking-wide">
            At <span>CROSSFIT </span>,we're committed to helping you achieve your fitness goals with state-of-the-art equipment and expert trainers. Join a community that inspires, supports, and motivates you every step of the way!
              </p>
            
            {/* <button
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once={"true"}
              className="primary-btn"
            >
              Get Started
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroabout;
