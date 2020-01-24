import React, {Component} from 'react';

import {
    Route,
    NavLink,
    HashRouter, BrowserRouter as Router
} from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import PomodoroProject from "./Components/Project Page/PomodoroProject/Pomodoro";
import './App.css';


class App extends Component {

    render() {
        return (
                <div style={{ height: '100%' }}>
                   <Navigation className="nav"/>
                    {/*<Router>*/}
                    <div>

                         <Route exact path="/" component = {Main}/>
                         <Route  path="/pomodoro" component = {PomodoroProject}/>
                    </div>
                    {/*</Router>*/}
                </div>
        )
    }
}

export default App