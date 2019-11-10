import React, {Component} from 'react';
import Navigation from "./Navigation";
import Landing from "./Components/LandingPage";
import Projects from "./Projects";
import About from "./Components/about";
import './App.css';


class Main extends Component {

    render() {
        return (
            <div>
                <Landing/>
                <Projects/>
                <About/>
            </div>
        )
    }
}

export default Main