import React from 'react';

import Toggle from "../Toggle/Toggle";

import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";

import Backdrop from "./SideDrawer/Backdrop/Backdrop";
import {techNavList, planNavList} from "./NavigationList";
import ThemeContext from "../../ThemeContext";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            view: true
        }
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    };

    render() {
        let backdrop;
        let sideDrawer;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
            sideDrawer = <SideDrawer navlist={this.props.list} />
        }
        return (
            <div style={{ height: '100%' }}>
                <Toolbar navlist={this.props.list} drawerClickHandler={this.drawerToggleClickHandler} />
                {sideDrawer}
                {backdrop}
            </div>
        )
    }
}

export default Navigation;