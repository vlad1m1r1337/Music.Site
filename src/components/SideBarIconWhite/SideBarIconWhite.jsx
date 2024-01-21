import * as S from "../SideBar/SideBar.styles";
import {useDispatch} from "react-redux";
import {set_allow} from "../../store/idSlice";

export function SideBarIconWhite() {
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(set_allow({allowed: false}));
    }
    return (
        <S.SideBarIconWhite>
            <svg onClick={signOut} alt="logout">
                <use xlinkHref="/img/icon/sprite.svg#logout-white"></use>
            </svg>
        </S.SideBarIconWhite>
    )
}