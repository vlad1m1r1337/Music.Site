import * as S from "../../App.styles";
import NavMenu from "../NavMenu/NavMenu";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import * as SS from "../TrackList/TrackList.styles";
import SearchCenter from "../SearchCenter/SearchCenter";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import SideBarAuth from "../SideBarAuth/SideBarAuth";
import {useEffect, useState} from "react";
import CenterBlockContent from "../CenterBlockContent/CenterBlockContent";
import SelectionPageWithPlaceholders from "../SelectionPageWithPlacaholders/SelectionPageWithPlaceholders";
import {useThemeContext} from "../../contexts/color_theme";
import {useSelector} from "react-redux";
import {set_amount_id_tracks, set_def} from "../../store";
import {useDispatch} from "react-redux";
import {fetchSelectionsData} from "../../fetchData/fetchSelectionsData";

const StyledH = styled.h1`
  width: 706px;
  height: 72px;
  font-size: 60px;
  font-weight: 400;
  line-height: 64px;
  margin-bottom: 37px;
`

export const  SelectionsPage = ({header, setAllowed}) => {
    const dispatch = useDispatch();

    const {theme} = useThemeContext();

    const [tracks, setTracks] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const id = useSelector(state => state.id);


    useEffect(() => {
        dispatch(set_def());
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

    useEffect(() => {
            fetchSelectionsData(setTracks, setIsLoading, params);
    }, [params.id]);


    useEffect(() => {
        if (!isLoading) {
            dispatch(set_amount_id_tracks({tracks: tracks}));
        }
    }, [isLoading]);

    if  (isLoading) {
        return (
          <SelectionPageWithPlaceholders header={header} setAllowed={setAllowed}/>
        )
    }
    return (
            <S.Wrapper>
                <S.Container $theme={theme}>
                    <S.Main>
                        <NavMenu/>
                        <SS.MainCenterBlock>
                            <SearchCenter/>
                            <StyledH>{header}</StyledH>
                            {tracks && <CenterBlockContent tracks={tracks}/>}
                        </SS.MainCenterBlock>
                        <SideBarAuth setAllowed={setAllowed}/>
                    </S.Main>
                    {tracks && (id >= 0) && <AudioPlayer tracks={tracks[id]}/>}
                </S.Container>
            </S.Wrapper>
    )
}
