import React from "react";
import Photo from "../images/yo3.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <img className="profile-img" src={Photo} alt="profile"></img>
      <div className="half-p pink-bg">
        <h2 className="p-c">I'm a Front-end Developer</h2>
        <p>I'm always learning</p>
      </div>
    </div>
  );
};

export default Profile;
