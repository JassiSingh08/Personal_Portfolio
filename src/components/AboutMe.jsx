import React from "react";
// import AboutMepic from "../Assets/AboutmePIC.png";

const AboutMe = () => {
  const myStyle = {
    fontSize: "1em",
    color: "var(--accent-color)",
    fontStyle: "italic",
    cursor: "pointer",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  };

  const myStye2 = {
    textTransform: "uppercase",
    fontSize: "2em",
    color: "var(--accent-color)",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    fontStyle: "italic",
    margin: "0 5px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  };

  return (
    <>
      <div className="divider">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="text-head">
          {" "}
          <span style={myStye2}>Who Am I?</span>
        </div>
        <div className="line animate-divider"></div>
      </div>
      <div className="Aboutme">
        {/* <p>
          <span>Who Am I?</span>
        </p> */}
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
              <span style={myStyle}>More?</span>
            </p>
          </div>
        </div>
        {/* <div className="am-pic">
        <img src={AboutMepic} alt="" />
      </div> */}
      </div>
    </>
  );
};

export default AboutMe;
