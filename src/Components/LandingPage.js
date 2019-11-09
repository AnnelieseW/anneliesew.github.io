import React from "react";
import "./LandingPage.css";
import Resume from '../Assets/Resume-Anneliese.pdf';
function Landing(props) {
    return (
        <div id="landing">
            <div id="resume">
            <h1>Anneliese Wen</h1>
                <a id="resume-link" href={Resume}>
                    <div className="button">
                       resume
                    </div>
                </a>
            </div>
            <div className="container">
                <img id="landing-art" src={require("../Assets/landing-art.jpg")}/>
            </div>
        </div>
    )
}

export default Landing;