import React from "react";
import heroBackground from "../assets/hero-background.png";
import logo from "../assets/logo-no-bg-2.png";

const Hero = () => {
  return (
    <section
      className="hero-section h-screen relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container h-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-full">
          <div className="content w-full">
            <img
              src={logo}
              alt="logo"
              className="mx-auto xl:w-1/2 lg:w-3/4 md:w-3/4 sm:w-3/4 w-3/4"
            />
            <p className="text-xl text-center text-white">
              "Ready to cater all your needs"
            </p>

            <div className="flex justify-center">
              <button className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-full mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
