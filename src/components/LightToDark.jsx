import React, { useContext } from "react";
import { DarkContext } from "../context/ThemeContext";

const LightToDark = ({ handleColorPicker }) => {
  const { toggleTheme, isRotated, resetAccentColor } = useContext(DarkContext);

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
      <input type="checkbox" className="l" onClick={handleClick} ></input>
      {/*       <input
        type="color"
        id="accentColorPicker"
        value={AccentColors}
        onChange={handleAccentColorChange}
      /> */}
      <button
        className="colormap-btn"
        onClick={() => handleColorPicker()}
      ></button>
      <button
        className={` reset-btn ${isRotated ? "rotate" : ""}`}
        onClick={resetAccentColor}
      >
        <img
          width="34"
          height="34"
          src="https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/64/external-Reverse-user-interface-febrian-hidayat-flat-febrian-hidayat.png"
          alt="external-Reverse-user-interface-febrian-hidayat-flat-febrian-hidayat"
        />
      </button>
    </>
  );
};

export default LightToDark;
