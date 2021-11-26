import React, { useState, useContext } from 'react';

import sublinks from './data';



const AppContext = React.createContext();


export const AppProvider = ({ children }) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(true);
    const [ isSubmenulOpen, setIsSubmenulOpen ] = useState(true);
    
    
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openSubmenu = () => {
        setIsSubmenulOpen(true);
    };
    const closeSubmenu = () => {
        setIsSubmenulOpen(false);
    };


    return (
        <AppContext.Provider
            value={
            isSubmenulOpen, 
            isSidebarOpen,
            openSubmenu, 
            closeSubmenu, 
            openSidebar, 
            closeSidebar
        }>
            {children}
        </AppContext.Provider>
    );
};



// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};



