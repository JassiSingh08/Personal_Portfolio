import React, { useContext } from "react";
import { DarkContext } from "../context/ThemeContext";


const Nav = ({ isNavOpen, setNavOpen, toggleHamClick }) => {

  const { darkMode } = useContext(DarkContext);
  console.log(darkMode)

  const closeNavbar = () => {
    setNavOpen(!isNavOpen);
    toggleHamClick()
  };
  
  return (
    <>
      <div
        className={`side-nav-bar ${isNavOpen ? "close" : ""} `}
        onClick={() => closeNavbar()}
      >
        <div className="header">
          <div className="image-text">
            <span className="image">{/*<img src="logo.png" alt="">*/}</span>
          </div>
        </div>
        <div className="side-nav-menu-bar">
          <div className="side-nav-menu">
            <ul className="side-nav-menu-links">
              <li className="nav-link">
                <a href="#home">
                  <i className="bx bx-side-nav-home-alt icon" />
                  <span className="text nav-text">Home</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#about">
                  <i className="bx bx-bar-chart-alt-2 icon" />
                  <span className="text nav-text">About</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#skills">
                  <i className="bx bx-bell icon" />
                  <span className="text nav-text">Skills</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#projects">
                  <i className="bx bx-pie-chart-alt icon" />
                  <span className="text nav-text">Projects</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#contact">
                  <i className="bx bx-heart icon" />
                  <span className="text nav-text">Contact Me</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
