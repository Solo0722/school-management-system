import React, { createContext } from "react";
import { useLocalStorage } from "../shared/hooks/useLocalStorage";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [loginDetails, setLoginDetails] = useLocalStorage("loginDetails", {
    username: null,
    password: null,
  });
  const [loginDates, setLoginDates] = useLocalStorage("loginDates", []);


  return (
    <GlobalContext.Provider
      value={{ loginDetails, setLoginDetails, loginDates, setLoginDates }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
