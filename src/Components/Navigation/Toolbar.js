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
                            <a href="/tech/#project-component">work</a>
                        </li>
                        <li>
                            <a href="/tech/#about">about</a>
                        </li>
                        <li>
                            <a href="/tech/#contact">connect</a>
                        </li>
                        </ul>
                    </div>
            </nav>
    </header>
);


export default Toolbar;