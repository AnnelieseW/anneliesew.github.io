import React from "react";
import "./LandingPage.css";
import Resume from '../../Assets/Resume-Anneliese.pdf';
import "../../App.css"


function Landing(props) {
    return (
        <div id="landing" className="sticky">
        <div className="landing">
            <div id="landing-block">
            <h1>anneliese wen.</h1>
                <a id="resume-link" href={Resume}>
                    <div className="button">
                       resume
                    </div>
                </a>
            </div>
        </div>
        </div>
    )
}

export default Landing;
