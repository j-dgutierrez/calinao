import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const titleStyle = {
    position: "relative",
    zIndex: 1,
    color: "rgb(251,70,17)",
  };

  const lineStyle = {
    borderTop: "2px solid #000",
    content: '""',
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    bottom: 0,
    width: "50%",
    zIndex: -1,
  };

  const spanStyle = {
    background: "#fff",
    padding: "0 15px",
  };

  return (
    <section className="services-section bg-white py-10" id="services">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="content w-full ">
          <h2
            className="text-3xl text-center font-bold mb-4"
            style={titleStyle}
          >
            <span style={lineStyle}></span>
            <span style={spanStyle}>Our Services</span>
          </h2>
          <p className="text-base text-center text-black w-5/6 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quos, voluptate voluptas dolorum quia
            voluptatibus quod quae quas fugit. Quisquam voluptatum, quibusdam.
          </p>
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mt-5 justify-center">
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
