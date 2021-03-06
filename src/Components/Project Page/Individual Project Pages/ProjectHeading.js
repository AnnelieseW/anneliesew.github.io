import React from "react";
import './ProjectHeading.css'
import Navigation from "../../Navigation/Navigation";
import ProjectCategorization from "./ProjectCategorization";
import ProjectLinks from "./ProjectLinks";

class ProjectHeading extends React.Component {
    render() {
        return(
            <div id="project-page">
                <h1>{this.props.categories.title}</h1>
                <div id="project-heading">
                    <div style={{display:'flex', flexWrap: 'wrap'}}>
                    <div className="project-about">

                                <ProjectCategorization category={this.props.categories}/>
                        {this.props.categories.hasOwnProperty('links') ?
                                <ProjectLinks links={this.props.categories.links}/>:''}

                    </div>


                <div className="project-description">
                    <p>{this.props.categories.description}</p>
                    <p>
                        <b>learnings: </b>
                        {this.props.categories.learning}
                    </p>
                </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProjectHeading;