import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import {useEffect} from "react";
import MainPageWithPlaceholders from "../../components/MainPageWithPlaceholders/MainPageWithPlaceholders";
import { useThemeContext } from "../../contexts/color_theme";
import {useSelector} from "react-redux";
import {set_amount_id_tracks, set_def_shuffle_arr} from "../../store/idSlice";
import {useDispatch} from "react-redux";
import {fetchMainTracks, setIsLoading} from "../../store/authSlice";

export const  MainPage = () => {
    const {theme} = useThemeContext();
    const dispatch = useDispatch();
    let isLoading = useSelector(state => state.auth.loading);
    const tracks = useSelector(state => state.auth.tracks);

    useEffect(() => {
        dispatch(setIsLoading({loading: true}));
    }, [dispatch]);

    const id = useSelector(state => state.ids.id);

    useEffect(() => {
        dispatch(fetchMainTracks());
    }, [dispatch]);

    isLoading = useSelector(state => state.auth.loading);
    useEffect(() => {
        if (!isLoading) {
            dispatch(set_amount_id_tracks({tracks: tracks}));
            dispatch(set_def_shuffle_arr());
        }
    }, [isLoading, dispatch, tracks]);

    if (isLoading) {
       return (
           <MainPageWithPlaceholders/>
       )
    }
    console.log("id", id, "tracks", tracks);
    return (
        <>
            <S.Wrapper>
                <S.Container $theme={theme}>
                    <S.Main>
                        <NavMenu/>
                        <TrackList tracks={tracks}/>
                        <SideBar/>
                    </S.Main>
                    {tracks && (id >= 0) && <AudioPlayer tracks={tracks[id]}/>}
                </S.Container>
            </S.Wrapper>
        </>
    )
}
