import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  //authContext
  const { isAuthenticated, changeAuth } = useContext(AuthContext);
  return (
    <>
      <div className="navbar" style={style}>
        <h1> My app basic</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            {isAuthenticated ? (
              <button onClick={changeAuth}>Logout</button>
            ) : (
              <button onClick={changeAuth}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
