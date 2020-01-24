import React, {Component} from 'react';
import Navigation from "./Navigation";
import Landing from "./Components/Landing/LandingPage";
import Projects from "./Components/Project Page/Projects";
import About from "./Components/about/about";
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