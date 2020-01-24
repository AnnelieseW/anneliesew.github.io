import React, {Component} from 'react';
import cloud from "../../Assets/project cloud.svg"
import ProjectComponent from "../ProjectComponent";
import PomodoroPhoto from '../../Assets/pomodoro-cover.jpg';
import PomodoroProject from "./PomodoroProject/Pomodoro";
import "./Projects.css"
import sizeMe from 'react-sizeme'
import StackGrid from "react-stack-grid"

class Projects extends Component {
    render() {
        const {size: {width}} = this.props;
        return (
            <div id="project-component">
                <img className="project-cloud" src={cloud}/>
                <div id="projects-toolbar">
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
                        <StackGrid  monitorImagesLoaded={true} columnWidth={width <= 600 ? '100%' :
                            width < 768 ? 600: 450 } style={{width: width <= 600 ? '100%' :
                                width < 768 ? 600: width <= 1024 ? 450: '100%'}}>
                            <ProjectComponent
                                link="/pomodoro"
                                component={PomodoroProject}
                                image={PomodoroPhoto}
                                title="Pomodoro"
                                category="React.js| UX/UI"/>
                            <div className= "project-spacer"> </div>
                            <ProjectComponent
                                link="/pomodoro"
                                component={PomodoroProject}
                                image={PomodoroPhoto}
                                title="Pomodoro"
                                category="React.js| UX/UI"/>
                            <ProjectComponent
                                link="/pomodoro"
                                component={PomodoroProject}
                                image={PomodoroPhoto}
                                title="Pomodoro"
                                category="React.js| UX/UI"/>
                        </StackGrid>
                    </div>
                </div>


            </div>
        )
    }
}

export default sizeMe()(Projects);