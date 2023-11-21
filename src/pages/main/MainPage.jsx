import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

export const  MainPage = ({isAllowed, setAllowed}) => {
    return (
        <>
                <S.Wrapper>
                    <S.Container>
                        <S.Main>
                            <NavMenu/>
                            <TrackList/>
                            <SideBar isAllowed={isAllowed} setAllowed={setAllowed}/>
                        </S.Main>
                        <AudioPlayer />
                    </S.Container>
                </S.Wrapper>
        </>
    )
}