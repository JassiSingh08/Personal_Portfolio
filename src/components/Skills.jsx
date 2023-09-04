import React from "react";
import { TypeAnimation } from "react-type-animation";

const Skills = () => {
  return (
    <div class="card-container">
      <div class="card">
        <div class="front-content">
          <p>
            {" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Tech Stack I Work With",
                1000, // wait 1s before replacing
                "OH!",
                700,
                "Languages I Speak" ,
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2.5em", display: "inline-block" }}
              repeat={Infinity}
            />
            ~
          </p>
        </div>
        <div class="content">
          <p class="heading"></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
