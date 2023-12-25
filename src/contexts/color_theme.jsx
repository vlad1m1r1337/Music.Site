import React, {useContext} from "react";

export const themes = {
    light: {
        background:"#FFFFFF",
        font: "#000000",
        placeholder: "#000000",
    },
    dark: {
        background:"#181818",
        font: "#ffffff",
        placeholder: "#ffffff",
    }
}

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);

    if (!theme) return theme.dark;

    return theme;
}
