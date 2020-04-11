import React from 'react';
import './FunFont.css'

class Welcome extends React.Component {
    render() {
        return(
            <svg viewBox="0 0 300 50" id="welcome-font">
                <path id="curve" d="M 10,50 Q 145,10 290,50 "/>
                <text x="25" textAnchor="middle" x="145">
                    <textPath xlinkHref="#curve">Anneliese Wen
                    </textPath>
                </text>
            </svg>
        )
    }
}

export default Welcome;