import React, { createContext, useState, useReducer } from 'react';

// import useAllMethodsState from '../hooks/useAllMethodsState';
import allMethodsReducer from '../reducers/allMethods.reducer';

export const AllMethodsContext = createContext();

export function AllMethodsProvider(props) {
    const [postedImages, dispatch] = useReducer(allMethodsReducer, []);
    console.log('po', postedImages, dispatch)

    // const postedDataMethods = useAllMethodsState();

    return (
        <AllMethodsContext.Provider value={{ postedImages, dispatch }}>
            {props.children}
        </AllMethodsContext.Provider>
    )
}