import React from 'react';
import './SideDrawer.css';

const SideDrawer= props =>(
        <nav className="side-drawer">
            <ul>
                <li><a href="/#project-component">projects</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
);

export default SideDrawer;