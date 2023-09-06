import React, { useContext } from "react";
import { DarkContext } from "../context/ThemeContext";

const LightToDark = () => {
  const { toggleTheme } = useContext(DarkContext);
  const handleClick = () => {
    toggleTheme();
  };

  // onClick={handleClick}
  return (
    <div>
      <label class="switch">
        <input type="checkbox" onClick={handleClick} />
        <span class="slider"></span>
      </label>
    </div>
  );
};

export default LightToDark;
