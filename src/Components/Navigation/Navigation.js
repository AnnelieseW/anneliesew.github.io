import React, {Component} from 'react';

import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";

import Backdrop from "../Backdrop/Backdrop";
import Landing from "../Landing/LandingPage";

class Navigation extends Component {
    state = {
        sideDrawerOpen: false,
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    render() {
        let backdrop
        let sideDrawer

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
            sideDrawer = <SideDrawer />
        }
        return (
            <div style={{ height: '100%' }}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                {sideDrawer}
                {backdrop}
            </div>
        )
    }
}

export default Navigation;