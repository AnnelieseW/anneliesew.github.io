import React from "react";
import {Link} from "react-router-dom";

class NavListComponent extends React.Component {

    render() {
        return(
            <li>
                <a href={this.props.item.href} onClick={this.props.click}>{this.props.item.text}</a>
            </li>
        )
    }
}

export default NavListComponent;