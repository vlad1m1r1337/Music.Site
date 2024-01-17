import * as S from "../SideBar/SideBar.styles";
import {set_allow} from "../../store/authSlice";
import {useDispatch} from "react-redux";

export function SideBarIconBlack() {
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(set_allow({allowed: false}));
    }
    return (
        <S.SideBarIcon>
            <svg onClick={signOut} alt="logout">
                <use xlinkHref="/img/icon/sprite.svg#logout"></use>
            </svg>
        </S.SideBarIcon>
    )
}
