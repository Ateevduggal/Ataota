import React, { useState } from "react";
import Profile from "../assets/Common/Profile.svg";
import Mobile from "../assets/Common/Mobile_Phone.svg";
import Signup from "../assets/Common/SignUpGreen.svg";
import Login from "../assets/Common/LogIn.svg";
import Back from "../assets/Common/Back.svg";
const CreateAccount = () => {
  const [dataC, setDataC] = useState({ name: "", phone: "" });
  const [recordsC, setRecordsC] = useState([]);

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setDataC({ ...dataC, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecordsC([...recordsC, { ...dataC, id: Math.random() }]);
    console.log(recordsC);

    setDataC({ name: "", phone: "" });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center my-4">
          <form className=" col-md-4 col-sm-8 form" onSubmit={handleSubmit}>
            <div className="col-11 mx-3 mt-4 create text-center text-white fw-bold p-1 fs-5">
              Create Your Account
            </div>
            <div className="col-12 pt-5 px-3">
              <label htmlFor="input" className="text-dark fw-bold shadow-none">
                <img src={Profile} alt="profile" /> &nbsp;&nbsp; Enter Your Full
                Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                name="name"
                id="input"
                value={dataC.name}
                onChange={Change}
                required
              />
            </div>
            <div className="col-12 pt-4 px-3">
              <label htmlFor="input" className="text-dark fw-bold shadow-none">
                <img src={Mobile} alt="mobile" /> &nbsp;&nbsp; Enter Your Mobile
                Number
              </label>
              <input
                type="number"
                className="form-control form-control-sm"
                name="phone"
                pattern="[7-9][0-9]{9}"
                title="There must be 10 numbers only without any special character in between"
                value={dataC.phone}
                onChange={Change}
                id="input"
                required
              />
            </div>
            <div className="col-12 text-center pt-4 px-4">
              <button type="submit" className="button-nxt col-11 p-1 my-4">
                <img src={Signup} alt="sign-up" style={{ width: "8%" }} />{" "}
                &nbsp;&nbsp; SIGN UP
              </button>
            </div>
            <div className="d-flex px-4 buttons">
              <button
                type="button"
                className="button-ext col-5 p-1 my-4 d-flex justify-content-center"
                id="button-ext"
              >
                <img src={Back} alt="back" /> &nbsp; Cancel
              </button>
              <span className="col-2"></span>
              <button
                type="submit"
                className="button-lgi col-5 p-1 my-4 d-flex justify-content-center"
                id="button-lgi"
              >
                <img
                  src={Login}
                  alt="log-in"
                  style={{ width: "20%" }}
                  className="img"
                />{" "}
                &nbsp; Log In
              </button>
            </div>
          </form>
          {recordsC.map((Val) => {
            const { name, phone, id } = Val;
            return (
              <>
                <div
                  key={id}
                  className="d-flex justify-content-center col-12 mt-5 p-2 bg-primary text-white fw-bold"
                >
                  <p>Full Name : {name}</p>
                  <p>Phone Number : {phone}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
