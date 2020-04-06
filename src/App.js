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

class App extends Component {

    render() {
        return (
                <div style={{ height: '100%' }}>
                   {/*<Navigation className="nav"/>*/}
                    {/*<Router>*/}
                    <div>
                        <Route exact path="/" component = {Main}/>
                        <Route path="/planning" component={LandingPlanning}/>
                         <Route path="/tech" component = {MainTech}/>
                         <Route  path="/pomodoro" component = {PomodoroProject}/>
                    </div>
                    {/*</Router>*/}
                </div>
        )
    }
}

export default App