import React from "react";
import profile_pic from "../Assets/Profile_Pic.png";
import MERN from "./MERN";
import { TypeAnimation } from "react-type-animation";
import Socials from "./Socials";

const Home = () => {
  return (
    <>
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
        </div>
        <div className="profile-pic-container">
          <img src={profile_pic} alt="profile_pic" className="profile-pic" />
        </div>
      </div>
      <MERN />
      <div className="socialShow">
        <Socials />
      </div>
    </>
  );
};

export default Home;
