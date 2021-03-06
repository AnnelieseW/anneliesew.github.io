import React, {Component} from 'react';
import ProjectComponent from "./ProjectComponent";
import "./Projects.css"
import sizeMe from 'react-sizeme'
import StackGrid from "react-stack-grid"
import { projectList} from "../../Tech/TechProjectPages/ProjectList";

class Projects extends Component {
    render() {
        const {size: {width}} = this.props;
        return (
            <section id="project-component" >
                <div id="projects-toolbar" className="subsection">
                    <h1>projects</h1>
                </div>
                <div className="projects">
                        <StackGrid  monitorImagesLoaded={true} columnWidth={width <= 600 ? '100%' :
                            width < 768 ? 600: 550 } style={{width: width <= 600 ? '100%' :
                                width < 768 ? 600 :'100%'}} className="stackgrid">
                            {projectList.map(project => {
                                return <ProjectComponent project={project}/>
                                })
                            }
                        </StackGrid>
                </div>


            </section>
        )
    }
}

export default sizeMe()(Projects);