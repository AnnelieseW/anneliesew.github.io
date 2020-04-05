import React, {Component} from 'react';
import cloud from "../../Assets/project cloud.svg"
import ProjectComponent from "./ProjectComponent";
import PomodoroPhoto from '../../Assets/pomodoro-cover.jpg';
import PomodoroProject from "./PomodoroProject/Pomodoro";
import "./Projects.css"
import sizeMe from 'react-sizeme'
import StackGrid from "react-stack-grid"
import { projectList} from "./ProjectList";

class Projects extends Component {
    render() {
        const {size: {width}} = this.props;
        return (
            <div id="project-component" className="sticky">
                <div id="projects-toolbar">
                    <div>
                        <h2>works.</h2>
                    </div>
                </div>
                <div className="projects">
                    <div className="container">
                        <StackGrid  monitorImagesLoaded={true} columnWidth={width <= 600 ? '100%' :
                            width < 768 ? 600: 450 } style={{width: width <= 600 ? '100%' :
                                width < 768 ? 600: width <= 1024 ? 450: '100%'}}>
                            {projectList.map(project => {
                                return <ProjectComponent project={project}/>
                                })
                            }
                        </StackGrid>
                    </div>
                </div>


            </div>
        )
    }
}

export default sizeMe()(Projects);