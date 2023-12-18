import * as S from "../../App.styles";
import NavMenu from "../NavMenu/NavMenu";
import * as SS from "../TrackList/TrackList.styles";
import SearchCenter from "../SearchCenter/SearchCenter";
import CenterBlockContent from "../CenterBlockContent/CenterBlockContent";
import SideBarAuth from "../SideBarAuth/SideBarAuth";
import styled from "styled-components";
import CenterBlockContentWithPlaceholders
    from "../CenterBlockContentWithPlaceholders/CenterBlockContentWithPlaceholders";

const StyledH = styled.h1`
  width: 706px;
  height: 72px;
  font-size: 60px;
  font-weight: 400;
  line-height: 64px;
  margin-bottom: 37px;
`
export default function SelectionPageWithPlaceholders({header, setAllowed}) {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <NavMenu setAllowed={setAllowed}/>
                    <SS.MainCenterBlock>
                        <SearchCenter/>
                        <StyledH>{header}</StyledH>
                        <CenterBlockContentWithPlaceholders amount={10}/>
                    </SS.MainCenterBlock>
                    <SideBarAuth setAllowed={setAllowed}/>
                </S.Main>
            </S.Container>
        </S.Wrapper>
    )
}