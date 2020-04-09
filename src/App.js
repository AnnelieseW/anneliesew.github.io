import React, {Component} from 'react';

import {
    Route,
    NavLink,
    HashRouter, BrowserRouter as Router
} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Main from"./Main";
import MainTech from "./MainTech";
import PomodoroProject from "./Components/Project Page/PomodoroProject/Pomodoro";
import './App.css';
import LandingPlanning from "./Planning/PlanningHome";
import Projects from "./Components/Project Page/Projects";

class App extends Component {

    render() {
        return (
                <div style={{ height: '100%' }}>
                   {/*<Navigation className="nav"/>*/}
                    {/*<Router>*/}
                    <div>
                        <HashRouter>
                            <Route exact path={process.env.PUBLIC_URL + "/"} component = {Main}/>
                            <Route path={process.env.PUBLIC_URL + "/planning"} component={LandingPlanning}/>
                             <Route path={process.env.PUBLIC_URL + "/tech/"} component = {MainTech}/>
                             <Route  path={process.env.PUBLIC_URL + "/pomodoro-project"} component = {PomodoroProject}/>
                        </HashRouter>
                    </div>
                    {/*</Router>*/}
                </div>
        )
    }
}

export default App