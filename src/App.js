import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { ThemeContext } from "./context/ThemeContext";
import Modal from "./components/ColorModal";

function App() {
  const [isNavOpen, setNavOpen] = useState(true);
  const [isClicked, setClicked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the Nav component
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const toggleHamClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div className="website-container">
      <ThemeContext>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        <Nav
          isNavOpen={isNavOpen}
          setNavOpen={setNavOpen}
          toggleHamClick={toggleHamClick}
        />
        <Main
          toggleNav={toggleNav}
          isClicked={isClicked}
          setClicked={setClicked}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </ThemeContext>
    </div>
  );
}

export default App;
