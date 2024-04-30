import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import MainPageWithPlaceholders from "../../components/MainPageWithPlaceholders/MainPageWithPlaceholders";
import { useThemeContext } from "../../contexts/color_theme";
import {useSelector} from "react-redux";
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
