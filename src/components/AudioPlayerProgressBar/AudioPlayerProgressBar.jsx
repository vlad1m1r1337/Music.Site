import {useEffect} from "react";
import * as S from "./AudioPlayerProgressBar.styles";
import {useThemeContext} from "../../contexts/color_theme";
export default function AudioPlayerProgressBar({audioRef, dur, currentTime, setCurrentTime}) {
    const handleTimeChange = (event) => {
        const newTime = parseFloat(event.target.value);
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
    };

    useEffect(() => {
        setCurrentTime(audioRef.currentTime);
    }, [audioRef,setCurrentTime]);

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, );

    const {theme} = useThemeContext();

    return (
        <S.ProgressInput $theme={theme}
            type="range"
            value={currentTime || 0}
            step={0.01}
            min={0}
            max={!isNaN(dur) ? dur : 100}
            onChange={handleTimeChange}
            $color="#B672FF"
        />
    );
}
