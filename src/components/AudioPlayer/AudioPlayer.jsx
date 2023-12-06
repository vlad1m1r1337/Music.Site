import {useEffect, useRef, useState} from 'react';
import * as SAudio from './AudioPlayer.styles'
import ProgressBar from "../ProgressBar/ProgressBar";
import AudioPlayerInfo from "../AudioPlayerInfo/AudioPlayerInfo";
import AudioPlayerPlayButton from "../AudioPlayerPlayButton/AudioPlayerPlayButton";

export default function AudioPlayer({id, tracks}) {
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

	const [repeat, setRepeat] = useState(false);
	function cycleExec() {
		setRepeat(!repeat);
		repeat ? audioRef.current.loop=true: audioRef.current.loop=false;
		console.log(repeat);
	}
	return (
		<SAudio.Bar>
		<audio controls autoPlay ref={audioRef}>
			<source src={sound} type="audio/mpeg" />
		</audio>
		<SAudio.BarContent>
			<ProgressBar></ProgressBar>
			<SAudio.BarPlayerBlock>
			<SAudio.BarPlayer>
			  <SAudio.PlayerControls>
				<SAudio.PlayerBtnPrev>
				  <SAudio.PlayerBtnPrevSvg alt="prev">
					<use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
				  </SAudio.PlayerBtnPrevSvg>
				</SAudio.PlayerBtnPrev>
				<AudioPlayerPlayButton audioRef={audioRef}/>
				<SAudio.PlayerBtnNext>
				  <SAudio.PlayerBtnNextSvg alt="next">
					<use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
				  </SAudio.PlayerBtnNextSvg>
				</SAudio.PlayerBtnNext>
				<SAudio.PlayerBtnRepeat $repeatBool={repeat} onClick={cycleExec}>
				  <SAudio.PlayerBtnRepeatSvg repeat={repeat} alt="repeat">
					<use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
				  </SAudio.PlayerBtnRepeatSvg>
				</SAudio.PlayerBtnRepeat>
				<SAudio.PlayerBtnShuffle>
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
				<SAudio.BarVolumeBlock>
				  <SAudio.VolumeContent>
					<SAudio.VolumeImage>
					  <SAudio.VolumeSvg alt="volume">
						<use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
					  </SAudio.VolumeSvg>
					</SAudio.VolumeImage>
					<SAudio.VolumeProgress>
					  <SAudio.VolumeProgressLine
						type="range"
						name="range"
					  />
					</SAudio.VolumeProgress>
				  </SAudio.VolumeContent>
				</SAudio.BarVolumeBlock>
		  </SAudio.BarPlayerBlock>
		</SAudio.BarContent>
	  </SAudio.Bar>
	);
  }
