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

export const AudioPlayerActiveButtons = ({audioRef, NotImplemented, repeat, cycleExec}) => {

    const {theme} = useThemeContext();
    const dispatch = useDispatch();
    const nextTrack = () => {
        dispatch(increment())
    }
    const prevTrack = () => {
        dispatch(decrement())
    }

    return (
        <PlayerControls>
            {theme.theme === "black" ? (
                <>
                    <AudioPlayerButtonPrev NotImplemented={prevTrack}/>
                    <AudioPlayerPlayButton audioRef={audioRef}/>
                    <AudioPlayerNextBlack NotImplemented={nextTrack}/>
                    <AudioPlayerButtonRepeatBlack repeat={repeat} cycleExec={cycleExec}/>
                    <AudioPlayerBtnShuffle NotImplemented={NotImplemented} $theme={theme}/>

                </>
            ) : (
                <>
                    <AudioPlayerButtonPrevWhite NotImplemented={prevTrack}/>
                    <AudioPlayerPlayButtonWhite audioRef={audioRef}/>
                    <AudioPlayerNextWhite NotImplemented={nextTrack}/>
                    <AudioPlayerButtonRepeatWhite repeat={repeat} cycleExec={cycleExec}/>
                    <AudioPlayerBtnShuffle NotImplemented={NotImplemented} $theme={theme}/>
                </>
            )}
        </PlayerControls>
    )
}