import React from "react";
import PomodoroProject from "./PomodoroProject/Pomodoro";
import PomodoroPhoto from "../../Assets/pomodoro-cover.jpg";
import ProjectComponent from "./ProjectComponent";

const pomodoro = {

    link:"/pomodoro-project",
    component:{PomodoroProject},
    image:PomodoroPhoto,
    title:"Pomodoro",
    category:"React.js| UX/UI"
};

export const projectList = [
    pomodoro,
    pomodoro,
    pomodoro
];