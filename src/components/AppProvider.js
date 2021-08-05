import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from './styles';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(
        localStorage.getItem("theme") || "lightTheme"
    );
    const toggleTheme = () => {
        setThemeMode(prevState => {
            if (prevState === 'lightTheme') {
                return 'darkTheme'
            } else {
                return 'lightTheme'
            }
        })
    }

    useEffect(() => {
        localStorage.setItem("theme", themeMode);
    }, [themeMode]);

    const value = { toggleTheme, themeMode }
    const costumTheme = theme[themeMode];

    return (
        <AppContext.Provider value={value}>
            <ThemeProvider theme={costumTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
};

export default AppProvider;