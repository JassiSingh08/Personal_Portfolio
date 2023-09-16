import React from "react";
import github from "../Assets/github-mark.png";
import openLink from "../Assets/open-link2.png";

const ProjectCard = ({ data }) => {
  return (
    <div className="center">
      <div className="article-card">
        <div className="article-card-blur"></div>
        <div className="project-content">
          <div className="content-title">
            <p className="title">{data.name}</p>
            <p className="sub-title">~ {data.desc}</p>
            <p className="sub-title">~ {data.category}</p>
          </div>
          <div className="content-link">
            <div className="icon1">
              <a href={data.gitLink} target="_blank" rel="noreferrer">
                <img src={github} alt="github" />
              </a>
            </div>
{/*             <div className="icon2">
              <a href="/" target="_blank">
                <img src={openLink} alt="openLink" />
              </a>
            </div> */}
          </div>
        </div>
        <img src={data.src} alt={data.name} />
      </div>
     </div>
  );
};

export default ProjectCard;
