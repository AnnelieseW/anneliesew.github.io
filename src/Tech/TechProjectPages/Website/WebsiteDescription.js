import React from "react";
import ProjectHeading from "../../../Components/Project Page/Individual Project Pages/ProjectHeading";
import ProjectNavigation from "../../../Components/Project Page/Individual Project Pages/ProjectNavigation";

import {personalWebsite} from "../ProjectList";

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




class WebsiteDescription extends React.Component{
    render() {
        return(
            <div id={"personalWebsite"} >
                <ProjectNavigation linking={true} navlist={navigationList}/>
            <ProjectHeading categories = {personalWebsite.projectPage}/>
            </div>
        )
    }
}
export default WebsiteDescription