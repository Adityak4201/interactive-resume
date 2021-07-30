import React from "react";
import { Facebook, LinkedIn, Instagram, Twitter } from "@material-ui/icons";
import profileImage from "../image/New.jpg";
import "./ProfileImage.css";

function ProfileImage() {
  return (
    <div className="intro">
      <img className="profileImage" src={profileImage} alt="User Profile" />
      <div className="name-intro">
        <h1>ADITYA KHANDELWAL</h1>
        <h2>Final Year Student at NIT Jalandhar</h2>
        <p className="aboutMe">
          Graduating in 2022. Currently, leading a team of react engineers in
          the Tann Mann Foundation Project and leading two projects together.
          One project is for a social cause and another one is the commercial
          one. Still learning many things, but most importantly in my time at
          The Tann Mann Foundation, gained a lot of experience in all the
          fields, plus in react too.
        </p>
        <div className="icons">
            <Facebook fontSize="large" className="paddding-icons" />
            <Twitter fontSize="large" className="paddding-icons"/>
            <Instagram fontSize="large" className="paddding-icons"/>
            <LinkedIn fontSize="large" className="paddding-icons"/>
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
