import React from "react";
import Check from "../components/check";
// import AboutMepic from "../Assets/AboutmePIC.png";

const AboutMe = () => {
  const myStyle = {
    fontSize: "1em",
    color: "var(--accent-color)",
    fontStyle: "italic",
    cursor: "pointer",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
    textdecoration: "none",
  };

  return (
    <>
      <Check>
        <div className="divider">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="text-head">
            {" "}
            <span className="divider-heading">Who Am I?</span>
          </div>
          <div className="line animate-divider"></div>
        </div>

        <div className="Aboutme">
          <div className="aboutme-info">
            <p style={{ textAlign: "center" }}>
              <span>Jassi Singh</span> <br />A Software Developer based in New
              Delhi, India.
            </p>
            <br />
            <div className="aboutme-info2">
              <p>
                I am being, wants to make things and to know the backend
                processes, nevertheless learns all along. If you are looking for
                someone with knowledge of Frontend, Backend Technologies, User
                Interface Libraries and want a Team Player for your projects, or
                your firm let's connect over a virtual Tea/Coffee Meeting.{" "}
                <span style={myStyle}>
                  <a href="#contact">More?</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Check>
    </>
  );
};

export default AboutMe;
