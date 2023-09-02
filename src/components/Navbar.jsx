import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("myself");
  const [navOpen, setNavOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false)

  const handleDrawer = () => {
    setNavOpen(!navOpen);
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 1000);
  };

  const handleActive = (link) => {
    setActive(link);
  };
  return (
    <>
      <div className="header">
        
        <button className="nav-button" onClick={() => handleDrawer()}></button>
        <div className={`navbar ${navOpen ? "open" : "close"} ${isShaking ? 'navshake' : ''} `}>
          <ul>
            <li className={active === "myself" ? "active" : ""}>
              <a href="#myself" onClick={() => handleActive("myself")}>
                ITS ME
              </a>
            </li>
            <li className={active === "skills" ? "active" : ""}>
              <a href="#skills" onClick={() => handleActive("skills")}>
                SKILLS
              </a>
            </li>
            <li className={active === "projects" ? "active" : ""}>
              <a href="#projects" onClick={() => handleActive("projects")}>
                PROJECTS
              </a>
            </li>
            <li className={active === "contact" ? "active" : ""}>
              <a href="#contact" onClick={() => handleActive("contact")}>
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
