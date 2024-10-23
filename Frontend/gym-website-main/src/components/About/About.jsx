import React from "react";
import BannerImg from "../../assets/banner.png";

const About = () => {
  return (
    <div className="dark:bg-black dark:text-white duration-300py-14 dark:bg-black bg-slate-100 duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary">Why CrossFit?</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">About us</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              We are not just a gym; we are a fitness family. At CrossFit, we celebrate every milestone and encourage each other to keep pushing. Our programs focus on functional movements that translate into everyday strength, stamina, and flexibility. 
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
              No matter where you are in your fitness journey, CrossFit is here to support you every step of the way.
              </p>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
