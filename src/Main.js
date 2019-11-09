import React, {Component} from 'react';
import Navigation from "./Navigation";
import Landing from "./Components/LandingPage";
import Projects from "./Projects";
import './App.css';


class Main extends Component {

    render() {
        return (
            <div>
            <Landing/>
            <Projects/>
            </div>
        )
    }
}

export default Main