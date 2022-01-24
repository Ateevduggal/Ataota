import React from "react";
import CreateAccount from "./CreateAccount";
import AccountDetails from "./AccountDetails";
import LogIn from "./LogIn";
import OTP from "./OTP";

const Form = () => {
  return (
    <>
      <CreateAccount />
      <AccountDetails />
      <LogIn />
      <OTP />
    </>
  );
};

export default Form;
