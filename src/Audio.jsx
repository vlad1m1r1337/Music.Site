import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import {Outlet} from "react-router-dom";
import * as S from "./App.styles";
import NavMenu from "./components/NavMenu/NavMenu";
import TrackList from "./components/TrackList/TrackList";
import SideBar from "./components/SideBar/SideBar";
import {useSelector} from "react-redux";
import {useThemeContext} from "./contexts/color_theme";

export const Audio = () => {
    const id = useSelector(state => state.main.id);
    const {theme} = useThemeContext();

    return (
        <>
            <Outlet/>
            <div style={{
                width: "1920px",
                margin: "0 auto",
                minHeight: "100%",
                backgroundColor: "#383838",
            }}>

                <div style={{
                    margin: "0 auto",
                    position: "relative",
                    backgroundColor: "${prop => prop.$theme.background}",
                }}>

                    {(id >= 0) && <AudioPlayer/>}
                </div>
            </div>

        </>
    )
}
