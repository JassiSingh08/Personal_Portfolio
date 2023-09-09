import React, { useState } from "react";
import slideData from "../data/SlideData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const categories = ["All", "Frontend", "MERN"];
  const [selectedCategory, setselectedCategory] = useState("All");

  // function to handle category selection
  const handleCategory = (category) => {
    setselectedCategory(category);
  };

  // filtercategories
  const filterCategories =
    selectedCategory === "All"
      ? slideData
      : slideData.filter((Project) => Project.category === selectedCategory);

      const myStye2 = {
        textTransform: "uppercase",
        fontSize: "2em",
        color: "var(--accent-color)",
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        fontStyle: "italic",
        margin: "0 5px",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
      };
  return (
    <>
{/*       <div className="divider">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="text-head">
          {" "}
          <span style={myStye2}>Who Am I?</span>
        </div>
        <div className="line animate-divider"></div>
      </div> */}
      <div className="container">
        <div className="tabs">
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                id={`radio-${index + 1}`}
                name="tabs"
                checked={selectedCategory === category}
                onChange={() => handleCategory(category)}
              />
              <label className="tab" htmlFor={`radio-${index + 1}`}>
                {category}
              </label>
            </React.Fragment>
          ))}
          <span className="glider"></span>
        </div>
      </div>
      {filterCategories.map((slide, i) => (
        <ProjectCard data={slide} key={i} />
      ))}
    </>
  );
};

export default Projects;
