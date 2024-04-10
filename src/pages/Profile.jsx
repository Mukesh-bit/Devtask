import React from "react";
import Paragraph from "../components/Paragraph";

const Profile = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-page">
        <div className="profile-page-heading">
          <h4>Account Settings</h4>
        </div>

        <div className="profile">
          <div className="left">
            <img src="public\Ellipse 114.png" alt="" />
            <img src="public\Group 1585.png" alt="" />
          </div>
          <div className="right">
            <h5>Marry Doe</h5>
            <h6>Marry@Gmail.Com</h6>
          </div>
        </div>

        <div className="profile-para">
          <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>

        <div className="profile-border"></div>

        <div className="profile-border-bottom"></div>
      </div>
    </div>
  );
};

export default Profile;
