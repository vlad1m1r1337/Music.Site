import * as S from '../SideBar/SideBar.styles'
import {useThemeContext} from "../../contexts/color_theme";
import {SideBarIconBlack} from "../SideBarIconBlack/SideBarIconBlack";
import {SideBarIconWhite} from "../SideBarIconWhite/SideBarIconWhite";

export default function SideBarAuth({setAllowed}) {
    const signOut = () => {
        localStorage.removeItem('user');
        setAllowed(false);
    }
    const {theme} = useThemeContext();
    return (
        <S.MainSidebar>
            <S.SidebarPersonal>
                {/*<S.SideBarIcon>*/}
                {/*    <svg onClick={signOut} alt="logout">*/}
                {/*        <use xlinkHref="/img/icon/sprite.svg#logout"></use>*/}
                {/*    </svg>*/}
                {/*</S.SideBarIcon>*/}
                {theme.theme === "black" ? <SideBarIconBlack setAllowed={setAllowed}/> : <SideBarIconWhite setAllowed={setAllowed}/>}
            </S.SidebarPersonal>
        </S.MainSidebar>
    );
}
