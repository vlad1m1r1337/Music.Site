import * as S from '../SideBar/SideBar.styles'
import {useThemeContext} from "../../contexts/color_theme";
import {SideBarIconBlack} from "../SideBarIconBlack/SideBarIconBlack";
import {SideBarIconWhite} from "../SideBarIconWhite/SideBarIconWhite";
import {useSelector} from "react-redux";

export default function SideBarAuth() {
    const {theme} = useThemeContext();
    const login = useSelector(state => state.main.login);
    return (
        <S.MainSidebar>
            <S.SidebarPersonal>
                <S.SidebarPersonalName $theme={theme}>{login}</S.SidebarPersonalName>
                {theme.theme === "black" ? <SideBarIconBlack/> : <SideBarIconWhite/>}
            </S.SidebarPersonal>
        </S.MainSidebar>
    );
}
