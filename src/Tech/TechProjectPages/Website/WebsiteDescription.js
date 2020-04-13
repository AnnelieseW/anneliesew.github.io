import React from "react";
import ProjectHeading from "../../../Components/Project Page/Individual Project Pages/ProjectHeading";
import Navigation from "../../../Components/Navigation/Navigation";

const back ={
    text:'home',
    href:"/#landing"
};

const pomodoro = {
    text:'next project',
    href:"/pomodoro-project"
};



class WebsiteDescription extends React.Component{
    render() {
        return(
            <div id={"personalWebsite"}>
                <Navigation list={[back, pomodoro]}/>
            <ProjectHeading/>
            </div>
        )
    }
}
export default WebsiteDescription