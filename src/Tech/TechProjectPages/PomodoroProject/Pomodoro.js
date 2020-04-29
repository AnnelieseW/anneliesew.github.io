import React from 'react';
import { pomodoro} from "../ProjectList";
import ProjectHeading from "../../../Components/Project Page/Individual Project Pages/ProjectHeading";
import ProjectNavigation from "../../../Components/Project Page/Individual Project Pages/ProjectNavigation";


const home ={
    text:'🏠',
    href:"/#landing"
};

const back = {
    text:'⬅️',
    href:"/website-personal"
};
const web = {
    text:'➡️',
    href:"/website-personal"
};

const header =  {
    title: "🍅 Pomodoro Technique Timer",
    type: 'frontend',
    tools: 'react.js, figma',
    learning: 'first taste of React, learned about passing props and states',
    timeline: "weekend in Oct '19",
    status: "V2 in progress",
    description: "Pomodoro is a study technique consisting of 25 minute intervals of intense focus followed by 5 minutes of rest. " +
    "While there are plenty of mobile apps available, I couldn't find a webapp that has all the functionality I was looking for." +
    " I wanted an app  that switches between study and break time automatically as well as keep count of how many cycles have passed, so I made my own! " +
    "I am currently in the progress of rewriting the web-app as I look back and realize my code is hideous, the new version is not ready yet. " +
    "You're able to take a look at the original in the meantime.",
    links: {
        site:'https://anneliesew.github.io/pomodoro/',
        github: 'https://github.com/AnnelieseW/pomodoro',
    }
};

const navigationList = [home, back, web];

const PomodoroProject = () => (
    <div id="PomodoroProject" className="centering">
        <ProjectNavigation linking={true} navlist={navigationList}/>
        <ProjectHeading categories = {header}/>
    </div>

);

export default PomodoroProject