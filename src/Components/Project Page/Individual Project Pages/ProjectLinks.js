import React from "react";
import IconGithub from "../../../Assets/icon-github.svg";
import IconSite from "../../../Assets/icon-laptop.svg"

class ProjectLinks extends React.Component {
    render() {
            return (
                <span>
                {this.props.links.hasOwnProperty('github') ?
                    <a href={this.props.links.github} target="_blank" className="icon"><img src={IconGithub}/></a> : ''}
                    {this.props.links.hasOwnProperty('site') ?
                        <a href={this.props.links.site} target="_blank" className="icon"><img src={IconSite}/></a> : ''}
            </span>
            )
    }
}

export default ProjectLinks