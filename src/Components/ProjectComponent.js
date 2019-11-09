import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import "./ProjectComponent.css";

function ProjectComponent(props) {
    return (
        <div className="project-component">
            <Link to={props.link}>
                <div className="project-info">
                    <div className="project-title">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="project-category">
                        <h4>{props.category}</h4>
                    </div>
                    <div className="project-description">{props.description}</div>
                </div>
                <div className="project-image">
                    <img src={props.image} alt="Project Image"/>
                </div>
            </Link>
        </div>
    )
}

export default ProjectComponent;