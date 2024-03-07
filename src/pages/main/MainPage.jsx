import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import {useEffect} from "react";
import MainPageWithPlaceholders from "../../components/MainPageWithPlaceholders/MainPageWithPlaceholders";
import { useThemeContext } from "../../contexts/color_theme";
import {useSelector} from "react-redux";
import {getFavorite, set_amount_id_tracks, set_def_shuffle_arr} from "../../store/idSlice";
import {useDispatch} from "react-redux";
import {fetchMainTracks, setIsLoading} from "../../store/idSlice"

export const  MainPage = () => {
    const {theme} = useThemeContext();
    const dispatch = useDispatch();
    let isLoading = useSelector(state => state.main.loading);
    const tracks = useSelector(state => state.main.tracks);
    const amount_id_tracks = useSelector(state => state.main.amount_id_tracks);
    const accessToken = useSelector(state => state.main.access);
    const id = useSelector(state => state.main.id);
    const loading = useSelector(state => state.main.loading);

    useEffect(() => {
        console.log("update")
        dispatch(fetchMainTracks());
        dispatch(getFavorite({accessToken}));
    }, [dispatch, accessToken]);

    useEffect(() => {
        if (!isLoading) {
            if (amount_id_tracks !== -1) return ;
            dispatch(set_amount_id_tracks({tracks: tracks}));
            dispatch(set_def_shuffle_arr());
        }
    }, [isLoading, dispatch, tracks, amount_id_tracks]);

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
                        <TrackList/>
                        <SideBar/>
                    </S.Main>
                </S.Container>
            </S.Wrapper>
        </>
    )
}
