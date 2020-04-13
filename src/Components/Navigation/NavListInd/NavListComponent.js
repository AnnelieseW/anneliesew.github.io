import React from "react";
import {Link} from "react-router-dom";
import AnchorLink from "./AnchorLink";

class NavListComponent extends React.Component {

    render() {
        if (this.props.linking) {
            return (
                <li>
                    <Link to={this.props.item.href}
                          onClick={this.props.click}>{this.props.item.text}</Link>
                </li>

            )
        } else {
            return(
                <li>
                    <AnchorLink href={this.props.item.href}
                                onClick={this.props.click}>{this.props.item.text}</AnchorLink>
                </li>
            )
        }
    }
}

export default NavListComponent;