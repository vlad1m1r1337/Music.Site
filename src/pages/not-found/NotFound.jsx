import * as S from "../../App.styles";
import {MainCenterBlock} from "../../components/TrackList/TrackList.styles";
import {SidebarPersonal, SidebarPersonalName, SideBarIcon, MainSidebar} from "../../components/SideBar/SideBar.styles"
import NavMenu from "../../components/NavMenu/NavMenu";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import SearchCenter from "../../components/SearchCenter/SearchCenter";
import styled from "styled-components";


const StyledErrorNumber = styled.div`
display: flex;
justify-content: space-around;
font-size: 160px;
font-weight: 400;
line-height: 168px;
letter-spacing: 0px;
text-align: left;



`
export const  NotFound = () => {
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
                    {/*<StyledErrorNumber>*/}
                    {/*    <p>404</p>*/}
                    {/*    <div>*/}
                    {/*        <p>Страница не найдена</p>*/}
                    {/*        <img src="/img/crying.png"/>*/}
                    {/*    </div>*/}
                    {/*    <p>Возможно, она была удалена или перенесена на другой адрес</p>*/}
                    {/*    <button>Вернуться на главную</button>*/}
                    {/*</StyledErrorNumber>*/}
                    <AudioPlayer />
                </S.Container>
            </S.Wrapper>
        </>
    )
}