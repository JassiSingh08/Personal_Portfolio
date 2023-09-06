import React, { createContext, useState } from "react";

const DarkContext = createContext();

const ThemeContext = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <DarkContext.Provider value={{ darkMode, toggleTheme }}>
        {props.children}
      </DarkContext.Provider>
    </div>
  );
};

export { ThemeContext,  DarkContext };
