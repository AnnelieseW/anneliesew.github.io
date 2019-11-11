import React from 'react';
import './SideDrawer.css';
import Resume from "../../../Assets/Resume-Anneliese.pdf";

const SideDrawer= props =>(
        <nav className="side-drawer">
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
        </nav>
);

export default SideDrawer;