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

    const {theme} = useThemeContext();

    const id = useSelector(state => state.value);

    useEffect(() => {
        dispatch(set_def());
    }, [dispatch]);

    useEffect(() => {
        fetchMainData(setIsLoading, setTracks)
    }, []);

    useEffect(() => {
        if (!isLoading) {
            dispatch(set_amount_id_tracks({tracks: tracks}));
        }
    }, [isLoading]);

    if (isLoading) {
       return (
           <MainPageWithPlaceholders setAllowed={setAllowed}/>
       )
    }
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
