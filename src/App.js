import React, {Component, useState} from 'react';

import {
    Route,
    NavLink,
    HashRouter, BrowserRouter as Router
} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Main from"./Main";
import MainTech from "./MainTech";
import PomodoroProject from "./Tech/PomodoroProject/Pomodoro";
import './App.css';
import Projects from "./Components/Project Page/Projects";
import ThemeContext from "./ThemeContext";


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
                        </Router>
                    </div>
                    {/*</Router>*/}
                </div>
        )
    }
}

export default App