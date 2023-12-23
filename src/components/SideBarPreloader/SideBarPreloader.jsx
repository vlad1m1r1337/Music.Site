import * as S from "../SideBar/SideBar.styles";

export default function SideBarPreloader() {
    return (
        <S.SideBarItem>
            <S.SideBarLink to='/'>
                <S.SideBarImg
                    src="/img/placeholders/big.png"
                    alt="day's playlist"
                />
            </S.SideBarLink>
        </S.SideBarItem>
    )
}