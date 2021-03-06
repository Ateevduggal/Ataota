import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Banner from "./Banner";
import Footer from "./Footer";
const LandingPage = () => {
  return (
    <>
      <div className="body">
        <Hero />
        <About />
        <Services />
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
