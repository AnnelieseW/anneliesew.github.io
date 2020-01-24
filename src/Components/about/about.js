import React from "react";
import AboutImg from "../../Assets/about-img.png";
import aboutCloud from "../../Assets/about-cloud.svg";
import linkedinIcon from "../../Assets/icon-linkedin.svg";
import githubIcon from "../../Assets/icon-github.svg";
import mailIcon from "../../Assets/icon-mail.svg";
import "./About.css"
import Resume from "../../Assets/Resume-Anneliese.pdf";

function About(props) {
    return (
        <div className="about-contact">
            <img className="about-cloud" src={aboutCloud}/>
            <div className="container">
                <div className="content">
                <div id="about">
                    <h2>about</h2>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                <div>
                    <div id="contact">
                        <h2 className="about-heading contact-h">contact</h2>
                        <div className="contact-links">
                            <a  className="icon" href="https://www.linkedin.com/in/anneliesew/"><img src={linkedinIcon}/>linkedin.com/in/anneliesew</a>
                            <a className="icon" href="https://github.com/AnnelieseW"><img src={githubIcon}/> github.com/AnnelieseW</a>
                            <a className="icon" href="https://www.linkedin.com/in/anneliesewen/"><img src={mailIcon}/>anniefangyiwen@gmail.com</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default About;