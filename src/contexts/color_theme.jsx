import React, {useContext} from "react";

export const themes = {
    light: {
        background:"#FFF",
        font: "#000000",
    },
    dark: {
        background:"#181818",
        font: "#ffffff",
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
