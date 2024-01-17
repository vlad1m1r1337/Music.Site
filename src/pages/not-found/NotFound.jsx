import * as S from "../../App.styles";
import {MainCenterBlock} from "../../components/TrackList/TrackList.styles";
import {SidebarPersonal, MainSidebar} from "../../components/SideBar/SideBar.styles"
import NavMenu from "../../components/NavMenu/NavMenu";
import SearchCenter from "../../components/SearchCenter/SearchCenter";
import {useNavigate} from "react-router-dom";
import * as NFS from "./NotFound.styles";
import {useThemeContext} from "../../contexts/color_theme";
import {SideBarIconBlack} from "../../components/SideBarIconBlack/SideBarIconBlack";
import {SideBarIconWhite} from "../../components/SideBarIconWhite/SideBarIconWhite";

export const  NotFound = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    };
    const {theme} = useThemeContext();
    return (
        <>
            <S.Wrapper>
                <S.Container $theme={theme}>
                    <S.Main>
                        <NavMenu/>
                        <MainCenterBlock>
                            <SearchCenter/>
                        </MainCenterBlock>
                        <MainSidebar>
                            <SidebarPersonal>
                                {theme.theme === "black" ? <SideBarIconBlack/> : <SideBarIconWhite/>}
                            </SidebarPersonal>
                        </MainSidebar>
                    </S.Main>
                    <NFS.ErrorNumber>
                        <NFS.FourZeroFour>404</NFS.FourZeroFour>
                        <NFS.PageNotFound>
                            <NFS.ParagraphNotFound>Страница не найдена</NFS.ParagraphNotFound>
                            <img src="/img/crying.png" alt="crying png"/>
                        </NFS.PageNotFound>
                        <NFS.Paragraph>Возможно, она была удалена или перенесена на другой адрес</NFS.Paragraph>
                        <NFS.Button onClick={handleButtonClick}>Вернуться на главную</NFS.Button>
                    </NFS.ErrorNumber>
                </S.Container>
            </S.Wrapper>
        </>
    )
}