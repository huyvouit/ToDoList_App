import React, { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  //State
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: "#FFFFFF",
      color: "red",
    },
    dark: {
      background: "#000000",
      color: "white",
    },
  });
  const changeTheme = () => {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };

  //Context data
  const ThemeContextData = {
    theme,
    changeTheme,
  };

  //Return provider
  return (
    <ThemeContext.Provider value={ThemeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
