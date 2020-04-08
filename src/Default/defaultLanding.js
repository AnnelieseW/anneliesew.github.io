import React from "react";
import './defaultLanding.css';
import {Link} from "react-router-dom";

import Contact from "../Components/contact/Contact";
import Me from "../Assets/Me.png"


function DefaultLanding(props) {
    return (
        <div id="default-landing-block">
                <div className="default-landing-block">
                    <div>
                    <h1>Hi!  👋</h1>
                    <h1>I’m Anneliese Wen</h1>
                    <h3>I'm a 3rd year student @uWaterloo studying urban planning, math, and computing </h3>
                    <div>
                    <Link to="/planning">
                        <h6> click here to hear more about planning 🌇</h6>
                    </Link>
                    </div>
                    <div>
                    <Link to="/tech/">
                        <h6> click here to hear more about computing 💻</h6>
                    </Link>
                    </div>
                    <h5> Currently looking for internship opportunities for Fall 2020 </h5>
                    <Contact/>
                    </div>
                    <img src={Me} className="me"/>
                </div>
        </div>
    )
}

export default DefaultLanding;