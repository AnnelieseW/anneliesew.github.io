import React from "react";
import './toolbar.css'
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import Resume from "../../Assets/Resume-Anneliese.pdf";

const  Toolbar  = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="spacer"/>
            <div><DrawerToggleButton click={props.drawerClickHandler} /></div>
                <div className="toolbar-nav-items">
                    <ul>
                        <li>
                            <a href={Resume}>resume</a>
                        </li>
                            <li>
                                <a href="/#project-component">projects</a>
                            </li>
                        <li>
                            <a href="/#about">about</a>
                        </li>
                        <li>
                            <a href="/#contact">contact</a>
                        </li>
                        </ul>
                    </div>
            </nav>
    </header>
);


export default Toolbar;