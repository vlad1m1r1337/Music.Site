import * as SAudio from "../AudioPlayer/AudioPlayer.styles";
import {useThemeContext} from "../../contexts/color_theme";

export function AudioPlayerButtonRepeatWhite({repeat, cycleExec}) {
    const {theme} = useThemeContext();
    return (
        <SAudio.PlayerBtnRepeat $theme={theme} $repeatBool={repeat} onClick={cycleExec}>
            <SAudio.PlayerBtnRepeatSvgWhite $theme={theme} $repeat={Boolean(repeat)} alt="repeat">
                <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
            </SAudio.PlayerBtnRepeatSvgWhite>
        </SAudio.PlayerBtnRepeat>
    )
}