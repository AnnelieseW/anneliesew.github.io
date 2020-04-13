import React from "react";
import Resume from '../../Assets/Resume-Anneliese.pdf'
import './ResumeLink.css'

class ResumeLink extends React.Component{
    render(){
        return(
            <button id='resume-link'>
                <a href={Resume}  target="_blank">
                    <h5>resume</h5>
                </a>
            </button>
        )
    }
}

export default ResumeLink;