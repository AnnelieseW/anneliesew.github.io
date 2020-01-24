import React from 'react';
import "./PomodoroProjectPage.css";

// import CoverPhoto from '../../Assets/PomodoroCoverPhoto.jpg';



const PomodoroProject = () => (
    <div id="PomodoroProject">
        {/*<img src={CoverPhoto}/>*/}
        <div className="project-content">
            <div className="text-section">
            <h2>What</h2>
            <p> The pomodoro is a study tool that automates the Pomodoro Technique to help students to focus
                <br/>
                The Pomodoro Technique is a study method where you focus intensely for a certain duration of time,
                typically 25 minutes, and then rest for a smaller duration, typically 5 minutes.
                After certain number of rounds of studying, you get a longer break.
            </p>
            </div>
            <div className="text-section">
            <h2>Why</h2>
                <p>
                    Well aren’t there many sites that do this? Yes there are! <br/>
                    There’s the tomatotimer online and also many phone apps.
                    But there was no webapp that was visually appealing, kept track of which round you are at and
                    automatically switches to the next timer after your focus or rest duration was done.
                </p>
            </div>
            <div className= "text-section">
            <h2>How</h2>
                <p>
                    I designed it within Figma and created all the assets there, then I used React to build the front end.
                </p>
            </div>
            <div className="text-section">
            <h2>Where</h2>
                <p>You can access it <a href="https://anneliesew.github.io/pomodoro/">here</a>. Although be warned, it's not finished</p>
            </div>
            <div className="text-section features">
            <h2>Features So Far</h2>
                <p> -   implemented the tomato design
                    <br/>
                    -	Made the stop and start button functional
                    <br/>
                    -	Implemented the functionality for the study length time
                </p>
            </div>
            <div className="text-section">
            <h2>To Do</h2>
                <p>
                    -   add the fields for short break length, long break length <br/>
                    -	Alternating accordingly between study, short break, long break <br/>
                    -	Be able to set the number of study rounds before a long break <br/>
                    -	Be able to set a goal for how many rounds to complete <br/>
                    -	Adding sound to be played when timer is done <br/>

                </p>
            </div>
            <div className="text-section futureplans">
            <h2>Plans for the Future</h2>
                <p>
                    –   make an ios version
                    -	make it into a progressive web app <br/>
                    -	being able to categorize the study period based on subject <br/>
                    -	tracking the study patterns and visualizing data <br/>

                </p>
            </div>
        </div>
    </div>

);

export default PomodoroProject