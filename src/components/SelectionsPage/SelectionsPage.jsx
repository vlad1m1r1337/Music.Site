import * as S from "../../App.styles";
import NavMenu from "../NavMenu/NavMenu";
import * as SS from "../TrackList/TrackList.styles";
import SearchCenter from "../SearchCenter/SearchCenter";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import SideBarAuth from "../SideBarAuth/SideBarAuth";
import {useEffect} from "react";
import CenterBlockContent from "../CenterBlockContent/CenterBlockContent";
import SelectionPageWithPlaceholders from "../SelectionPageWithPlacaholders/SelectionPageWithPlaceholders";
import {useThemeContext} from "../../contexts/color_theme";
import {useSelector} from "react-redux";
import {fetchFavorite, getFavorite, set_amount_id_tracks, set_def_shuffle_arr} from "../../store/idSlice";
import {useDispatch} from "react-redux";
import {fetchSelectionTracks, setIsLoading} from "../../store/idSlice";

const StyledH = styled.h1`
  width: 706px;
  height: 72px;
  font-size: 60px;
  font-weight: 400;
  line-height: 64px;
  margin-bottom: 37px;
`

export const  SelectionsPage = ({header}) => {
    const {theme} = useThemeContext();
    const dispatch = useDispatch();
    let isLoading = useSelector(state => state.main.loading);
    const tracks = useSelector(state => state.main.tracks);
    const amount_id_tracks = useSelector(state => state.main.amount_id_tracks);
    const param = useParams();
    const accessToken = useSelector(state => state.main.access);

    const id = useSelector(state => state.main.id);

    useEffect(() => {
        if (!isLoading) {
            return;
        }
        dispatch(getFavorite({accessToken}));
        if (header !== "Мои треки") {
            dispatch(fetchSelectionTracks({param}));
        }
        else {
            dispatch(fetchFavorite({accessToken}));
        }
    }, [dispatch, accessToken, header, param]);

    useEffect(() => {
        if (!isLoading) {
            if (amount_id_tracks !== -1) return ;
            dispatch(set_amount_id_tracks({tracks: tracks}));
            dispatch(set_def_shuffle_arr());
        }
    }, [isLoading, dispatch, tracks, amount_id_tracks]);

    if  (header === undefined) {
        let Header;
        if (param.id === '1') {
            Header = "Плейлист дня";
        }
        else if(param.id === '2') {
            Header = "100 танцевальных хитов";
        }
        else if(param.id === '3') {
            Header = "Инди заряд";
        }
        header = Header;
    }

    if  (isLoading) {
        return (
          <SelectionPageWithPlaceholders header={header}/>
        )
    }
    return (
            <>
                <S.Wrapper>
                    <S.Container $theme={theme}>
                        <S.Main>
                            <NavMenu/>
                            <SS.MainCenterBlock>
                                <SearchCenter/>
                                <StyledH>{header}</StyledH>
                                <CenterBlockContent tracks={tracks}/>
                            </SS.MainCenterBlock>
                            <SideBarAuth/>
                        </S.Main>
                    </S.Container>
                </S.Wrapper>
            </>
    )
}
