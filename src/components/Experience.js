import React from 'react'
import "./Experience.css";

function Experience() {
    return (
        <div className="experienceContainer">
            <div className="experience">
                Internships
            </div>
            <div className="experienceDetails">
                <span id="intern">May 2021 - July 2021 <br/>
                Associate Data Engineer (Intern) at The Tann Mann Gaadi <br/></span>
                &bull;<span className ="detail">Developed graphs in react using the recharts library for dashboard.</span> <br/>
                &bull;<span className ="detail">Developed authentication and integrated the pages with the rest APIs using AXIOS </span> <br/>
                <span className="temp-details">(APIs were developed in Node JS).</span>
                <br/>&bull;<span className ="detail">Developed few APIs in Nodejs.</span>
                <br/>&bull;<span className ="detail">Led the frontend development of the project.<br/></span>
            </div>
        </div>
    )
}

export default Experience
