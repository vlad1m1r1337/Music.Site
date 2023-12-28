import {useEffect, useRef, useState} from 'react';
import * as SAudio from './AudioPlayer.styles'
import AudioPlayerProgressBar from "../AudioPlayerProgressBar/AudioPlayerProgressBar";
import AudioPlayerInfo from "../AudioPlayerInfo/AudioPlayerInfo";
import AudioPlayerPlayButton from "../AudioPlayerPlayButton/AudioPlayerPlayButton";
import AudioPlayerBarVolumeBlock from "../AudioPlayerBarVolumeBlock/AudioPlayerBarVolumeBlock";
import {useThemeContext} from "../../contexts/color_theme";
import {AudioPlayerButtonPrev} from "../AudioPlayerButtonPrev/AudioPlayerButtonPrev";
import {AudioPlayerButtonPrevWhite} from "../AudioPlayerButtonPrevWhite/AudioPlayerButtonPrevWhite";
import {AudioPlayerPlayButtonWhite} from "../AudioPlayerPlayButtonWhite/AudioPlayerPlayButtonWhite";
import {AudioPlayerNextBlack} from "../AudioPlayerNextBlack/AudioPlayerNextBlack";
import {AudioPlayerNextWhite} from "../AudioPlayerNextWhite/AudioPlayerNextWhite";
import {AudioPlayerButtonRepeatBlack} from "../AudioPlayerButtonRepeatBlack/AudioPlayerButtonRepeatBlack";
import {AudioPlayerButtonRepeatWhite} from "../AudioPlayerButtonRepeatWhite/AudioPlayerButtonRepeatWhite";
import {AudioPlayerBtnShuffle} from "../AudioPlayerBtnShuffle/AudioPlayerBtnShuffle";


export default function AudioPlayer({tracks}) {
	const audioRef = useRef(null);
	let name;
	let author;
	let sound;

	useEffect(() => {
		audioRef.current.load();
	}, [tracks])

	if (tracks !== undefined) {
		name = tracks.name;
		author = tracks.author;
		sound = tracks.track_file;
	}
	else {
		name = "name";
		author = "author";
	}

	const [repeat, setRepeat] = useState(true);
	function cycleExec() {
		setRepeat(!repeat);
		repeat ? audioRef.current.loop=true : audioRef.current.loop=false;
	}

	const [volume, setVolume] = useState(50);
	useEffect(() => {
		audioRef.current.volume = volume / 100;
	}, [volume]);

	function toMin(dur) {
		const seconds = (parseInt(dur % 60) < 10 ? "0" + parseInt(dur % 60) : parseInt(dur % 60));
		return Math.floor(parseInt(dur / 60)) + ':' + seconds;
	}

	let [currentTime, setCurrentTime] = useState(0);

	function NotImplemented() {
		alert("not implemented");
	}

	const [loadMetaData, setLoadMetaData] = useState(false);

	useEffect(() => {
		audioRef.current.onloadedmetadata = () => {
			setLoadMetaData(true);
		};
	}, []);

	const {theme} = useThemeContext();
	return (
		<>
			<SAudio.Bar $theme={theme}>
				<audio id="audioId" autoPlay ref={audioRef}>
					<source src={sound} type="audio/mpeg" />
				</audio>
				<SAudio.Container>
					{loadMetaData && !isNaN(audioRef.current.duration) && <SAudio.Time>{`${toMin(Number(currentTime))} / ${toMin(Number(audioRef.current.duration))}`}</SAudio.Time>}
					<SAudio.BarContent>
						{loadMetaData && <AudioPlayerProgressBar
							audioRef={audioRef}
							dur={Number(audioRef.current.duration)}
							currentTime={currentTime}
							setCurrentTime={setCurrentTime}
						></AudioPlayerProgressBar>}
						<SAudio.BarPlayerBlock>
							<SAudio.BarPlayer>
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
											)}
								</SAudio.PlayerControls>
								<SAudio.PlayerTrackPlay>
									<SAudio.TrackPlayContain>
										<AudioPlayerInfo name={name} author={author}/>
									</SAudio.TrackPlayContain>
									<SAudio.TrackPlayLikeDis>
										<SAudio.TrackPlayLike $theme={theme}>
											<SAudio.TrackPlayLikeSvg $theme={theme} className="track-play__like-svg" alt="like">
												<use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
											</SAudio.TrackPlayLikeSvg>
										</SAudio.TrackPlayLike>
										<SAudio.TrackPlayDislike $theme={theme}>
											<SAudio.TrackPlayDislikeSvg $theme={theme} className="track-play__dislike-svg" alt="dislike">
												<use
													xlinkHref="/img/icon/sprite.svg#icon-dislike"
												></use>
											</SAudio.TrackPlayDislikeSvg>
										</SAudio.TrackPlayDislike>
									</SAudio.TrackPlayLikeDis>
								</SAudio.PlayerTrackPlay>
							</SAudio.BarPlayer>
							<AudioPlayerBarVolumeBlock volume={volume} setVolume={setVolume}/>
						</SAudio.BarPlayerBlock>
					</SAudio.BarContent>
				</SAudio.Container>
			</SAudio.Bar>
		</>
	);
  }
