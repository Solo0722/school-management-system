import React, { createContext } from "react";
import { useLocalStorage } from "../shared/hooks/useLocalStorage";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [loginDetails, setLoginDetails] = useLocalStorage("loginDetails", {
    username: null,
    password: null,
  });


  return (
    <GlobalContext.Provider value={{ loginDetails, setLoginDetails }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
