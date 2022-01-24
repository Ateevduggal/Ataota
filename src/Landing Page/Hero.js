import React from "react";
import Activa from "../assets/Common/Activa.jpg";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-5 text-center py-5 px-3" id="hero">
            <h3 className="fs-2 pb-4">Ataota</h3>
            <hr />
            <h1 className="text-capitalize fw-bold px-5 pt-4">
              the nearby online store
            </h1>
            <p className="fs-5 py-2 px-5 mx-5">
              Give Wings to your Store with us
            </p>
            <a
              href="https://ataota.in/"
              className="text-center bg-dark text-white mt-1"
            >
              <button className="text-center bg-dark text-white border-0 p-3 px-4 mt-1 fw-bold fs-5">
                Start for free
              </button>
            </a>
          </div>
          <div className="col-7">
            <img src={Activa} alt="activa" className="w-100 mt-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
