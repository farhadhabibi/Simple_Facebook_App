import React, { createContext, useState } from 'react';

import useAllMethodsState from '../hooks/useAllMethodsState';

export const AllMethodsContext = createContext();

export function AllMethodsProvider(props) {
    const postedDataMethods = useAllMethodsState();

    return (
        <AllMethodsContext.Provider value={postedDataMethods}>
            {props.children}
        </AllMethodsContext.Provider>
    )
}