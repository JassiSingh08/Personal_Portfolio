import "./App.css";
import AboutMe from "./components/AboutMe";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import {ThemeContext} from "./context/ThemeContext";
// import Check from "./components/check";
// import Home from "./components/Home";
// import Skills from "./components/Skills";
// import SkillsAgain from "./components/SkillsAgain";
// import Socials from './components/Socials';

function App() {
  return (
    <>
      <ThemeContext>
        <Navbar />
      </ThemeContext>
      {/* <Divider/> */}
      {/* <AboutMe /> */}
      {/* <Check/> */}
      {/* <LightToDark/> */}
      {/* <Home /> */}
      {/* <Socials /> */}
      {/* <Skills/> */}
      {/* <SkillsAgain/> */}
    </>
  );
}

export default App;
