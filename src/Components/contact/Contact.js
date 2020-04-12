import React from "react";
import './Contact.css'
import linkedinIcon from "../../Assets/icon-linkedin.svg";
import githubIcon from "../../Assets/icon-github.svg";
import mailIcon from "../../Assets/icon-mail.svg";
import ThemeContext from "../../ThemeContext";
import ResumeLink from "../ResumeLink/ResumeLink";

class Contact extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme}) => (
                    <div className="contact">
                        <ResumeLink/>
                        <div className="contact-links">
                            <a className="icon" href="https://www.linkedin.com/in/anneliesew/"><img src={linkedinIcon}/></a>
                            {theme === 'tech'? <a className="icon" href="https://github.com/AnnelieseW"><img src={githubIcon}/></a> : ' '}
                            <a className="icon last-contact" href="mailto: fywen@uwaterloo.ca"><img src={mailIcon}/></a>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default Contact