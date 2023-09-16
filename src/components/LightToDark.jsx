import React, { useContext } from "react";
import { DarkContext } from "../context/ThemeContext";

const LightToDark = () => {
  const { toggleTheme  } = useContext(DarkContext);

  const handleClick = () => {
    toggleTheme();
  };

  /*   const handleAccentColorChange = (event) => {
    const newColor = event.target.value;
    toggleAccentColors(newColor);
  };
 */

  // onClick={handleClick}

  return (
    <>
      <input type="checkbox" className="l" onClick={handleClick}></input>
      {/* <button
        className="colormap-btn"
        onClick={() => handleColorPicker()}
      ></button> */}
    </>
  );
};

export default LightToDark;
