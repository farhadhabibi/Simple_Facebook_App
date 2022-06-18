import React, { createContext, useState } from 'react';

export const NavbarContext = createContext();

export function NavbarProvider(props) {
    const [anchor, setAnchor] = useState(false);

    const handleProfileMenuOpen = (event) => {
        setAnchor(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchor(false);
    };
    return (
        <NavbarContext.Provider value={{
            anchor, handleProfileMenuOpen,
            handleMenuClose
        }}>
            {props.children}
        </NavbarContext.Provider>
    )
}