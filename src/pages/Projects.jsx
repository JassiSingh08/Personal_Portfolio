import React, { useState } from "react";
import slideData from "../data/SlideData";
import ProjectCard from "../components/ProjectCard";

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

  return (
    <>
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
              <label className={`tab ${selectedCategory === category ? 'glider' : ''}`} htmlFor={`radio-${index + 1}`}>
                {category}
              </label>
            </React.Fragment>
          ))}
          {/* <span className="glider"></span> */}
        </div>
      </div>
      {filterCategories.map((slide, i) => (
        <ProjectCard data={slide} key={i} />
      ))}
    </>
  );
};

export default Projects;
