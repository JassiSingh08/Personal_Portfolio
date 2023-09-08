import React from "react";
import github from "../Assets/github-mark.png";
import openLink from "../Assets/open-link2.png";

const ProjectCard = ({ data, key }) => {
  return (
    <div key={key} className="center">
      <div className="article-card">
        <div className="article-card-blur"></div>
        <div className="project-content">
          <div className="content-title">
            <p className="title">{data.name}</p>
            <p className="date">{data.category}</p>
          </div>
          <div className="content-link">
            <div className="icon1">
              <a href="/" target="_blank">
                <img src={github} alt="github" />
              </a>
            </div>
            <div className="icon2">
              <a href="/" target="_blank">
                <img src={openLink} alt="openLink" />
              </a>
            </div>
          </div>
        </div>
        <img src={data.src} alt={data.name} />
      </div>
    </div>
  );
};

export default ProjectCard;
