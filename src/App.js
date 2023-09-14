import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { ThemeContext } from "./context/ThemeContext";


function App() {
  const [isNavOpen, setNavOpen] = useState(true);
  const [isClicked, setClicked] = useState(false)

  // Function to toggle the Nav component
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const toggleHamClick = () => {
    setClicked(!isClicked)  
  }

  return (
    <div className="website-container">
      <ThemeContext>
        <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} toggleHamClick={toggleHamClick} />
        <Main toggleNav={toggleNav} isClicked={isClicked} setClicked={setClicked} />
      </ThemeContext>
    </div>
  );
}

export default App;
