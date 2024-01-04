import {AudioPlayerButtonPrev} from "../AudioPlayerButtonPrev/AudioPlayerButtonPrev";
import AudioPlayerPlayButton from "../AudioPlayerPlayButton/AudioPlayerPlayButton";
import {AudioPlayerNextBlack} from "../AudioPlayerNextBlack/AudioPlayerNextBlack";
import {AudioPlayerButtonRepeatBlack} from "../AudioPlayerButtonRepeatBlack/AudioPlayerButtonRepeatBlack";
import {AudioPlayerBtnShuffle} from "../AudioPlayerBtnShuffle/AudioPlayerBtnShuffle";
import {AudioPlayerButtonPrevWhite} from "../AudioPlayerButtonPrevWhite/AudioPlayerButtonPrevWhite";
import {AudioPlayerPlayButtonWhite} from "../AudioPlayerPlayButtonWhite/AudioPlayerPlayButtonWhite";
import {AudioPlayerNextWhite} from "../AudioPlayerNextWhite/AudioPlayerNextWhite";
import {AudioPlayerButtonRepeatWhite} from "../AudioPlayerButtonRepeatWhite/AudioPlayerButtonRepeatWhite";
import {useThemeContext} from "../../contexts/color_theme";
import * as SAudio from '../AudioPlayer/AudioPlayer.styles'

export const AudioPlayerActionButtons = ({audioRef, repeat, cycleExec}) => {
    const {theme} = useThemeContext();
    function NotImplemented() {
        alert("not implemented");
    }

    return (
        <SAudio.PlayerControls>
            {theme.theme === "black" ? (
                <>
                    <AudioPlayerButtonPrev NotImplemented={NotImplemented}/>
                    <AudioPlayerPlayButton audioRef={audioRef}/>
                    <AudioPlayerNextBlack NotImplemented={NotImplemented}/>
                    <AudioPlayerButtonRepeatBlack repeat={repeat} cycleExec={cycleExec}/>
                    <AudioPlayerBtnShuffle NotImplemented={NotImplemented} $theme={theme}/>

                </>
            ) : (
                <>
                    <AudioPlayerButtonPrevWhite NotImplemented={NotImplemented}/>
                    <AudioPlayerPlayButtonWhite audioRef={audioRef}/>
                    <AudioPlayerNextWhite NotImplemented={NotImplemented}/>
                    <AudioPlayerButtonRepeatWhite repeat={repeat} cycleExec={cycleExec}/>
                    <AudioPlayerBtnShuffle NotImplemented={NotImplemented} $theme={theme}/>
                </>
            )
            }
        </SAudio.PlayerControls>
    )
}