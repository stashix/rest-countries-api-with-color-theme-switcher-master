
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { THEME } from "../constants/Constants";

const getCurrentTheme = () => {
    const storedTheme = window.localStorage.getItem(THEME.STORAGE_KEY);

    if(storedTheme == null)
        return null;

    if (!Object.values(THEME.OPTIONS).some(x => x == storedTheme)) {
        window.localStorage.removeItem(THEME.STORAGE_KEY);
        return null;
    }

    return storedTheme;
}

const ThemeProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState(THEME.OPTIONS.DARK);

    const setTheme = (theme) => {
        window.localStorage.setItem(THEME.STORAGE_KEY, theme);
        setCurrentTheme(theme);        

        document.body.dataset.preferredTheme = theme;
    } 

    useEffect(() => {
        let storedTheme = getCurrentTheme();

        if(storedTheme == null) {
            storedTheme = window.matchMedia("(prefers-color-scheme: light)").matches
                ? THEME.OPTIONS.LIGHT
                : THEME.OPTIONS.DARK;
        }

        document.body.dataset.preferredTheme = storedTheme;
        setCurrentTheme(storedTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{theme: currentTheme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;