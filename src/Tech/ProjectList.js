import React from "react";
import PomodoroProject from "./PomodoroProject/Pomodoro";
import PomodoroPhoto from "../Assets/pomodoro-cover.jpg";
import WebsiteCover from "../Assets/WebsiteCover.png"


const pomodoro = {

    link:"/pomodoro-project",
    component:{PomodoroProject},
    image:PomodoroPhoto,
    title:"pomodoro timer",
    category:"frontend react.js figma",
    description: "a study timer to help students focus"
};

const personalWebsite = {

    link:"/pomodoro-project",
    component:{PomodoroProject},
    image:WebsiteCover,
    title:"this website",
    category:"frontend react.js",
    description: "a dynamic, responsive, personal website"
};

export const projectList = [
    personalWebsite,
    pomodoro,
];