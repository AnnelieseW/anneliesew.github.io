import React from "react";
import ProjectHeading from "../../../Components/Project Page/Individual Project Pages/ProjectHeading";
import Navigation from "../../../Components/Navigation/Navigation";

const home ={
    text:'🏠',
    href:"/#landing"
};

const back = {
    text:'⬅️',
    href:"#/pomodoro-project"
};
const pomodoro = {
    text:'➡️',
    href:"#/pomodoro-project"
};



class WebsiteDescription extends React.Component{
    render() {
        return(
            <div id={"personalWebsite"}>
                <Navigation list={[home, back, pomodoro]}/>
            <ProjectHeading/>
            </div>
        )
    }
}
export default WebsiteDescription