import React from "react";
import AboutImg from "../../Assets/about-img.png";
import Me from "../../Assets/Me.png";
import aboutCloud from "../../Assets/about-cloud.svg";
import linkedinIcon from "../../Assets/icon-linkedin.svg";
import githubIcon from "../../Assets/icon-github.svg";
import mailIcon from "../../Assets/icon-mail.svg";
import wave from "../../Assets/wave.svg"
import "./About.css"
import Resume from "../../Assets/Resume-Anneliese.pdf";

function About(props) {
    return (
                    <div id="about" className="sticky">
                        <div className="subsection">
                            <h2>about</h2>
                        </div>
                        <div className="about-container">
                        <img id="profile-pic" src={Me}/>
                        <div className="text-box">
                        <h2>hi! 👋 </h2>
                        <h2 id="name-h">I'm Anneliese</h2>
                        <p>
                            I'm a student in the School of Planning at the University of Waterloo. I am currently pursuing Honours Planning, specializing in land development, and a Joint Honours in Mathematics with a Computing Minor.
                        </p>
                        <p>
                            I hope to combine both these interests and work at the intersection of Planning, Technology, and Transportation. I believe in the use of technology as a meaningful tool to inform planning decisions and am excited to see the integration of ubiquitous computing in our built environment.
                           </p>
                        <p>
                            I'm an advocate for inclusive and accessible technology. You can find me running around organizing hackathons with StarterHacks (Canada’s largest beginner hackathon!) and EnergyHacks (bringing technology and policy together!), tinkering with code, or planning my next adventure.
                        </p>
                        <p>
                            I'm currently seeking Fall 2020 internship opportunities in software development, product management and planning.
                        </p>
                        </div>
                        </div>
        </div>

    )
}

export default About;