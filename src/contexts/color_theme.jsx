import React, {useContext} from "react";

export const themes = {
    light: {
        theme:"light",
        background:"#FFFFFF",
        background2: "#1C1C1C",
        font: "#000000",
        font2: "#B1B1B1",
        placeholder: "#000000",
        left_side_bar: "#F6F5F3",
    },
    dark: {
        theme:"black",
        background:"#181818",
        background2: "#313131",
        font: "#ffffff",
        font2: "#696969",
        placeholder: "#ffffff",
        left_side_bar: "#1C1C1C",
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
