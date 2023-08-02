import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Statement from "../components/Statement";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Statement />
    </>
  );
};

export default Home;
