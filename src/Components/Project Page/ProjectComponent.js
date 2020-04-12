import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import "./ProjectComponent.css";

class ProjectComponent extends React.Component {
    render() {

        return (
                    <Link to={this.props.project.link} className="project-link">

                            <div className="project-image">
                                <img src={this.props.project.image} alt="Project Image"/>
                            </div>
                            <div className="project-info">
                                <div className="project-title">
                                    <h4>{this.props.project.title}</h4>
                                </div>
                                <div className="project-category">
                                    <h6>{this.props.project.category}</h6>
                                </div>
                                <div className="project-description"><p>{this.props.project.description}</p></div>
                            </div>
                    </Link>
        )
    }
}

export default ProjectComponent;