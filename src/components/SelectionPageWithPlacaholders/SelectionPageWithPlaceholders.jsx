import * as S from "../../App.styles";
import NavMenu from "../NavMenu/NavMenu";
import * as SS from "../TrackList/TrackList.styles";
import SearchCenter from "../SearchCenter/SearchCenter";
import SideBarAuth from "../SideBarAuth/SideBarAuth";
import styled from "styled-components";
import CenterBlockContentWithPlaceholders
    from "../CenterBlockContentWithPlaceholders/CenterBlockContentWithPlaceholders";
import {useThemeContext} from "../../contexts/color_theme";

const StyledH = styled.h1`
  width: 706px;
  height: 72px;
  font-size: 60px;
  font-weight: 400;
  line-height: 64px;
  margin-bottom: 37px;
`
export default function SelectionPageWithPlaceholders({header}) {
    const {theme} = useThemeContext();
    return (
        <S.Wrapper>
            <S.Container $theme={theme}>
                <S.Main>
                    <NavMenu/>
                    <SS.MainCenterBlock>
                        <SearchCenter/>
                        <StyledH>{header}</StyledH>
                        <CenterBlockContentWithPlaceholders amount={10}/>
                    </SS.MainCenterBlock>
                    <SideBarAuth/>
                </S.Main>
            </S.Container>
        </S.Wrapper>
    )
}