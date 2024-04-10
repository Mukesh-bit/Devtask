import React from "react";
import HeadingText from "../components/HeadingText";
import Paragraph from "../components/Paragraph";
import Input from "../components/Input";
import Button from "../components/Button";

const SigninPage = () => {
  return (
    <div className="signin-page-container">
      <div className="signin-page">
        <HeadingText text="Signin to your PopX account" width="200px" />
        <div className="paragraph-div">
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit," />
        </div>
        <div className="signin-input">
          <label>Email address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>

        <div className="signin-input">
          <label>Password</label>
          <input type="text" placeholder="Enter password" required />
        </div>
        {/* <Input lable="Email Address" placeholder="Enter email address" />
        <Input lable="Password" placeholder="Enter password" /> */}
        <Button text="Login" bgcolor="#CBCBCB" textcolor="#FFFFFF" />
      </div>
    </div>
  );
};

export default SigninPage;
