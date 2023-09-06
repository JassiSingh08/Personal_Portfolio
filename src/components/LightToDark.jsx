import React, { useContext } from "react";
import { DarkContext } from "../context/ThemeContext";

const LightToDark = () => {
  const { toggleTheme, AccentColors, toggleAccentColors, resetAccentColor } =
    useContext(DarkContext);
  const handleClick = () => {
    toggleTheme();
  };
  const handleAccentColorChange = (event) => {
    const newColor = event.target.value;
    toggleAccentColors(newColor);
  };


  // onClick={handleClick}
  return (
    <div>
      <label class="switch">
        <input type="checkbox" onClick={handleClick} />
        <span class="slider"></span>
      </label>
      <input
        type="color"
        id="accentColorPicker"
        value={AccentColors}
        onChange={handleAccentColorChange}
      />
      <button onClick={resetAccentColor}>Reset</button>
    </div>
  );
};

export default LightToDark;
