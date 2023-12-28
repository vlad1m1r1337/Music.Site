import * as SAudio from "../AudioPlayer/AudioPlayer.styles";

export function AudioPlayerButtonPrev({NotImplemented}) {
    return (
        <SAudio.PlayerBtnPrev onClick={NotImplemented}>
            <SAudio.PlayerBtnPrevSvg alt="prev">
                <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
            </SAudio.PlayerBtnPrevSvg>
        </SAudio.PlayerBtnPrev>
    )
}
