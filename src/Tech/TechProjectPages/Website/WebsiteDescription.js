import React from "react";
import ProjectHeading from "../../../Components/Project Page/Individual Project Pages/ProjectHeading";
import ProjectNavigation from "../../../Components/Project Page/Individual Project Pages/ProjectNavigation";

import "../../../Components/Project Page/Individual Project Pages/ProjectPage.css"

import SplitNav from "../../../Assets/Website-Project-Page/Split-Nav.png"
import techLanding from "../../../Assets/Website-Project-Page/v_Tech.png"
import planLanding from "../../../Assets/Website-Project-Page/v_Plan.png"
import cloudTheme from "../../../Assets/Website-Project-Page/V1.png"


const home ={
    text:'🏠',
    href:"/#landing"
};

const back = {
    text:'⬅️',
    href:"/pomodoro-project"
};
const pomodoro = {
    text:'➡️',
    href:"/pomodoro-project"
};

const navigationList = [home, back, pomodoro];

const heading = {
    status: "in progress",
    title:"💻 Personal Website",
    type: 'frontend',
    tools: 'react.js, figma',
    learning: 'react: routing + linking, HashRouter vs BrowserRouter, context API,  deployment  of react apps with gh-pages, reusable components',
    timeline: "2019 - ongoing",
    description: 'The website started as one of my first projects I started in software development.' +
    ' With the new semester beginning soon, I wanted a place where I was proud to point employers towards.' +
    ' This revamp of the website is meant to be a place to accommodate both my planning and software interests,' +
    ' a home for my technical projects, and an opportunity to brand myself. ',
    links: {
        github: 'https://github.com/AnnelieseW/anneliesew.github.io',
    }
};


class WebsiteDescription extends React.Component{
    render() {
        return(
            <div id={"personalWebsite"} className="centering">
                <ProjectNavigation linking={true} navlist={navigationList}/>
                <ProjectHeading categories = {heading}/>
                <div className="project-body">
                    <h1>what's new?</h1>

                    <div className="project-body-chunk">
                        <h4>"two" websites in one</h4>
                        <img className={'textWrapRight'} style={{ width: '30rem', maxWidth: '80vw', padding: '1rem', background: 'rgba(0, 0, 0, 0.10)'}} src={SplitNav}/>
                        <p style={{maxWidth: '40rem', paddingRight:'1rem'}}>
                            Previously, this website was meant for software dev projects only.
                            Now that I have some project ideas that overlap with planning,
                            I wanted potential employers in the field to see them as well.
                            I didn't want to host two sites if both sites link to similar projects
                            My first solution was a landing page that directs them to the "correct" site.
                            This wasn't ideal as it involved more work from the user.
                        </p>
                        <p>
                            I had the idea of using React's state functionality to "toggle" between the planning and dev site.
                            My first iteration involved a a toggle button that passed the state up to the main component to determine which site to use.
                            Unfortunately when I tried to move the button to be apart of my navigation tool bar,
                            it became more difficult to pass the state up and through each component when the button state changed.
                            After some research, I came across <a href={"https://reactjs.org/docs/context.html"}> React's Context API</a>.
                            It is intended to be used when there is "global" data to be shared among React Components
                            This made it much easier to control what the user sees depending on the state of the toggle button.
                        </p>
                        <div style={{display: "flex", flexWrap:'wrap',justifyContent: 'space-evenly', marginTop:'2rem'}}>
                            <img style={{maxWidth: '80vw', width: '30rem', height: 'auto'}} src={techLanding}/>
                            <img style={{maxWidth: '80vw', width: '30rem', height: 'auto'}} src={planLanding}/>
                        </div>
                    </div>
                    <div className="project-body-chunk">
                        <h4>project page formats</h4>
                        <p>
                            Admittedly, I have never finished a project page prior to this.I had a quick the stand-in
                            page that I whipped up which was so embarrassing, I'll save you from seeing it.
                            During the most recent large update, I  decided to standardized the project pages and create reusable
                            components for them. I created navigation components specific to the project pages as well as created a "quick facts"
                            section that I also created into a component for easy implementation. Moving forward,
                            as I create new projects and their descriptions, I'll have a better understanding of commonalities
                            between them that I can create into components.
                        </p>
                    </div>
                    <div className="project-body-chunk">
                        <h4>new aesthetics</h4>
                        <p>
                            Now that I would be also directing people in planning to the site,
                            I felt like I needed a new look. Previously my website was made to look like sky at dusk.
                            I wanted to convey a theme of imagination. In the execution this made my website look a little
                            too childish for the image I wanted to convey to potential employers in the planning field.
                        </p>
                        <img style={{ width: '100%'}} src={cloudTheme}/>
                        <p>
                            I eliminated the decorations, and choose to stick with a more minimal style,
                            though the layout remains the same. I think that the two websites can be more cohesive but I
                            like the current distinction between the two sites.
                        </p>
                    </div>

                    <h1>what's next?</h1>
                    <h4>integrating browser caches</h4>
                    <p>
                        Specifically, having the browser remember which context the user was last viewing. It's a small change
                        but I think it will be a nice addition. Currently the website defaults to the tech site
                        whenever you refresh the homepage.
                    </p>
                    <h4>creating more projects to showcase + completing project pages</h4>
                    <p>
                        Still working on this one!
                    </p>
                </div>

                <ProjectNavigation linking={true} navlist={navigationList}/>
            </div>
        )
    }
}
export default WebsiteDescription