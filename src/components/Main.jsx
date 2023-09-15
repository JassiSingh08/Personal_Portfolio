import React, { useContext, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { DarkContext } from "../context/ThemeContext";
// Components
import LightToDark from "./LightToDark";
import Socials from "./Socials";
// PAGES
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import BackToTop from "./BackToTop";

const Main = ({ toggleNav, isClicked, setClicked }) => {
  const { darkMode } = useContext(DarkContext);
  const [colorPickerOpen, setcolorPickerOpen] = useState(true);

  const handleColorPicker = () => {
    setcolorPickerOpen(!colorPickerOpen);
  };

  return (
    <>
      <div className={`left-container ${darkMode ? `darkTheme` : `smooth`}`}>
        <div className="sidebar">
          <div className="nav-hambgr" onClick={toggleNav}>
            <Hamburger
              color="#e8e8e8"
              rounded
              toggled={isClicked}
              toggle={setClicked}
            />
          </div>
          {/* DARK THEME TOGGLE  */}
          
          <div className="handleThemes">
            <LightToDark handleColorPicker={handleColorPicker} />
          </div>

          {/* Socails */}
          <div className="socialHide">
            <Socials />
          </div>
        </div>
        <div id="home" className="content">
        <BackToTop/>
          <Home
            colorPickerOpen={colorPickerOpen}
            handleColorPicker={handleColorPicker}
          />
          <div id="about" className="am-c">
            <AboutMe />
          </div>
          <div id="skills" className="s-c">
            <Skills />
          </div>
          <div id="projects" className="pc-c">
            <Projects />
          </div>
          <div id="contact" className="cm-c">
            <ContactMe />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
