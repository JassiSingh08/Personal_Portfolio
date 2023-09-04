import React from "react";
import profile_pic from "../Assets/Profile_Pic.png";
import MERN from "./MERN";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="info-container">
          <div className="first-info">
            <h1>JASSI SINGH</h1>
          </div>
          <div className="second-info">
            <p>
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
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </p>
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
    </>
  );
};

export default Home;
