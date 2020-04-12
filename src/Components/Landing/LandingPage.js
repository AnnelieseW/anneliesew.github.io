import React from "react";
import "./LandingPage.css";
import Resume from '../../Assets/Resume-Anneliese.pdf';
import "../../App.css"
import Contact from "../contact/Contact";
import Welcome from "./FunFont";
import ResumeLink from "../contact/ResumeLink/ResumeLink";


function Landing(props) {
    return (
        <div className="landing">
            <div id="landing-block">
            <Welcome/>
                <div className="landing-p"><p>seeking fall 2020 internship opportunities in software development or product management</p>
                <Contact/>
                </div>
            </div>
        </div>
    )
}

export default Landing;
