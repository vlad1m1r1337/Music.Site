import * as SAudio from "../AudioPlayer/AudioPlayer.styles";
import useAudioControls from "../../utils/useAudioControls";

export default function AudioPlayerPlayButton({audioRef}) {

    const { isPlaying, togglePlay } = useAudioControls({ audioRef });

    return (
        <>
            {isPlaying ?
                <SAudio.PlayerBtnPlay onClick={togglePlay}>
                    <SAudio.PlayerBtnPlayImg src="/img/icon/stop.svg" alt="stop_play">
                    </SAudio.PlayerBtnPlayImg>
                </SAudio.PlayerBtnPlay> :
                <SAudio.PlayerBtnPlay onClick={togglePlay}>
                    <SAudio.PlayerBtnPlaySvg alt="play">
                        <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                    </SAudio.PlayerBtnPlaySvg>
                </SAudio.PlayerBtnPlay>
            }
        </>
    )
}