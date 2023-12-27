import * as SAudio from "../AudioPlayer/AudioPlayer.styles";

export function AudioPlayerNextBlack({NotImplemented}) {
    return (
        <SAudio.PlayerBtnNext onClick={NotImplemented}>
            <SAudio.PlayerBtnNextSvg alt="next">
                <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
            </SAudio.PlayerBtnNextSvg>
        </SAudio.PlayerBtnNext>
    )
}