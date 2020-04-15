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

const navigationList = [home, web, back];

const PomodoroProject = () => (
    <div id="PomodoroProject">

        <ProjectNavigation linking={true} navlist={navigationList}/>
        <ProjectHeading categories = {pomodoro.projectPage}/>
    </div>

);

export default PomodoroProject