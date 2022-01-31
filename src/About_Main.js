import React from "react";
import logo from "./assets/LOGO.svg";
import Services from "./Landing Page/Services";
import Footer from "./Landing Page/Footer";

const About_Main = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 text-center fw-bold fs-1 text-black">
            About Us <hr />
          </div>
          <div className="col-5 text-center about_image">
            <img src={logo} alt="logo" className="w-75 mt-4" />
          </div>
          <div className="col-7 mt-5 px-5 py-2 fs-4 text1" id="about-us-text">
            <b>
              Advance Technology Adoption and Organisation of Technical
              Assistant &nbsp;
            </b>
            also known as Ataota is an internet commerce marketplace where
            everyone can use the internet to provide an opportunity to create a
            market at home and serve customers in digital ways.
            <br />
            <br />
            We provide a place for all sellers and service providers to create
            their business online by building new relations with consumers.
          </div>
        </div>
        <Services />
        <div className="row mt-5" id="mission">
          <div className="col-6 text-center text-white pt-4 px-4" id="mission-1">
            <h1 className="text-decoration-underline mission-1">Our Mission</h1>
            <p className="fs-4 p-3 mission-text">
              Upgrading Local Commerce to E-Commerce Business and Building
              Relationship withValuable Consumers.
            </p>
          </div>
          <div className="col-6 text-center text-white pt-5 px-5" id="mission-2">
            <h1 className="text-decoration-underline mission-1">Our Vision</h1>
            <p className="fs-4 p-3 mission-text">
              Organize all the products and services from the nearby market and
              make it accessable for everyone in digital ways.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About_Main;
