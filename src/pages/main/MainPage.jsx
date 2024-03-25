import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import {useEffect, useState} from "react";
import MainPageWithPlaceholders from "../../components/MainPageWithPlaceholders/MainPageWithPlaceholders";
import { useThemeContext } from "../../contexts/color_theme";
import {useSelector} from "react-redux";
import {getFavorite, set_amount_id_tracks, set_def_shuffle_arr} from "../../store/idSlice";
import {useDispatch} from "react-redux";
import {fetchMainTracks, setIsLoading} from "../../store/idSlice"
import {set_rerender} from "../../store/rerender";
import {useEffects} from "./useEffects";

export const  MainPage = () => {
    const {theme} = useThemeContext();
    let isLoading = useSelector(state => state.main.loading);

    useEffects(isLoading);

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
