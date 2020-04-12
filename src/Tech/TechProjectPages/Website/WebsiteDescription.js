import React from "react";
import ProjectHeading from "../../../Components/Project Page/Individual Project Pages/ProjectHeading";
import Navigation from "../../../Components/Navigation/Navigation";

class WebsiteDescription extends React.Component{
    render() {
        return(
            <div>
                <Navigation theme={'tech'}/>
            <div id={"personalWebsite"}>
            <ProjectHeading/>
            </div>
            </div>
        )
    }
}
export default WebsiteDescription