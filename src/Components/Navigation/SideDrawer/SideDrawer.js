import React from 'react';
import './SideDrawer.css';
import Resume from "../../../Assets/Resume-Anneliese.pdf";
import {techNavList} from "../NavigationList";
import NavListComponent from "../NavListComponent";

const SideDrawer= props =>(
        <nav className="side-drawer">
            <ul>
                {props.navlist.map(item => {
                    return <NavListComponent item={item} click={props.click}/>
                })}
            </ul>
        </nav>
);

export default SideDrawer;