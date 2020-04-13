import React from "react";
import './ProjectHeading.css'
import Navigation from "../../Navigation/Navigation";

class ProjectHeading extends React.Component {
    render() {
        return(
            <div id="project-heading">
                <h1>Personal Website</h1>
                <div className="project-description">
                    <p>
                    This website has gone through many renovations as my front-end dvelopement skills progress.
                    It began as a simple html/css page as I dipped my toes into coding. The first couple of iterations
                    taught me about responsiveness, bootstrap, css grid, and flexbox.
                    This website was also a creative outlet as I played around in figma dreaming about what it can potentially look like.
                    <div className="br"/>
                    Most recently, this website was a tool in learning and gaining more concrete understanding of React.
                    In my newest iteration, I learned about React's Context API, creating reusable components, the difference between Browser Routing and Hash Routing, and various open-source React packages.
                        <div className="br"/>
                        I hope you enjoy your visit here!
                    </p>

                    <span className="project-about">
                        <p>
                            <b>Project Type - </b> Personal
                        </p>
                            <p>
                                <b> Time - </b> 2 Days for revamp only, Original website created in February 2019
                            </p>
                        <p>
                            <b> Tools - </b> Figma, React.js, HTML/CSS
                        </p>
                    </span>
                </div>
            </div>
        )
    }
}

export default ProjectHeading;