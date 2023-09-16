import React, { useContext, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { DarkContext } from "../context/ThemeContext";
// Components
import LightToDark from "./LightToDark";
import Socials from "./Socials";
import BackToTop from "./BackToTop";
// PAGES
import Home from "../pages/Home";
import AboutMe from "../pages//AboutMe";
import Skills from "../pages//Skills";
import Projects from "../pages//Projects";
import ContactMe from "../pages//ContactMe";

const Main = ({ toggleNav, isClicked, setClicked, setIsOpen, isOpen }) => {
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
          {/* ==== DARK THEME TOGGLE ==== */}

          <div className="handleThemes">
            <LightToDark handleColorPicker={handleColorPicker} />

            {/*==== Color Picker Button ====*/}
            <button
              // className={styles.primaryBtn}
              className="colormap-btn"
              onClick={() => setIsOpen(!isOpen)}
            ></button>
          </div>
          {/* ==== Socails ==== */}
          <div className="socialHide">
            <Socials />
          </div>
        </div>
        <div id="home" className="content">
          <BackToTop />

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
