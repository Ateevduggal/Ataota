import React from "react";
import Signup from "../assets/Common/SignUpGreen.svg";
import Back from "../assets/Common/Back.svg";

const OTP = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center my-4">
          <form className=" col-md-4 col-sm-8 form">
            <div className="col-11 mx-3 mt-4 create text-center text-white fw-bold p-1 fs-5">
              Validate Your Account
            </div>
            <div className="col-12 pt-4 px-3">
              <label htmlFor="input" className="text-dark fw-bold shadow-none">
                Enter Your OTP
              </label>
              <input
                type="number"
                className="form-control form-control-sm"
                name="otp"
                autoComplete="off"
                // value={dataL.phone}
                // onChange={Change}
                id="input"
                required
              />
            </div>
            <div className="col-12 text-center pt-5 px-4">
              <button type="submit" className="button_nxt col-11 p-1">
                <img src={Signup} alt="sign-up" style={{ width: "8%" }} />{" "}
                &nbsp;&nbsp; SUBMIT
              </button>
            </div>
            <div className="col-12 text-center pt-2 px-4">
              <button type="button" className="button_ext col-11 p-1 my-4">
                <img src={Back} alt="back" /> &nbsp;&nbsp; CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OTP;
