import * as SAudio from "../AudioPlayer/AudioPlayer.styles";
import {useState} from "react";

export default function AudioPlayerPlayButton({audioRef}) {
    const [isPlaying, setIsPlaying] = useState(true);
    const handleStart = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };
    const handleStop = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const togglePlay = isPlaying ? handleStop : handleStart;

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