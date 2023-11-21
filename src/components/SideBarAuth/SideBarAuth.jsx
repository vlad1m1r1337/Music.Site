import * as S from '../SideBar/SideBar.styles'

export default function SideBarAuth({setAllowed}) {
    const signOut = () => {
        localStorage.removeItem('user');
        setAllowed(false);
    }

    return (
        <S.MainSidebar>
            <S.SidebarPersonal>
                <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
                <S.SideBarIcon>
                    <svg onClick={signOut} alt="logout">
                        <use xlinkHref="/img/icon/sprite.svg#logout"></use>
                    </svg>
                </S.SideBarIcon>
            </S.SidebarPersonal>
        </S.MainSidebar>
    );
}
