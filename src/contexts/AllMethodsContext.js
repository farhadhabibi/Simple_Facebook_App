import React, { createContext, useState, useReducer, useEffect } from 'react';

// import useAllMethodsState from '../hooks/useAllMethodsState';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import allMethodsReducer from '../reducers/allMethods.reducer';

export const AllMethodsContext = createContext();

export function AllMethodsProvider(props) {
    // const [postedImages, dispatch] = useReducer(allMethodsReducer, []);
    let [postedImages, dispatch] = useLocalStorageReducer('files', [], allMethodsReducer);
    console.log('data', postedImages)
    // const postedDataMethods = useAllMethodsState();

    return (
        <AllMethodsContext.Provider value={{ postedImages, dispatch }}>
            {props.children}
        </AllMethodsContext.Provider>
    )
}