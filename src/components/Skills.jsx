import React from "react";
import { TypeAnimation } from "react-type-animation";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import Mongodb from "../Assets/mongodb.png";
import express from "../Assets/Express.png";
import reactPNG from "../Assets/React.png";
import node from "../Assets/node-js.svg";
import bootstrap from "../Assets/Bootstrap.png";
import git from "../Assets/GIT.png";
import postman from "../Assets/Postman.png";
import Restapi from "../Assets/RESTAPI.jpg";
import mssql from "../Assets/SQL SERVER.png";

const Skills = () => {
  return (
    <div class="card-container">
      <div class="card">
        <div class="front-content">
          <p>
            {" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Tech Stack I Work With",
                1000, // wait 1s before replacing
                "OH!",
                700,
                "Languages I Speak",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2.5em", display: "inline-block" }}
              repeat={Infinity}
            />
            ~
          </p>
        </div>
        <div class="content">
          <div className="skill-pic-container">
            <img className="skill-pic" src={html} alt="html" />
            <img className="skill-pic" src={css} alt="html" />
            <img className="skill-pic" src={bootstrap} alt="html" />
            <img className="skill-pic" src={js} alt="html" />
            <img className="skill-pic" src={reactPNG} alt="html" />
            <img className="skill-pic" src={node} alt="html" />
            <img className="skill-pic" src={express} alt="html" />
            <img className="skill-pic" src={Mongodb} alt="html" />
            <img className="skill-pic" src={mssql} alt="html" />
            <img className="skill-pic" src={git} alt="html" />
            <img className="skill-pic" src={Restapi} alt="html" />
            <img className="skill-pic" src={postman} alt="html" /> 
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
