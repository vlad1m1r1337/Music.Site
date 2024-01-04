import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import {useEffect, useState} from "react";
import axios from "axios";
import MainPageWithPlaceholders from "../../components/MainPageWithPlaceholders/MainPageWithPlaceholders";
import { useThemeContext } from "../../contexts/color_theme";

export const  MainPage = ({setAllowed}) => {
    const [id, setId] = useState(-1);

    const [tracks, setTracks] = useState(null);

    const apiURL = "https://skypro-music-api.skyeng.tech/catalog/track/all/";

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiURL);
                setTracks(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
            .then(() => setIsLoading(false))
    }, []);
    const {theme} = useThemeContext();

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
                            {tracks && <TrackList tracks={tracks} setId={setId}/>}
                            <SideBar setAllowed={setAllowed}/>
                        </S.Main>
                        {tracks && (id >= 0) && <AudioPlayer tracks={tracks[id]}/>}
                    </S.Container>
                </S.Wrapper>
        </>
    )
}
