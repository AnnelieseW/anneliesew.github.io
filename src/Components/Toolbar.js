import React from "react";
import './toolbar.css'
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

const  Toolbar  = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="spacer"/>
            <div><DrawerToggleButton click={props.drawerClickHandler} /></div>
                <div className="toolbar-nav-items">
                    <ul>
                            <li>
                                <a href="/#projects">projects</a>
                            </li>
                        </ul>
                    </div>
            </nav>
    </header>
);


export default Toolbar;