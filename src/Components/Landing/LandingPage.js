import React from "react";
import "./LandingPage.css";
import Resume from '../../Assets/Resume-Anneliese.pdf';
import "../../App.css"


function Landing(props) {
    return (
        <div id="landing" className="sticky">
        <div className="landing">
            <div id="landing-block">
            <h2>Anneliese Wen</h2>
                <h6>q: why do you code if you study urban planning?</h6>
                <h5>a: i wanted to make cool and useful things</h5>
                <div >
                <h6>looking for fall 2020 internship opportunities in software development or product management</h6>
                </div>
                <a id="resume-link" href={Resume}>
                    <div>
                       resume
                    </div>
                </a>
            </div>
        </div>
        </div>
    )
}

export default Landing;
