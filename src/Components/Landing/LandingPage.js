import React from "react";
import "./LandingPage.css";
import Resume from '../../Assets/Resume-Anneliese.pdf';
import landingcloud from '../../Assets/landing_cloud_asset.svg';


function Landing(props) {
    return (
        <div id="landing">
        <img className="landing-cloud" src={landingcloud}/>
        <div className="landing">
            <div id="landing-block">
            <h1>anneliese wen.</h1>
                <a id="resume-link" href={Resume}>
                    <div className="button">
                       resume
                    </div>
                </a>
            </div>
            {/*<div className="container">*/}
            {/*    <img id="landing-art" src={require("../Assets/landing-art.png")}/>*/}
            {/*</div>*/}
        </div>
        </div>
    )
}

export default Landing;
