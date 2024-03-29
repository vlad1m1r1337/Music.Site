import {AppRoutes} from "./routes";
import React, {useState} from "react";
import {createGlobalStyle} from "styled-components";
import {themes, ThemeContext} from "./contexts/color_theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/fonts/StratosSkyeng.woff") format("woff2"),
    url("/fonts/StratosSkyeng.woff2") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: ${prop => prop.$theme.font};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
  ul li {
    list-style: none;
  }
`

export default function App() {
    const [currentTheme, setCurrentTheme] = useState(themes.dark);

    const toggleTheme = () => {
        if (currentTheme === themes.dark) {
            setCurrentTheme(themes.light);
            return;
        }
        setCurrentTheme(themes.dark);
    }
    return (
    <>
        <ThemeContext.Provider value={{theme: currentTheme, toggleTheme }}>
            <GlobalStyle $theme={currentTheme}/>
            <AppRoutes/>
        </ThemeContext.Provider>
    </>
    );
};
