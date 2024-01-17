import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import {useEffect, useState} from "react";
import MainPageWithPlaceholders from "../../components/MainPageWithPlaceholders/MainPageWithPlaceholders";
import { useThemeContext } from "../../contexts/color_theme";
import {useSelector} from "react-redux";
import {set_def, set_amount_id_tracks, set_def_shuffle_arr} from "../../store/idSlice";
import {useDispatch} from "react-redux";
import {fetchMainData} from "../../fetchData/fetchMainData";

export const  MainPage = ({setAllowed}) => {
    const dispatch = useDispatch();

    const [tracks, setTracks] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const {theme} = useThemeContext();

    const id = useSelector(state => state.ids.id);

    // const id = useSelector(state => {
    //     console.log(state);
    //     return state.todos.id;
    // });

    useEffect(() => {
        dispatch(set_def());
    }, [dispatch]);

    useEffect(() => {
        fetchMainData(setIsLoading, setTracks)
    }, []);

    useEffect(() => {
        if (!isLoading) {
            dispatch(set_amount_id_tracks({tracks: tracks}));
            dispatch(set_def_shuffle_arr());
        }
    }, [isLoading, dispatch, tracks]);
    // useEffect(() => {
    //     console.log(id);
    // }, []);

    if (isLoading) {
       return (
           <MainPageWithPlaceholders/>
       )
    }
    return (
        <>
                <S.Wrapper>
                    <S.Container $theme={theme}>
                        <S.Main>
                            <NavMenu/>
                            {tracks && <TrackList tracks={tracks}/>}
                            <SideBar/>
                        </S.Main>
                        {tracks && (id >= 0) && <AudioPlayer tracks={tracks[id]}/>}
                    </S.Container>
                </S.Wrapper>
        </>
    )
}
