import * as SAudio from "../AudioPlayer/AudioPlayer.styles";

export function AudioPlayerButtonPrev({prevTrack}) {
    return (
        <SAudio.PlayerBtnPrev onClick={prevTrack}>
            <SAudio.PlayerBtnPrevSvg alt="prev">
                <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
            </SAudio.PlayerBtnPrevSvg>
        </SAudio.PlayerBtnPrev>
    )
}
