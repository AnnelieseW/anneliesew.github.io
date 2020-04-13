import React from "react";
import './ProjectHeading.css'
import Navigation from "../../Navigation/Navigation";
import ProjectCategorization from "./ProjectCategorization";

class ProjectHeading extends React.Component {
    render() {
        return(
            <div className="centering">
            <div id="project-page">
                <h1>Personal Website</h1>
                <div id="project-heading">
                    <div className="project-about">

                                <ProjectCategorization category={this.props.categories}/>
                    </div>

                <div className="project-description">
                    {this.props.description.description}
                </div>
                    <p>
                        <b>learnings - </b>
                        {this.props.categories.learning}
                    </p>
                </div>
            </div>
            </div>
        )
    }
}

export default ProjectHeading;