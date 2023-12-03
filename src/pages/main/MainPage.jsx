import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import {useState} from "react";

export const  MainPage = ({setAllowed}) => {
    const [id, setId] = useState(1)

    return (
        <>
                <S.Wrapper>
                    <S.Container>
                        <S.Main>
                            <NavMenu/>
                            <TrackList trackId={id}/>
                            <SideBar setAllowed={setAllowed}/>
                        </S.Main>
                        {id &&  <AudioPlayer id={id}/>}
                    </S.Container>
                </S.Wrapper>
        </>
    )
}