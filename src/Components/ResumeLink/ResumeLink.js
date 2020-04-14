import React from "react";
import Resume from '../../Assets/AnnelieseW-Resume.pdf'
import PlanningResume from '../../Assets/AnnelieseW-planning.pdf'
import './ResumeLink.css'
import ThemeContext from "../../ThemeContext";

class ResumeLink extends React.Component{
    render(){
        return(
            <ThemeContext.Consumer>
                {({theme}) => (
            <button id='resume-link'>
                <a href={theme === 'tech'? Resume : PlanningResume}  target="_blank">
                    <h5>resume</h5>
                </a>
            </button>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default ResumeLink;