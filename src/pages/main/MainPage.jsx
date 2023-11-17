import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

export const  MainPage = () => {
    return (
        <>
                <S.Wrapper>
                    <S.Container>
                        <S.Main>
                            <NavMenu/>
                            <TrackList/>
                            <SideBar/>
                        </S.Main>
                        <AudioPlayer />
                    </S.Container>
                </S.Wrapper>
        </>
    )
}