import React from "react";
import boost from "../assets/Common/Boost.jpg";
const Banner = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="d-flex align-items-center pt-3 pb-1" id="banner">
            <div className=" col-6 text-capitalize text-center px-5 fs-2 mx-5 ml-5">
              <h2 className="mb-4">
                Kick start your
                <span style={{color:" #076961"}}> one more store online</span>, and boost
                yospanr services to reach more customers
              </h2>
              <a
                href="https://ataota.in/"
                className="col-8 text-center bg-dark text-white rounded-pill fs-5 text-decoration-none px-3 py-2 fw-bold"
                target="_blank"
              >
                Join Now
              </a>
            </div>
            <div className="col-1"></div>
            <div className="col-3 mt-3">
              <img src={boost} alt="boost" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
