import React from "react";
import {Facebook, LinkedIn, Instagram, Twitter} from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import profileImage from "../image/New.jpg";
import "./ProfileImage.css";

const useStyles = makeStyles({
  root: {
    padding: '0 10px',
    marginTop:'10px'
  },
});

function ProfileImage() {
  const classes=useStyles();
    return (
        <div className="intro">
            <img className="profileImage"
                src={profileImage}
                alt="User Profile"/>
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
                    <a href="https://www.facebook.com/aditya4201/" rel="noreferrer" className="activeIcon" target="_blank" id="facebook"><Facebook fontSize="large"
                            className={classes.root}/></a>
                    <a href="https://twitter.com/Aditya_K4" rel="noreferrer" className="activeIcon" target="_blank" id="twitter"><Twitter fontSize="large" className={classes.root}/></a>
                    <a href="https://www.instagram.com/adityak4201/" rel="noreferrer" className="activeIcon" target="_blank" id="instagram"><Instagram fontSize="large" className={classes.root}/></a>
                    <a href="https://www.linkedin.com/in/adityak4201/" rel="noreferrer" className="activeIcon" target="_blank" id="linkedin"><LinkedIn fontSize="large" className={classes.root}/></a>
                </div>
            </div>
        </div>
    );
}

export default ProfileImage;
