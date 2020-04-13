import NavListComponent from "../../Navigation/NavListInd/NavListComponent";
import React from "react";
import './ProjectNavigation.css'

class ProjectNavigation extends React.Component{
    render() {
        return(
            <ul id="projectNav">
                {this.props.navlist.map(item => {
                return <NavListComponent linking={this.props.linking} item={item}/>
            })}
            </ul>
        )
    }
}

export default ProjectNavigation