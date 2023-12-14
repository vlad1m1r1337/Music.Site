import {useEffect, useState} from "react";
import * as S from "./AudioPlayerProgressBar.styles";
export default function AudioPlayerProgressBar({audioRef, dur, currentTime, setCurrentTime}) {
    const handleTimeChange = (event) => {
        const newTime = parseFloat(event.target.value);
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
    };

    useEffect(() => {
        currentTime = audioRef.currentTime;
    }, [audioRef]);

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
    }, []);

    return (
        <S.ProgressInput
            type="range"
            value={currentTime}
            step={0.01}
            min={0}
            max={!isNaN(dur) ? dur : 100}
            onChange={handleTimeChange}
            $color="#B672FF"
        />
    );
}
