// Setup the global state which will be accessed by the components.

import React, { createContext, useContext, useReducer } from "react";

// Create context
export const StateContext = createContext();

// Build provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Use context
export const useStateValue = () => useContext(StateContext);
