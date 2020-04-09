import React from "react";
import './toolbar.css'
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import Resume from "../../Assets/Resume-Anneliese.pdf";
import {NavHashLink} from 'react-router-hash-link'

const  Toolbar  = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div id="toggle-button"><DrawerToggleButton click={props.drawerClickHandler} /></div>
                <div className="toolbar-nav-items">
                    <ul>
                        <li>
                            <NavHashLink to="/tech#project-component">work</NavHashLink>
                        </li>
                        <li>
                            <NavHashLink to="/tech#about">about</NavHashLink>
                        </li>
                        </ul>
                    </div>
            </nav>
    </header>
);


export default Toolbar;