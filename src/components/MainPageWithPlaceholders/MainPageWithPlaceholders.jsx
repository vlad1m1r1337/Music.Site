import * as S from "../../App.styles";
import NavMenu from "../NavMenu/NavMenu";
import SideBar from "../SideBar/SideBar";
import SearchCenter from "../SearchCenter/SearchCenter";
import RangeTracks from "../RangeTracks/RangeTracks";
import * as SS from "../TrackList/TrackList.styles";
import CenterBlockContentWithPlaceholders from "../CenterBlockContentWithPlaceholders/CenterBlockContentWithPlaceholders";
import {useThemeContext} from "../../contexts/color_theme";

export default function MainPageWithPlaceholders() {
    const {theme} = useThemeContext();

    return (
        <S.Wrapper>
            <S.Container $theme={theme}>
                <S.Main>
                    <NavMenu/>
                    <SS.MainCenterBlock>
                        <SearchCenter/>
                        <RangeTracks />
                        <CenterBlockContentWithPlaceholders amount={29}/>
                    </SS.MainCenterBlock>
                    <SideBar/>
                </S.Main>
            </S.Container>
        </S.Wrapper>
    )
}