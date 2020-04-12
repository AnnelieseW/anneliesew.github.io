import React from "react";

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