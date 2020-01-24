import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import "./ProjectComponent.css";

function ProjectComponent(props) {
    return (
        <div className="project-component">
            <div className="project-wrapper">
            <Link to={props.link} className = "project-link">
                <div className="project-wrapper">

                <div className="project-image">
                    <img src={props.image} alt="Project Image"/>
                </div>
                <div className="project-info">
                    <div className="project-title">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="project-category">
                        <h4>{props.category}</h4>
                    </div>
                    <div className="project-description">{props.description}</div>
                </div>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default ProjectComponent;