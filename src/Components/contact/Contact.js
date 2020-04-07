import React from "react";
import './Contact.css'
import linkedinIcon from "../../Assets/icon-linkedin.svg";
import githubIcon from "../../Assets/icon-github.svg";
import mailIcon from "../../Assets/icon-mail.svg";

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="contact-links">
                    <a className="icon" href="https://www.linkedin.com/in/anneliesew/"><img src={linkedinIcon}/></a>
                    <a className="icon" href="https://github.com/AnnelieseW"><img src={githubIcon}/></a>
                    <a className="icon last-contact" href="https://www.linkedin.com/in/anneliesewen/"><img src={mailIcon}/></a>
                </div>
            </div>
        )
    }
}

export default Contact