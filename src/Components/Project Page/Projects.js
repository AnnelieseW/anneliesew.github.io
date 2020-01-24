import React from 'react';
import cloud from "../../Assets/project cloud.svg"
import ProjectComponent from "../ProjectComponent";
import PomodoroPhoto from '../../Assets/pomodoro-cover.jpg';
import PomodoroProject from "./PomodoroProject/Pomodoro";
import "./Projects.css"

function Projects(props) {
    return(
        <div id="project-component">
            <img className="project-cloud" src={cloud}/>
            <div id = "projects-toolbar" >
                <div>
                <h2>works.</h2>
                {/*<ul>*/}
                {/*    <li>dev</li>*/}
                {/*    <li>all</li>*/}
                {/*</ul>*/}
                </div>
            </div>
            <div className="projects">
                <div className="container">
                <ProjectComponent
                    link="/pomodoro"
                    component={PomodoroProject}
                image ={PomodoroPhoto}
                title="Pomodoro"
                category="React.js| UX/UI"/>
                <ProjectComponent
                    link="/pomodoro"
                    component={PomodoroProject}
                    image ={PomodoroPhoto}
                    title="Pomodoro"
                    category="React.js| UX/UI"/>
                <ProjectComponent
                    link="/pomodoro"
                    component={PomodoroProject}
                    image ={PomodoroPhoto}
                    title="Pomodoro"
                    category="React.js| UX/UI"/>
                </div>
            </div>


        </div>
    )
}

export default Projects;