import React, { createContext, useContext, useReducer } from "react";

//Prepares the dataLayer
export const StateContext = createContext();

//Wrape our app and provide the dataLayer to use it in any component we needed
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);
