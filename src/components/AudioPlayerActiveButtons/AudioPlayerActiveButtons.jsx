import {AudioPlayerButtonPrev} from "../AudioPlayerButtonPrev/AudioPlayerButtonPrev";
import AudioPlayerPlayButton from "../AudioPlayerPlayButton/AudioPlayerPlayButton";
import {AudioPlayerNextBlack} from "../AudioPlayerNextBlack/AudioPlayerNextBlack";
import {AudioPlayerButtonRepeatBlack} from "../AudioPlayerButtonRepeatBlack/AudioPlayerButtonRepeatBlack";
import {AudioPlayerBtnShuffle} from "../AudioPlayerBtnShuffle/AudioPlayerBtnShuffle";
import {AudioPlayerButtonPrevWhite} from "../AudioPlayerButtonPrevWhite/AudioPlayerButtonPrevWhite";
import {AudioPlayerPlayButtonWhite} from "../AudioPlayerPlayButtonWhite/AudioPlayerPlayButtonWhite";
import {AudioPlayerNextWhite} from "../AudioPlayerNextWhite/AudioPlayerNextWhite";
import {AudioPlayerButtonRepeatWhite} from "../AudioPlayerButtonRepeatWhite/AudioPlayerButtonRepeatWhite";
import styled from "styled-components";
import {useThemeContext} from "../../contexts/color_theme";
import {useDispatch} from "react-redux";
import {increment} from "../../store";
import {decrement} from "../../store";
import {shuffle_handler} from "../../store";
import {useState} from "react";

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

export const AudioPlayerActiveButtons = ({audioRef}) => {
    const [repeat, setRepeat] = useState(true);

    const {theme} = useThemeContext();

    const [shuffle, setShuffle] = useState(false)

    const dispatch = useDispatch();

    const nextTrack = () => {
        if (shuffle) {
            dispatch(shuffle_handler())
        }
        else {
            dispatch(increment())
        }
        // shuffle ? dispatch(shuffle_handler()) : dispatch(increment());
    }
    const prevTrack = () => {
        if (shuffle) {
            console.log("some_prev")
            dispatch(shuffle_handler())
        }
        else {
            dispatch(decrement())
        }
    }
    function cycleExec() {
        setRepeat(!repeat);
        repeat ? audioRef.current.loop=true : audioRef.current.loop=false;
    }
    return (
        <PlayerControls>
            {theme.theme === "black" ? (
                <>
                    <AudioPlayerButtonPrev prevTrack={prevTrack}/>
                    <AudioPlayerPlayButton audioRef={audioRef}/>
                    <AudioPlayerNextBlack nextTrack={nextTrack}/>
                    <AudioPlayerButtonRepeatBlack repeat={repeat} cycleExec={cycleExec}/>
                    <AudioPlayerBtnShuffle $theme={theme} setShuffle={setShuffle} shuffle={shuffle}/>

                </>
            ) : (
                <>
                    <AudioPlayerButtonPrevWhite prevTrack={prevTrack}/>
                    <AudioPlayerPlayButtonWhite audioRef={audioRef}/>
                    <AudioPlayerNextWhite nextTrack={nextTrack}/>
                    <AudioPlayerButtonRepeatWhite repeat={repeat} cycleExec={cycleExec}/>
                    <AudioPlayerBtnShuffle $theme={theme} setShuffle={setShuffle} shuffle={shuffle}/>
                </>
            )}
        </PlayerControls>
    )
}