import React, { createContext, useState } from "react";

const DarkContext = createContext();

const ThemeContext = (props) => {
  // for darkMode
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // for AccentColors
  const [AccentColors, setAccentColors] = useState("#00ccff");
  const defaultColor = "#00ccff";

  const toggleAccentColors = (color) => {
    setAccentColors(color);
  };

  const themeStyles = {
    "--accent-color": AccentColors,
  };

  const resetAccentColor = () => {
    setAccentColors(defaultColor)
  }

  return (
    <div>
      <DarkContext.Provider
        value={{ darkMode, toggleTheme, AccentColors, toggleAccentColors, resetAccentColor }}
      >
        <div style={themeStyles}> {props.children}</div>
      </DarkContext.Provider>
    </div>
  );
};

export { ThemeContext, DarkContext };
