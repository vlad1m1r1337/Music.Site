import * as SAudio from "../AudioPlayer/AudioPlayer.styles";
import {useThemeContext} from "../../contexts/color_theme";

export function AudioPlayerBtnShuffle({NotImplemented}) {
    const {theme} = useThemeContext();

    return (
        <SAudio.PlayerBtnShuffle onClick={NotImplemented} $theme={theme}>
            <SAudio.PlayerBtnShuffleSvg $theme={theme} alt="shuffle">
                <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
            </SAudio.PlayerBtnShuffleSvg>
        </SAudio.PlayerBtnShuffle>
    )
}