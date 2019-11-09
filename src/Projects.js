import React from 'react';
import ProjectComponent from "./Components/ProjectComponent";
import airplane from './Assets/PaperAirplane.svg';
import PomodoroProject from "./Components/Pomodoro";

function Projects(props) {
    return (
        <div id="projects">
            <h2>projects</h2>
            <ProjectComponent
                link="/pomodoro"
                component={PomodoroProject}
            image ={airplane}
            title="Pomodoro"
            category="React.js| UX/UI"/>
        </div>
    )
}

export default Projects;