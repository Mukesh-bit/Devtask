import React from "react";
import HeadingText from "../components/HeadingText";
import Input from "../components/Input";
import Button from "../components/Button";

const CreateAccount = () => {
  return (
    <div className="createAccount-page-container">
      <div className="createAccount-page">
        <div className="createAccount-content">
          <HeadingText
            text="Create your PopX account"
            width="200px"
            marginB="30px"
          />
          <Input lable="Full Name" placeholder="Full Name" />
          <Input lable="Phone number" placeholder="Phone number" />
          <Input lable="Email address" placeholder="Email address" />
          <Input lable="Password" placeholder="Password" />
          <Input lable="Company name" placeholder="Company name" />

          <div className="agency">
            <p>Are you an Agency?</p>
            <div className="agency-radio-container">
              <div className="agency-radio-btn">
                <input type="radio" name="radio" id="" />
                <span>Yes</span>
              </div>

              <div className="agency-radio-btn">
                <input type="radio" name="radio" id="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>

        
          <Button text="Create Account" bgcolor="#6C25FF" textcolor="#FFFFFF" link="/profile"/>
        
      </div>
    </div>
  );
};

export default CreateAccount;
