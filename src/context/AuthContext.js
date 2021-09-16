import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const changeAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  // use useEffect to notify after isAuthenticated changed
  // useEffect(() => {
  //   isAuthenticated
  //     ? alert("Login successfully")
  //     : alert("logout successfully");
  // }, [isAuthenticated]);

  // contextData
  const AuthContextData = {
    isAuthenticated,
    changeAuth,
  };

  //return context
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
