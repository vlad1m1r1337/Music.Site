import * as SAudio from "../AudioPlayer/AudioPlayer.styles";

export function AudioPlayerNextWhite({NotImplemented}) {
    return (
        <SAudio.PlayerBtnNext onClick={NotImplemented}>
            <SAudio.PlayerBtnNextSvg alt="next">
                <use xlinkHref="/img/icon/sprite.svg#icon-next-white"></use>
            </SAudio.PlayerBtnNextSvg>
        </SAudio.PlayerBtnNext>
    )
}
