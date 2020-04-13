import React from "react";
import ProjectHeading from "../../../Components/Project Page/Individual Project Pages/ProjectHeading";
import ProjectNavigation from "../../../Components/Project Page/Individual Project Pages/ProjectNavigation";

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

const navigationList = [home, pomodoro, back];

const type={
    title:'Type',
    text:'Frontend'
};

const projectCategories = {
    type: 'frontend',
    tools: 'react.js, figma',
    learning: 'react: routing + linking, HashRouter vs BrowserRouter, context API,  deployment  of react apps with gh-pages, reusable components',
    timeline: "easter weekend of Apr '20 during social distancing",
};

const projectDescription ={
    description: 'The website started as one of my first projects I started in software development. With the new semester beginning soon, I wanted a place where I was proud to point employers towards. This revamp of the website is meant to be a place to accommodate both my planning and software interests, a home for my technical projects, and an opportunity to brand myself. '
};


class WebsiteDescription extends React.Component{
    render() {
        return(
            <div id={"personalWebsite"} >
                <ProjectNavigation linking={true} navlist={navigationList}/>
            <ProjectHeading categories = {projectCategories} description={projectDescription}/>
            </div>
        )
    }
}
export default WebsiteDescription