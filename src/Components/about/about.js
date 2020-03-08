import React from "react";
import AboutImg from "../../Assets/about-img.png";
import Me from "../../Assets/Me.png";
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
            <div className="about-container">
                <div className="content">
                    <div id="about">
                        <h2>Hi! 👋 </h2>
                        <h2 id="name-h">I'm Anneliese</h2>
                        <p>
                            I'm a student in the School of Planning at the University of Waterloo. I am currently pursuing Honours Planning, specializing in land development, and a Joint Honours in Mathematics with a Computing Minor.
                        </p>
                        <p>
                            I hope to combine both these interests and work at the intersection of Planning, Technology, and Transportation. I believe in the use of technology as meaningful tools to inform planning decisions and am excited to see the integration of ubiquitous computing in our built environment.
                           </p>
                        <p>
                            I'm an advocate for inclusive and accessible technology. You can find me running around organizing hackathons with StarterHacks (Canada’s largest beginner hackathon!) and EnergyHacks (bringing technology and policy together!), tinkering with code, or planning my next adventure.
                        </p>
                        <p>
                            I'm currently seeking Fall 2020 internship opportunities in software development, product management and planning.
                        </p>
                    </div>

                        <div id="contact">
                            <img id="profile-pic" src={Me}/>
                            <div className="contact">
                            <h2 className="about-heading contact-h">let's chat</h2>
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