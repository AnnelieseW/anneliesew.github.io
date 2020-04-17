import React from "react";
import WhyMe from "./WhyMe";
import ResumeLink from "../../Components/ResumeLink/ResumeLink";

class PlanningDescription extends React.Component {
    render(){
        return(
                <div className="planning">
                    <div   id="why-plan" className="description">
                <h3>Why I Study Planning</h3>
                    <p>
                        When I think about the stages of my life, I think about the different places I've lived in.
                        From the apartment building in Hamilton where we first arrived to Canada, to the suburbs as we slowly transition through social economic classes.
                        I've lived in the busy, crowded streets of China and also the peaceful countrysides of Switzerland as well as visiting many different cities, villages, and communities.
                        As my love for places grew, my interests in Planning also peaked. I wanted to better understand how public policies and the built environment impacts daily life in all the different settings I've experienced.
                        I believe that good city planning is key in making cities more equitable places, promoting healthy living, and places of opportunities
                        <br/>
                        In particular I'm interested in mobility and the rise of smart cities.
                    </p>
                    </div>
                    <div id="about-plan" className="description">

                    <h3>More About Me</h3>
                    <p>
                        I'm currently working on the National Agro-Climate Information Service team at Agriculture and AgriFood Canada as a Geomatics Technician, developing software tools for soil moisture data analysis.
                        Previously I was at Alert Labs, an Internet of Things Startup, developing internal tools for the Sales team.
                        <br/>
                        Outside of work and school, I'm leading the second iteration of EnergyHacks, an energy first hackathon, and building communities and opening doors to tech at StarterHacks as Mentor Coordinator.
                        I also like to create small projects such as this website that you're currently on.
                        <br/>
                    I hope to pursue a career at the intersection of urban planning and technology. I am seeking internship opportunities for Fall 2020.
                    </p>
                        <ResumeLink/>
                    </div>
                </div>
        )
    }
}

export default PlanningDescription;