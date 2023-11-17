import * as S from "../../App.styles";
import NavMenu from "../NavMenu/NavMenu";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import * as SS from "../TrackList/TrackList.styles";
import SearchCenter from "../SearchCenter/SearchCenter";
import styled from "styled-components";
import CenterBlockContentCutted from "../CenterBlockContent/CenterBlockContentCutted";
import {useParams} from "react-router-dom";

const StyledH = styled.h1`
  width: 706px;
  height: 72px;
  font-size: 60px;
  font-weight: 400;
  line-height: 64px;
  margin-bottom: 37px;
`

export const  SelectionsPage = ({header}) => {
    const params = useParams();
    let Header;
    if  (!header) {
        if (params.id === '1') {
            Header = 'Плейлист дня';
        }
        else if(params.id === '2') {
            Header = '100 танцевальных хитов';
        }
        else if(params.id === '3') {
            Header = 'Инди заряд';
        }
    }
    else {
        Header = header;
    }
    return (
        <>
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        <NavMenu/>
                        <SS.MainCenterBlock>
                            <SearchCenter/>
                            <StyledH>{Header}</StyledH>
                            <CenterBlockContentCutted/>
                        </SS.MainCenterBlock>
                    </S.Main>
                    <AudioPlayer />
                </S.Container>
            </S.Wrapper>
        </>
    )
}