import React, {Component, useState} from 'react';

import {
    Route,
    NavLink,
    HashRouter, BrowserRouter as Router, Switch
} from "react-router-dom";


import Main from"./Main";
import PomodoroProject from "./Tech/TechProjectPages/PomodoroProject/Pomodoro";
import './App.css';

import WebsiteDescription from "./Tech/TechProjectPages/Website/WebsiteDescription";
class App extends Component {
    render() {
        return (

                <div style={{ height: '100%' }}>
                   {/*<Navigation className="nav"/>*/}
                    {/*<Router>*/}
                    <div>
                        <HashRouter>
                            <Route exact path={"/"} component = {Main}/>
                             <Route  path={"/pomodoro-project"} component = {PomodoroProject}/>
                             <Route  path={"/website-personal"} component = {WebsiteDescription}/>
                        </HashRouter>
                    </div>
                    {/*</Router>*/}
                </div>
        )
    }
}

export default App