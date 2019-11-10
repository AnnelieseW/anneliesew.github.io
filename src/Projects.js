import React from 'react';
import ProjectComponent from "./Components/ProjectComponent";
import PomodoroPhoto from './Assets/pomodoro-cover.jpg';
import PomodoroProject from "./Components/Pomodoro";
import "./Projects.css"

function Projects(props) {
    return(
        <div id="project-component">
            <h2>projects</h2>
            <div className="projects">
        <div className="spacer"></div>
                <ProjectComponent
                    link="/pomodoro"
                    component={PomodoroProject}
                image ={PomodoroPhoto}
                title="Pomodoro"
                category="React.js| UX/UI"/>
                    </div>
                    <div className="spacer"></div>
        </div>
    )
}

export default Projects;