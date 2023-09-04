import React from "react";

function Card({ title, imageUrl }) {
  return (
    <div className="skill-container">
      <div className="card">
        <div className="face back">
          <div className="content">
            <span className="stars"></span>
            <b className="desc"></b>
            <p className="desc">
              {" "}
              <img src={imageUrl} alt={title} />
            </p>
          </div>
        </div>
        <div className="face front">
          <b>{title}</b>
        </div>
      </div>
    </div>
  );
}

const Skills = () => {
  const cardData = [
    { title: "FrontEnd", imageUrl: "url_to_image_1" },
    { title: "BackEnd", imageUrl: "url_to_image_2" },
    { title: "DevTools", imageUrl: "url_to_image_3" },
  ];
  return (
    <div className="card-flex">
      {cardData.map((data, index) => (
        <Card key={index} title={data.title} imageUrl={data.imageUrl} />
      ))}
    </div>
  );
};

export default Skills;
