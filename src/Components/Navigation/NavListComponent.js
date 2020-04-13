import React from "react";
import {Link} from "react-router-dom";

class NavListComponent extends React.Component {

    render() {
        return(
            <li>
                <Link to={this.props.item.href} onClick={this.props.click}>{this.props.item.text}</Link>
            </li>
        )
    }
}

export default NavListComponent;