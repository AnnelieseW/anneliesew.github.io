import React from "react";
import './toolbar.css'

import Toggle from "../Toggle/Toggle";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import {techNavList} from "./NavListInd/NavigationList";
import NavListComponent from "./NavListInd/NavListComponent";

class Toolbar extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            view: true
        }
    }

    changeView(){
        this.setState({
            view: !this.state.view
        })
        console.log(this.state.view)
        this.props.view()
    }

    render() {
        return (
            <div className="toolbar">
                <nav className="toolbar-nav">
                    <div id="toolbar-top">
                        <div id="toggle-button">
                            <DrawerToggleButton click={this.props.drawerClickHandler}/>
                        </div>
                    </div>
                    <div className="toolbar-nav-items">
                        <ul>
                            {this.props.navlist.map(item => {
                                return <NavListComponent linking={this.props.linking} item={item}/>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Toolbar;