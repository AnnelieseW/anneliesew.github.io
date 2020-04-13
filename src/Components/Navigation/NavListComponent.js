import React from "react";
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll/src";

class NavListComponent extends React.Component {

    render() {
        return(
            <li>
                <AnchorLink to={this.props.item.href} onClick={this.props.click}>{this.props.item.text}</AnchorLink>
            </li>
        )
    }
}

export default NavListComponent;