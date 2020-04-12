import React, {useContext} from "react";
import './Toggle.css'

import ThemeContext from "../../ThemeContext";

class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: !!props.checked
        }
    }

    onToggleChange(e) {
        this.setState({
            checked: e.target.checked
        });
    }

    render() {
        let mode = this.context;
        return (
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (

            <div id="toggle-theme">
                <h6>{theme === 'tech'? "- tech portfolio -" : "- planning site -"}</h6>
                <p>{theme === 'tech' ? 'looking for planning?' : 'looking for my dev work?'}</p>
                <div className= 'toggle-container'>
                <label className="switch round">
                    <input type="checkbox"
                           checked={theme === 'tech' ? false: true}
                           onChange={toggleTheme}
                           />
                    <span title="switch sites" className="slider round"/>
                </label>
                {/*<p>{theme === 'tech' ? '🌇' : '💻'}</p>*/}
                </div>
            </div>
                    )}
            </ThemeContext.Consumer>
        )
    }
}

Toggle.contextType = ThemeContext;
export default Toggle;