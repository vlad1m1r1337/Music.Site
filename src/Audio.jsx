import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import {Outlet} from "react-router-dom";

import {useSelector} from "react-redux";
import {useThemeContext} from "./contexts/color_theme";
import styled from "styled-components";

const Wrapper_1 = styled.div`
    margin: 0 auto;
    position: relative;
    background-color: ${prop => prop.$theme.background},
`
const Wrapper_2 = styled.div`
    width: 1920px;
    margin: 0 auto;
    min-height: 100%;
    background-color: #383838;
`

export const Audio = () => {
    const id = useSelector(state => state.main.id);
    const {theme} = useThemeContext();
    return (
        <>
            <Outlet/>
            <Wrapper_2>
                <Wrapper_1 $theme={theme}>
                    {(id >= 0) && <AudioPlayer/>}
                </Wrapper_1>
            </Wrapper_2>

        </>
    )
}
