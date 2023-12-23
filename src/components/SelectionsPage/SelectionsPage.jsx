import * as S from "../../App.styles";
import NavMenu from "../NavMenu/NavMenu";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import * as SS from "../TrackList/TrackList.styles";
import SearchCenter from "../SearchCenter/SearchCenter";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import SideBarAuth from "../SideBarAuth/SideBarAuth";
import {useEffect, useState} from "react";
import axios from "axios";
import CenterBlockContent from "../CenterBlockContent/CenterBlockContent";
import SelectionPageWithPlaceholders from "../SelectionPageWithPlacaholders/SelectionPageWithPlaceholders";

const StyledH = styled.h1`
  width: 706px;
  height: 72px;
  font-size: 60px;
  font-weight: 400;
  line-height: 64px;
  margin-bottom: 37px;
`

export const  SelectionsPage = ({header, setAllowed}) => {
    let Header;
    const params = useParams();
    if  (header === undefined) {
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

    const [id, setId] = useState(-1);

    const [tracks, setTracks] = useState(null);

    const apiURL = "https://skypro-music-api.skyeng.tech/catalog/selection/";

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiURL);
                if (params.id) {
                    setTracks((response.data)[params.id - 1].items);
                } else {
                    setTracks((response.data)[0].items);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
            .then(() => {
                setIsLoading(false)
            })
    }, [])
    if  (isLoading) {
        return (
          <SelectionPageWithPlaceholders header={header} setAllowed={setAllowed}/>
        )
    }
    return (
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        <NavMenu/>
                        <SS.MainCenterBlock>
                            <SearchCenter/>
                            <StyledH>{header}</StyledH>
                            {tracks && <CenterBlockContent tracks={tracks} setId={setId} objId={id}/>}
                        </SS.MainCenterBlock>
                        <SideBarAuth setAllowed={setAllowed}/>
                    </S.Main>
                    {tracks && (id >= 0) && <AudioPlayer tracks={tracks[id]}/>}
                </S.Container>
            </S.Wrapper>
    )
}
