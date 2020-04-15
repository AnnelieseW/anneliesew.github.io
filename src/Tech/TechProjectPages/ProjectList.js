import React from "react";
import PomodoroProject from "./PomodoroProject/Pomodoro";
import PomodoroPhoto from "../../Assets/pomodoro-cover.jpg";
import WebsiteCover from "../../Assets/WebsiteCover.png"
import WebsiteDescription from "./Website/WebsiteDescription";

export const pomodoro = {

    link:"/pomodoro-project",
    component:{PomodoroProject},
    image:PomodoroPhoto,
    title:"pomodoro timer",
    category:"frontend react.js figma",
    description: "a study timer to help students focus",
    projectPage : {
        title: " 🍅 Pomodoro Technique Timer",
        type: 'frontend',
        tools: 'react.js, figma',
        learning: 'first taste of React, learned about passing props and states',
        timeline: "weekend in Oct '19",
        status: "incomplete",
        description: "Pomodoro is a study technique consisting of 25 minute intervals of intense focus followed by 5 minutes of rest. " +
            "While there are plenty of mobile apps available, I couldn't find a webapp that has all the functionality I was looking for." +
            " I wanted an app  that switches between study and break time automatically as well as keep count of how many cycles have passed, so I made my own! ",
        links: {
            site:'https://anneliesew.github.io/pomodoro/',
            github: 'https://github.com/AnnelieseW/pomodoro',
        }
    }
};

export const personalWebsite = {

    link:"/website-personal",
    component:{WebsiteDescription},
    image:WebsiteCover,
    title:"this website",
    category:"frontend react.js",
    description: "a dynamic, responsive, personal website",
    projectPage :{
        status: "in progress",
        title:"💻 Personal Website",
        type: 'frontend',
        tools: 'react.js, figma',
        learning: 'react: routing + linking, HashRouter vs BrowserRouter, context API,  deployment  of react apps with gh-pages, reusable components',
        timeline: "easter weekend of Apr '20 during social distancing",
        description: 'The website started as one of my first projects I started in software development.' +
            ' With the new semester beginning soon, I wanted a place where I was proud to point employers towards.' +
            ' This revamp of the website is meant to be a place to accommodate both my planning and software interests,' +
            ' a home for my technical projects, and an opportunity to brand myself. ',
        links: {
            github: 'https://github.com/AnnelieseW/anneliesew.github.io',
        }
    },
};

export const projectList = [
    personalWebsite,
    pomodoro,
];
