import React, {useContext} from "react";

export const themes = {
    light: {
        theme:"light",
        background:"#FFFFFF",
        background2: "#F6F5F3",
        font: "#000000",
        font2: "#B1B1B1",
        placeholder: "#000000",
        left_side_bar: "#F6F5F3",
        progress_bar:"#ACACAC",
        hover_icons: "#707070",
        active_icons: "#AD61FF",
        active_fill_icons: "#AD61FF",
        volume_icon: "#D9D9D9",
        popup_color_hover: "#580EA2",
        popup_color_active: "#AD61FF",
        popup_scroll: "#181818",
    },
    dark: {
        theme:"black",
        background:"#181818",
        background2: "#313131",
        font: "#ffffff",
        font2: "#696969",
        placeholder: "#ffffff",
        left_side_bar: "#1C1C1C",
        progress_bar:"#2E2E2E",
        hover_icons: "#ACACAC",
        active_icons: "#ffffff",
        active_fill_icons: "#696969",
        volume_icon: "#FFFFFF",
        popup_color_hover: "#d9b6ff",
        popup_color_active: "#ad61ff",
        popup_scroll: "#FFFFFF",
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
