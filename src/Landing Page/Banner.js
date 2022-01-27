import React from "react";
import boost from "../assets/Common/Boost.jpg";
const Banner = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5" id="banner-main">
          <div className="d-flex align-items-center pt-3 pb-1" id="banner">
            <div className=" col-6 text-capitalize text-center px-5 fs-2 mx-5 m-sm-0 ml-5">
              <h2 className="mb-4">
                Kick start your
                <span style={{ color: " #076961" }}>
                  {" "}
                  one more store online
                </span>
                , and boost yospanr services to reach more customers
              </h2>
              <a
                href="https://ataota.in/"
                rel="noopener noreferrer"
                className="col-8 text-center bg-dark text-white rounded-pill fs-5 text-decoration-none px-3 py-2 fw-bold"
                target="_blank"
              >
                Join Now
              </a>
            </div>
            <div className="col-1"></div>
            <div className="col-md-3 col-sm-5 mt-3">
              <img src={boost} alt="boost" className="w-100" />
            </div>
          </div>
        </div>
        <div className="row mt-5" id="banner-res">
          <div className=" col-12 text-capitalize text-center py-5">
            <h2 className="mb-4 fw-bold">
              Kick start your
              <span style={{ color: " #076961" }} className="span_banner">
                {" "}
                one more store online
              </span>
              , and boost your services to reach more customers
            </h2>
            <a
              href="https://ataota.in/"
              rel="noopener noreferrer"
              className="col-8 text-center bg-dark text-white rounded-pill fs-5 text-decoration-none px-3 py-2 fw-bold"
              target="_blank"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
