import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { THEME } from "../constants/Constants";

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeToggleChange = (event) => {
        setTheme(event.target.checked 
            ? THEME.OPTIONS.DARK
            : THEME.OPTIONS.LIGHT);
    }

    return (
        <div>
            <input type="checkbox" id="theme-toggle" name="theme-toggle" 
                onChange={handleThemeToggleChange} checked={theme == THEME.OPTIONS.DARK} />
            <label htmlFor="theme-toggle">Dark Mode</label>
        </div>
    );
}

export default ThemeToggle;