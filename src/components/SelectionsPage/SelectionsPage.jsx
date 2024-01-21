import * as S from "../../App.styles";
import NavMenu from "../NavMenu/NavMenu";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
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
import {set_amount_id_tracks, set_def_shuffle_arr} from "../../store/idSlice";
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
    const id = useSelector(state => state.main.id);

    useEffect(() => {
        dispatch(setIsLoading({loading: true}));
    }, [dispatch]);

    const params = useParams();
    if  (header === undefined) {
        let Header;
        if (params.id === '1') {
            Header = "Плейлист дня";
        }
        else if(params.id === '2') {
            Header = "100 танцевальных хитов";
        }
        else if(params.id === '3') {
            Header = "Инди заряд";
        }
        header = Header;
    }
    const param = useParams();
    useEffect(() => {
        // console.log("playing track", tracks[id]);
        dispatch(fetchSelectionTracks(param));
    }, [dispatch]);

    useEffect(() => {
        if (!isLoading) {
            dispatch(set_amount_id_tracks({tracks: tracks}));
            dispatch(set_def_shuffle_arr());
        }
    }, [isLoading, dispatch, tracks]);
    console.log("selection tracks", tracks);
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
                        {/*{(id >= 0) && <AudioPlayer/>}*/}
                    </S.Container>
                </S.Wrapper>
            </>
    )
}
