import * as S from "../SideBar/SideBar.styles";

export function SideBarIconBlack({setAllowed}) {
    const signOut = () => {
        localStorage.removeItem('user');
        setAllowed(false);
    }
    return (
        <S.SideBarIcon>
            <svg onClick={signOut} alt="logout">
                <use xlinkHref="/img/icon/sprite.svg#logout"></use>
            </svg>
        </S.SideBarIcon>
    )
}
