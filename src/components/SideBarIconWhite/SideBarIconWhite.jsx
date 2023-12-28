import * as S from "../SideBar/SideBar.styles";

export function SideBarIconWhite({setAllowed}) {
    const signOut = () => {
        localStorage.removeItem('user');
        setAllowed(false);
    }
    return (
        <S.SideBarIconWhite>
            <svg onClick={signOut} alt="logout">
                <use xlinkHref="/img/icon/sprite.svg#logout-white"></use>
            </svg>
        </S.SideBarIconWhite>
    )
}