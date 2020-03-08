import React from "react";
import './toolbar.css'
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import Resume from "../../Assets/Resume-Anneliese.pdf";

const  Toolbar  = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div id="toggle-button"><DrawerToggleButton click={props.drawerClickHandler} /></div>
                <div className="toolbar-nav-items">
                    <ul>
                        <li>
                            <a href="/#project-component">work</a>
                        </li>
                        <li>
                            <a href="/#about">about</a>
                        </li>
                        <li>
                            <a href="/#contact">connect</a>
                        </li>
                        </ul>
                    </div>
            </nav>
    </header>
);


export default Toolbar;