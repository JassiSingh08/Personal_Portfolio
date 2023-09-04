import React from "react";
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
import ScrollCarousel from "scroll-carousel-react";
import { TypeAnimation } from "react-type-animation";

const SkillsAgain = () => {
    const images = [
        { name: "HTML", src: html },
        { name: "CSS", src: css },
        { name: "Bootstrap", src: bootstrap },
        { name: "JavaScript", src: js },
        { name: "React", src: reactPNG },
        { name: "Node.js", src: node },
        { name: "Express", src: express },
        { name: "MongoDB", src: Mongodb },
        { name: "SQL Server", src: mssql },
        { name: "GIT", src: git },
        { name: "Postman", src: postman },
        { name: "REST API", src: Restapi },
      ];

  return (
    <div className="skill-container">
      <div className="skill-heading">
        <TypeAnimation
          sequence={[
            "Tech Stack I Work With",
            1000, // wait 1s before replacing
            "OH!",
            700,
            "Languages I Speak:",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2.5em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <div className="skill-corousel">
        <ScrollCarousel autoplay autoplaySpeed={8} speed={7}>
          {images.map((item, key) => (
            <div className="skill-pic-container" key={key}>
              <img src={item.src} alt={item.name} className="skill-pic" />
              <p className="image-name">{item.name}</p>
            </div>
          ))}
        </ScrollCarousel>
      </div>
    </div>
  );
};

export default SkillsAgain;
