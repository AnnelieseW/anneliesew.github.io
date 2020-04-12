import React from 'react'
import './MainPlanning.css'
import PlanningDescription from "./PlanningComponents/PlanningDescription";

class MainPlanning extends React.Component{
    render(){
        return(
            <div id="planning">
                <PlanningDescription/>
            </div>

        )
    }
}

export default MainPlanning;