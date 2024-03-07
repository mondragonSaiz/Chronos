import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";
export const AppContext = createContext();

export const useTheme = () => useContext(AppContext);

export default function ThemeProvider(props) {
  const initialState = {
    loginModal: false,
  };
  const [appGlobalState, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        appGlobalState,
        dispatch,
      }}
      {...props}
    />
  );
}
