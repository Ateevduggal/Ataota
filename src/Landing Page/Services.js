import React from "react";
import {data} from "./Data";

const Services = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center fw-bold fs-1 text-black">
            Our Services <hr />
          </div>
          {data.map((Val, id) => {
            const { title, image, text, className } = Val;
            return (
              <>
                <div className="col-md-4 col-sm-4 py-3 g-3">
                  <div className="card text-center border-0" key={id}>
                    <div className="fs-3 p-3 fw-bold">{title}</div>
                    <div className="card-img">
                      <img src={image} alt="" className={`${className}`} />
                    </div>
                    <div className="fs-5 p-3">{text}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
