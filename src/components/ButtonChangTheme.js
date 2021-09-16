import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemContext";

export const ButtonChangTheme = ({ text }) => {
  const { changeTheme, theme } = useContext(ThemeContext);

  const { isLightTheme } = theme;

  return (
    <div
      className="button-theme"
      onClick={changeTheme}
      style={{ "text-align": "center" }}
    >
      {isLightTheme ? (
        <button>Change to Dark</button>
      ) : (
        <button>Change to Light</button>
      )}
    </div>
  );
};
