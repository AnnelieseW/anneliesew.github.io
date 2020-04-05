import React, {Component} from 'react';
import ProjectComponent from "./ProjectComponent";
import "./Projects.css"
import sizeMe from 'react-sizeme'
import StackGrid from "react-stack-grid"
import { projectList} from "./ProjectList";

class Projects extends Component {
    render() {
        const {size: {width}} = this.props;
        return (
            <div id="project-component" >
                <div id="projects-toolbar" className="sticky">
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