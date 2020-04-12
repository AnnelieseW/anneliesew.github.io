import React, {Component} from 'react';
import DefaultLanding from "./Planning/defaultLanding";
import Toggle from "./Components/Toggle/Toggle";
import MainTech from "./MainTech";
import Navigation from "./Components/Navigation/Navigation";
import ThemeContext from "./ThemeContext";
import Landing from "./Tech/Landing/LandingPage";
import MainPlanning from "./Planning/MainPlanning";


class Main extends Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === 'tech' ? 'planning' : 'tech',
            }));
            console.log(this.state)
        };

        this.state = {
            theme: 'tech',
            toggleTheme: this.toggleTheme,
        };
    }
    render() {
        let landing;
        let content;
        if (this.state.theme === 'tech') {
            content = <MainTech/>;
            landing= <Landing/>;
        } else {
            content = <MainPlanning/>;
            landing = <DefaultLanding/>;
        }

            return (
                <div id="main">
                    <ThemeContext.Provider value={this.state}>
                    {/*<Navigation changeTheme ={this.toggleTheme}/>*/}
                    <div id="landing" className={this.state.theme ==='tech'? 'landing-tech sticky': ''}>
                        {landing}
                        <Toggle/>
                    </div>
                    {content}
                    </ThemeContext.Provider>
                </div>
            )
        }
}

Main.contextType = ThemeContext;
export default Main