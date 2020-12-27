import React, { createContext, useContext, useReducer } from "react";

//Prepares the datalayer
export const StateConext = createContext();

//Wrap our app and provide the Data layer 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateConext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateConext.Provider>
);

//Pull information from the Data layer
export const useStateValue = () => useContext(StateConext);