import React from "react";
import './defaultLanding.css';
import {Link} from "react-router-dom";

import Contact from "../Components/contact/Contact";
import Toggle from "../Components/Toggle/Toggle";
import Me from "../Assets/Me.png"
import ResumeLink from "../Components/ResumeLink/ResumeLink";



function DefaultLanding(props) {
    return (
        <div id="default-landing-block" className="planning">
                <div className="default-landing-block">
                    <div>
                    <h1>Anneliese Wen</h1>
                    <h3>Urban Planning and Math student @uWaterloo specializing in Land Development </h3>
                    <h5> seeking Fall 2020 internship opportunities</h5>
                       <div className="links">
                    <Contact/>
                       </div>
                    </div>
                    <img src={Me} className="me"/>

                </div>
        </div>
    )
}

export default DefaultLanding;