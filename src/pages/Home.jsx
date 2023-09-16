import React from "react";
import profile_pic from "../Assets/Profile_Pic.png";
import MERN from "../components/MERN";
import { TypeAnimation } from "react-type-animation";
import Socials from "../components/Socials";
import ColorPicker from "../components/ColorsMap";
import CV from "../Assets/CV.png";
import Check from "../components/check";

const Home = ({ colorPickerOpen, handleColorPicker }) => {
  /*   const [colorPickerOpen, setcolorPickerOpen] = useState(true)

  const handleColorPicker = () => {
    setcolorPickerOpen(!colorPickerOpen)
  }
 */
  return (
    <>
      <Check>
        <div className="home-container">
          <div className="info-container">
            <div className="first-info">
              {/*  */}
              <div className="cater3-movingBG">
                <div className="flyinTxtCont">
                  <div className="flyIn lineOne">Jassi Singh</div>
                  <div className="flyIn lineFour">
                    {/* <div className="flyIn lineTwo">Singh </div> */}
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Frontend Developer",
                        1000, // wait 1s before replacing
                        "Backend Developer",
                        1000,
                        "Sometimes Both ~",
                        500,
                        "FullStack Developer",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: "0.9em", display: "inline-block" }}
                      repeat={Infinity}
                    />{" "}
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
            <div className="third-info">
              I build accessible, inclusive products and digital experiences for
              the web.
            </div>
            <div className="cv-icon">
              <a
                href="https://drive.google.com/file/d/1tPl03kKApRmBmnQItqNMgZXMz7_OQMK1/view?usp=drive_link"
                download={true}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={CV} alt="CV" />
              </a>
            </div>
          </div>
          <div className="profile-pic-container">
            <img src={profile_pic} alt="profile_pic" className="profile-pic" />
          </div>
        </div>
        <div
          className={`colorPicker  ${
            colorPickerOpen ? "close-ColorPicker" : "open-ColorPicker"
          } `}
        >
          <div className="pickerblur" onClick={() => handleColorPicker()}></div>
          <ColorPicker handleColorPicker={handleColorPicker} />
        </div>
      </Check>
      <Check>
        <MERN />
      </Check>
      <div className="socialShow">
        <Socials />
      </div>
    </>
  );
};

export default Home;
