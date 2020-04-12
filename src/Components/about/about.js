import React from "react";
import AboutImg from "../../Assets/about-img.png";
import Me from "../../Assets/Me.png";
import aboutCloud from "../../Assets/about-cloud.svg";
import linkedinIcon from "../../Assets/icon-linkedin.svg";
import githubIcon from "../../Assets/icon-github.svg";
import mailIcon from "../../Assets/icon-mail.svg";
import wave from "../../Assets/wave.svg"
import "./About.css"
import "../../App.css"
import Resume from "../../Assets/Resume-Anneliese.pdf";
import Contact from "../contact/Contact";
import ResumeLink from "../contact/ResumeLink/ResumeLink";

function About(props) {
    return (
                    <div id="about" className="sticky">
                        <div className="subsection">
                            <h1>about</h1>
                        </div>
                        <div className="about-container">
                            <div className="grid">
                        <img id="profile-pic" src={Me}/>
                        <Contact/>
                            </div>
                        <div className="text-box">
                            <h2>Hi! 👋 </h2>
                            <h2 id="name-h">I'm Anneliese</h2>
                            <p>
                                I'm currently working on the National AgriClimate Information Service at
                                AgriCulture and AgriFood Canada developing tools for soil moisture data analysis.
                                Previously I was at Alert Labs, an IOT startup, developing internal tools for the sales team.
                                <div className="br"/>
                                I'm a 3rd year student pursuing a double major in Math and Urban Planning,
                                with a computation minor at the University of Waterloo.
                                <div className="br"/>
                                You can find me running around leading <a href={"https://energyhacks.ca"}>EnergyHacks</a>,
                                building communities and opening doors at <a href="https://www.starterhacks.ca">Starterhacks</a>,
                                tinkering with code, or planning my next adventure.
                                <div className="br"/>
                                I'm currently looking for SWE or PM internship opportunities for Fall 2020.
                            </p>
                        </div>
                        </div>
        </div>

    )
}

export default About;