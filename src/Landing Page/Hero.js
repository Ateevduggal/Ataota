import React from "react";
import Activa from "../assets/Common/Activa.jpg";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-5 col-sm-5 text-center py-5 px-3" id="hero">
            <h3 className="fs-2 pb-4">Ataota</h3>
            <hr />
            <h1 className="text-capitalize fw-bold px-5 pt-4" id="h1_hero">
              the nearby online market
            </h1>
            <p className="fs-5 py-2 px-5 mx-5" id="p_hero">
              Give Wings to your Store with us
            </p>
            <a
              href="https://ataota.in/"
              rel="noopener noreferrer"
              className="text-center bg-dark text-white mt-1"
            >
              <button className="text-center bg-dark text-white border-0 p-3 px-4 mt-1 fw-bold fs-5">
                Start for free
              </button>
            </a>
          </div>
          <div className="col-md-7 col-sm-7 img_hero">
            <img src={Activa} alt="activa" className="w-100 mt-5" id="img_hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
