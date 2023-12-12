import * as S from "../../App.styles";
import {MainCenterBlock} from "../../components/TrackList/TrackList.styles";
import {SidebarPersonal, SidebarPersonalName, SideBarIcon, MainSidebar} from "../../components/SideBar/SideBar.styles"
import NavMenu from "../../components/NavMenu/NavMenu";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import SearchCenter from "../../components/SearchCenter/SearchCenter";
import {useNavigate} from "react-router-dom";
import * as NFS from "./NotFound.styles";

export const  NotFound = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    };
    return (
        <>
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        <NavMenu/>
                        <MainCenterBlock>
                            <SearchCenter/>
                        </MainCenterBlock>
                        <MainSidebar>
                            <SidebarPersonal>
                                <SidebarPersonalName>Sergey.Ivanov</SidebarPersonalName>
                                <SideBarIcon>
                                    <svg alt="logout">
                                        <use xlinkHref="img/icon/sprite.svg#logout"></use>
                                    </svg>
                                </SideBarIcon>
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