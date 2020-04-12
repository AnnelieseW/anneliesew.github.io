import React, {Component, useState} from 'react';

import {
    Route,
    NavLink,
    HashRouter, BrowserRouter as Router
} from "react-router-dom";

import Main from"./Main";
import PomodoroProject from "./Tech/TechProjectPages/PomodoroProject/Pomodoro";
import './App.css';
import Projects from "./Components/Project Page/Projects";
import ThemeContext from "./ThemeContext";

import WebsiteDescription from "./Tech/TechProjectPages/Website/WebsiteDescription";
class App extends Component {

    render() {
        return (

                <div style={{ height: '100%' }}>
                   {/*<Navigation className="nav"/>*/}
                    {/*<Router>*/}
                    <div>
                        <Router>
                            <Route exact path={process.env.PUBLIC_URL + "/"} component = {Main}/>
                             <Route  path={process.env.PUBLIC_URL + "/pomodoro-project"} component = {PomodoroProject}/>
                             <Route  path={process.env.PUBLIC_URL + "/website-personal"} component = {WebsiteDescription}/>
                        </Router>
                    </div>
                    {/*</Router>*/}
                </div>
        )
    }
}

export default App