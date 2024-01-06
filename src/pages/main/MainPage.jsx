import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import {useEffect, useState} from "react";
import axios from "axios";
import MainPageWithPlaceholders from "../../components/MainPageWithPlaceholders/MainPageWithPlaceholders";
import { useThemeContext } from "../../contexts/color_theme";
import {useSelector} from "react-redux";
import {set_def, set_amount_id_tracks} from "../../store";
import {useDispatch} from "react-redux";
import {fetchMainData} from "../../fetchData/fetchMainData";

export const  MainPage = ({setAllowed}) => {
    const dispatch = useDispatch();

    const [tracks, setTracks] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(set_def());
    }, [dispatch]);

    const idTracksCounter = (tracks) => {
        let id = -1;
        tracks.forEach(tracks => id++);
        return id;
    }

    useEffect(() => {
        fetchMainData(setIsLoading, setTracks)
    }, []);

    const {theme} = useThemeContext();

    const id = useSelector(state => state.value);

    if (isLoading) {
       return (
           <MainPageWithPlaceholders setAllowed={setAllowed}/>
       )
    }
    console.log(idTracksCounter(tracks));
    console.log(tracks)
    return (
        <>
                <S.Wrapper>
                    <S.Container $theme={theme}>
                        <S.Main>
                            <NavMenu setAllowed={setAllowed}/>
                            {tracks && <TrackList tracks={tracks}/>}
                            <SideBar setAllowed={setAllowed}/>
                        </S.Main>
                        {tracks && (id >= 0) && <AudioPlayer tracks={tracks[id]}/>}
                    </S.Container>
                </S.Wrapper>
        </>
    )
}
