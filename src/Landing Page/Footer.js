import React from "react";
import { social } from "./Data";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 text-center fw-bold fs-1 text-black px-5">
            Start A Sustainable Relationship <hr />
          </div>
          <div className="col-5 mt-5 text-center">
            <h3 className="fs-2 fw-bold mb-3">Ataota</h3>
            <p className="fs-4 px-5">
              Panskura Junction, Kanakpur, Panskura, West Bengal, India
            </p>
          </div>
          <div className="col-2"></div>
          <div className="col-4 mt-5 d-flex justify-content-evenly align-items-center">
            {social.map((Val) => {
              return (
                <>
                  <div>
                    <a href={`${Val.link}`} target="_blank">
                      <i className={`${Val.icon}`} id="icons"></i>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
          <div className="w-100 my-3"></div>
          <div className="col-12 text-center">
            <h3 className="fw-bold fs-3">
              We're Exited to Help You on Your Journey!
            </h3>
            <p className="fs-5 mt-3">
              We love our customers, so feel free to visit
              <span style={{ color: " #076961" }}>
                &nbsp; during normal business hours
              </span>
              <br />
              <span className="fs-5 fw-bold">(Mon - Sun : 9am - 5pm)</span>
            </p>
          </div>
          <div className="bg-dark text-light fs-5 text-center py-3 mt-2">
            Copyright © 2022 ATAOTA INDIA PRIVATE LIMITED - All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
