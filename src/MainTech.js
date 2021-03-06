import React, {Component} from 'react';
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Tech/Landing/LandingPage";
import Projects from "./Components/Project Page/Projects";
import About from "./Tech/about/about";
import './App.css';


class MainTech extends Component {

    render() {
        return (
            <div>
                <div>
                    <Projects className="content"/>
                    <About className="content"/>
                </div>
            </div>
        )
    }
}

export default MainTech