import * as SAudio from "../AudioPlayer/AudioPlayer.styles";

export function AudioPlayerNextWhite({nextTrack}) {
    return (
        <SAudio.PlayerBtnNext onClick={nextTrack}>
            <SAudio.PlayerBtnNextSvg alt="next">
                <use xlinkHref="/img/icon/sprite.svg#icon-next-white"></use>
            </SAudio.PlayerBtnNextSvg>
        </SAudio.PlayerBtnNext>
    )
}
