import * as S from "../../App.styles";
import {MainCenterBlock} from "../../components/TrackList/TrackList.styles";
import {SidebarPersonal, SidebarPersonalName, SideBarIcon, MainSidebar} from "../../components/SideBar/SideBar.styles"
import NavMenu from "../../components/NavMenu/NavMenu";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import SearchCenter from "../../components/SearchCenter/SearchCenter";
import styled from "styled-components";


const StyledErrorNumber = styled.div`
  margin-top: 282px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Styled = styled.div`

`

const StyledParagraphNotFound = styled.p`
  font-size: 32px;
  font-weight: 400;
`


const StyledPageNotFound = styled.div`
  margin: 3px 0 19px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Styled404 = styled.p`
  width: 255px;
  height: 168px;
  font-weight: 400;
  font-size: 160px;
`

const StyledParagraph = styled.p`
  margin-bottom: 36px;
  color:#4E4E4E;
`

const StyledButton = styled.button`
    width: 278px;
    height: 52px;
    border-radius: 6px;
    color: white;
    background-color: #580EA2;
    border: none;
    transition: 0.2s;
    &: hover {
      background-color: #3F007D;
    }
    &: active {
      background-color: #271A58;
    }
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
                    <StyledErrorNumber>
                        <Styled404>404</Styled404>
                        <StyledPageNotFound>
                            <StyledParagraphNotFound>Страница не найдена</StyledParagraphNotFound>
                            <img src="/img/crying.png"/>
                        </StyledPageNotFound>
                        <StyledParagraph>Возможно, она была удалена или перенесена на другой адрес</StyledParagraph>
                        <StyledButton>Вернуться на главную</StyledButton>
                    </StyledErrorNumber>
                    <AudioPlayer />
                </S.Container>
            </S.Wrapper>
        </>
    )
}