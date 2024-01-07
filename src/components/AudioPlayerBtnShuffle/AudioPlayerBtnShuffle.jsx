import * as SAudio from "../AudioPlayer/AudioPlayer.styles";
import {useThemeContext} from "../../contexts/color_theme";

export function AudioPlayerBtnShuffle({setShuffle, shuffle}) {
    const {theme} = useThemeContext();

    const activeShuffle = () => {
        setShuffle(!shuffle);
    }
    return (
        <SAudio.PlayerBtnShuffle onClick={activeShuffle} $theme={theme}>
            <SAudio.PlayerBtnShuffleSvg $theme={theme} $shuffle={shuffle} alt="shuffle">
                <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
            </SAudio.PlayerBtnShuffleSvg>
        </SAudio.PlayerBtnShuffle>
    )
}