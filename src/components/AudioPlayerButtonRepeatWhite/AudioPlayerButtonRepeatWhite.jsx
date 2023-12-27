import * as SAudio from "../AudioPlayer/AudioPlayer.styles";

export function AudioPlayerButtonRepeatWhite({repeat, cycleExec}) {
    return (
        <SAudio.PlayerBtnRepeat $repeatBool={repeat} onClick={cycleExec}>
            <SAudio.PlayerBtnRepeatSvgWhite $repeat={Boolean(repeat)} alt="repeat">
                <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
            </SAudio.PlayerBtnRepeatSvgWhite>
        </SAudio.PlayerBtnRepeat>
    )
}