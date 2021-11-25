import React, { useState } from "react";

const AccountDetails = () => {
  const [data, setData] = useState({
    first: "",
    last: "",
    email: "",
    gender: "",
    DOB: "",
    store: "",
    address: "",
    desc: "",
  });
  const [records, setRecords] = useState([]);

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, { ...data, id: Math.random() }]);
    console.log(records);

    setData({
      first: "",
      last: "",
      email: "",
      gender: "",
      DOB: "",
      store: "",
      address: "",
      desc: "",
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center my-4">
          <form className=" col-md-4 col-sm-8 form" onSubmit={handleSubmit}>
            <div className="col-11 mx-3 mt-4 create text-center text-white fw-bold p-1 fs-5">
              Create Seller Account
            </div>
            <div className="d-flex pt-3 px-2">
              <div className="col-6 px-2">
                <label
                  htmlFor="input"
                  className="text-dark fw-bold shadow-none"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="first"
                  id="input"
                  required
                  onChange={Change}
                  value={data.first}
                />
              </div>
              <div className="col-6 px-2">
                <label htmlFor="input" className="text-dark fw-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="last"
                  id="input"
                  required
                  onChange={Change}
                  value={data.last}
                />
              </div>
            </div>
            <div className="d-flex pt-3 px-2">
              <div className="col-6 px-2">
                <label htmlFor="input" className="text-dark fw-bold">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  name="email"
                  id="input"
                  required
                  onChange={Change}
                  value={data.email}
                />
              </div>
              <div className="col-6 px-2">
                <label htmlFor="input" className="text-dark fw-bold">
                  Gender
                </label>

                <select
                  className="form-select form-select-sm"
                  id="input"
                  required
                  name="gender"
                  value={data.gender}
                  onChange={Change}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="tg">TransGender</option>
                </select>
              </div>
            </div>
            <div className="d-flex pt-3 px-2">
              <div className="col-6 px-2">
                <label htmlFor="input" className="text-dark fw-bold">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  name="DOB"
                  id="input"
                  required
                  onChange={Change}
                  value={data.DOB}
                />
              </div>
              <div className="col-6 px-2">
                <label htmlFor="input" className="text-dark fw-bold">
                  Store Type
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="store"
                  id="input"
                  required
                  onChange={Change}
                  value={data.store}
                />
              </div>
            </div>
            <div className="pt-3 px-3 col-12">
              <label htmlFor="input" className="text-dark fw-bold pb-2">
                Shop Address
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                name="address"
                id="input"
                required
                onChange={Change}
                value={data.address}
              />
            </div>
            <div className="pt-3 px-3 col-12">
              <label htmlFor="input" className="text-dark fw-bold pb-2">
                Short Description
              </label>
              <textarea
                id="textarea"
                cols="50"
                name="desc"
                value={data.desc}
                onChange={Change}
                rows="3"
              ></textarea>
            </div>
            <div className="d-flex px-4">
              <button type="button" className="button-ext col-5 p-1 my-4">
                Exit
              </button>
              <span className="col-2"></span>
              <button type="submit" className="button-nxt col-5 p-1 my-4">
                Next
              </button>
            </div>
          </form>
          <div>
            {records.map((Val) => {
              const {
                first,
                last,
                email,
                gender,
                DOB,
                store,
                address,
                desc,
                id,
              } = Val;
              return (
                <>
                  <div
                    key={id}
                    className="d-flex justify-content-even col-12 mt-5 p-2 bg-primary text-white fw-bold"
                  >
                    <p>First Name: {first}</p>
                    <p>Last Name: {last}</p>
                    <p>Email: {email}</p>
                    <p>Gender: {gender}</p>
                    <p>DOB: {DOB}</p>
                    <p>Store Type: {store}</p>
                    <p>Address: {address}</p>
                    <p>Description{desc}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
