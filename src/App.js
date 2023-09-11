import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { ThemeContext } from "./context/ThemeContext";


function App() {
  const [isNavOpen, setNavOpen] = useState(true);

  // Function to toggle the Nav component
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <ThemeContext>
        <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
        <Main toggleNav={toggleNav} />
      </ThemeContext>
    </>
  );
}

export default App;
