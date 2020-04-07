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
                                    <h3>{this.props.project.title}</h3>
                                </div>
                                <div className="project-category">
                                    <h4>{this.props.project.category}</h4>
                                </div>
                                <div className="project-description">{this.props.project.description}</div>
                            </div>
                    </Link>
        )
    }
}

export default ProjectComponent;