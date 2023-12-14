import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import {useEffect, useState} from "react";
import axios from "axios";

export const  MainPage = ({setAllowed}) => {
    const [id, setId] = useState(-1);

    const [tracks, setTracks] = useState(null);

    const apiURL = "https://skypro-music-api.skyeng.tech/catalog/track/all/";

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
            .catch(() => console.error("error"));
    }, []);

    return (
        <>
                <S.Wrapper>
                    <S.Container>
                        <S.Main>
                            <NavMenu setAllowed={setAllowed}/>
                            {tracks && <TrackList tracks={tracks} setId={setId} id={id}/>}
                            <SideBar setAllowed={setAllowed}/>
                        </S.Main>
                        {tracks && (id >= 0) && <AudioPlayer tracks={tracks[id]}/>}
                    </S.Container>
                </S.Wrapper>
        </>
    )
}
