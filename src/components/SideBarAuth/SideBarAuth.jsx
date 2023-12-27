import * as S from '../SideBar/SideBar.styles'
import {useThemeContext} from "../../contexts/color_theme";
import {SideBarIconBlack} from "../SideBarIconBlack/SideBarIconBlack";
import {SideBarIconWhite} from "../SideBarIconWhite/SideBarIconWhite";

export default function SideBarAuth({setAllowed}) {
    const {theme} = useThemeContext();
    return (
        <S.MainSidebar>
            <S.SidebarPersonal>
                {theme.theme === "black" ? <SideBarIconBlack setAllowed={setAllowed}/> : <SideBarIconWhite setAllowed={setAllowed}/>}
            </S.SidebarPersonal>
        </S.MainSidebar>
    );
}
