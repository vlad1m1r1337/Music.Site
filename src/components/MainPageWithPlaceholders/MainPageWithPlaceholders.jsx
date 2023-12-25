import * as S from "../../App.styles";
import NavMenu from "../NavMenu/NavMenu";
import SideBar from "../SideBar/SideBar";
import SearchCenter from "../SearchCenter/SearchCenter";
import RangeTracks from "../RangeTracks/RangeTracks";
import * as SS from "../TrackList/TrackList.styles";
import CenterBlockContentWithPlaceholders from "../CenterBlockContentWithPlaceholders/CenterBlockContentWithPlaceholders";
import {useThemeContext} from "../../contexts/color_theme";

export default function MainPageWithPlaceholders({setAllowed}) {
    const {theme} = useThemeContext();

    return (
        <S.Wrapper>
            <S.Container $back={theme}>
                <S.Main>
                    <NavMenu setAllowed={setAllowed}/>
                    <SS.MainCenterBlock>
                        <SearchCenter/>
                        <RangeTracks />
                        <CenterBlockContentWithPlaceholders amount={29}/>
                    </SS.MainCenterBlock>
                    <SideBar setAllowed={setAllowed}/>
                </S.Main>
            </S.Container>
        </S.Wrapper>
    )
}