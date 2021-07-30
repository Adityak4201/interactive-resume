import React from 'react'
import ProfileImage from "./ProfileImage"
import Experience from "./Experience";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <ProfileImage/>
            <Experience/>
        </div>
    )
}

export default Home
