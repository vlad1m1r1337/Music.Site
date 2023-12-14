import {useEffect, useRef, useState} from 'react';
import * as SAudio from './AudioPlayer.styles'
import AudioPlayerProgressBar from "../AudioPlayerProgressBar/AudioPlayerProgressBar";
import AudioPlayerInfo from "../AudioPlayerInfo/AudioPlayerInfo";
import AudioPlayerPlayButton from "../AudioPlayerPlayButton/AudioPlayerPlayButton";
import AudioPlayerBarVolumeBlock from "../AudioPlayerBarVolumeBlock/AudioPlayerBarVolumeBlock";

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
		repeat ? audioRef.current.loop=true: audioRef.current.loop=false;
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
			console.log(audioRef.current.duration);
			setLoadMetaData(true);
		};
	}, []);
	return (
		<>
			<SAudio.Bar>
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
									<SAudio.PlayerBtnPrev onClick={NotImplemented}>
										<SAudio.PlayerBtnPrevSvg alt="prev">
											<use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
										</SAudio.PlayerBtnPrevSvg>
									</SAudio.PlayerBtnPrev>
									<AudioPlayerPlayButton audioRef={audioRef}/>
									<SAudio.PlayerBtnNext onClick={NotImplemented}>
										<SAudio.PlayerBtnNextSvg alt="next">
											<use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
										</SAudio.PlayerBtnNextSvg>
									</SAudio.PlayerBtnNext>
									<SAudio.PlayerBtnRepeat $repeatBool={repeat} onClick={cycleExec}>
										<SAudio.PlayerBtnRepeatSvg $repeat={Boolean(repeat)} alt="repeat">
											<use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
										</SAudio.PlayerBtnRepeatSvg>
									</SAudio.PlayerBtnRepeat>
									<SAudio.PlayerBtnShuffle onClick={NotImplemented}>
										<SAudio.PlayerBtnShuffleSvg alt="shuffle">
											<use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
										</SAudio.PlayerBtnShuffleSvg>
									</SAudio.PlayerBtnShuffle>
								</SAudio.PlayerControls>
								<SAudio.PlayerTrackPlay>
									<SAudio.TrackPlayContain>
										<AudioPlayerInfo name={name} author={author}/>
									</SAudio.TrackPlayContain>
									<SAudio.TrackPlayLikeDis>
										<SAudio.TrackPlayLike>
											<SAudio.TrackPlayLikeSvg className="track-play__like-svg" alt="like">
												<use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
											</SAudio.TrackPlayLikeSvg>
										</SAudio.TrackPlayLike>
										<SAudio.TrackPlayDislike>
											<SAudio.TrackPlayDislikeSvg className="track-play__dislike-svg" alt="dislike">
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
