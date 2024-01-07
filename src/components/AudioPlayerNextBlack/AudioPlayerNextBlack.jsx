import * as SAudio from "../AudioPlayer/AudioPlayer.styles";

export function AudioPlayerNextBlack({nextTrack}) {
    return (
        <SAudio.PlayerBtnNext onClick={nextTrack}>
            <SAudio.PlayerBtnNextSvg alt="next">
                <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
            </SAudio.PlayerBtnNextSvg>
        </SAudio.PlayerBtnNext>
    )
}