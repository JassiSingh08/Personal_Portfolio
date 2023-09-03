import './App.css';
import Socials from './components/Socials';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Skills from './components/Skills';
// import LightToDark from './components/LightToDark';

function App() {
  return (
    <>
    <Navbar/>
    <Socials />
    {/* <LightToDark/> */}
    <Home />
    <Skills/>
    </>
  );

}

export default App;
