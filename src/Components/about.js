import React from "react";
import AboutImg from  "../Assets/about-img.png";
import aboutCloud from "../Assets/about-cloud.svg";
import linkedinIcon from "../Assets/icon-linkedin.svg";
import githubIcon from "../Assets/icon-github.svg";
import mailIcon from "../Assets/icon-mail.svg";
import "./About.css"
import Resume from "../Assets/Resume-Anneliese.pdf";

function About(props) {
    return (
        <div className="about-contact">
            <img src={aboutCloud}/>
            <div>
        <div id="about">

        <div className="about">
            <img className="aboutImg" src={AboutImg} />
        <div className="description-about">
            <h2 className="about-heading">about</h2>
            <h3>Hi! I'm Annneliese</h3>
            <p> I am a  Joint Honours Planning with Mathematics, Computing Option student at the
                    University of Waterloo. <br/>
        I'm particularly interested in the future of cities and the impact that computer and data science  can
                    make on city planning.
            <br/>
                In my free time I like to explore built environments, illustrate, learn code, and meet people from all walks of life.
    </p>
            <a id="resume-link" href={Resume}>
                <div className="button about-button">
                    resume
                </div>
            </a>
        </div>
        </div>
        </div>
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

    )
}

export default About;