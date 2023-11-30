import {useEffect, useRef, useState} from 'react';
import * as SAudio from './AudioPlayer.styles'
import ProgressBar from "../ProgressBar/ProgressBar";
import SideBarAuth from "../SideBarAuth/SideBarAuth";
import {PlayerBtnPlayImg} from "./AudioPlayer.styles";

export default function AudioPlayer() {
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

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
		<SAudio.Bar>
		<audio ref={audioRef}>
			<source src="https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3" type="audio/mpeg" />
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
				<SAudio.PlayerBtnNext>
				  <SAudio.PlayerBtnNextSvg alt="next">
					<use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
				  </SAudio.PlayerBtnNextSvg>
				</SAudio.PlayerBtnNext>
				<SAudio.PlayerBtnRepeat>
				  <SAudio.PlayerBtnRepeatSvg alt="repeat">
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
					{isLoading ? (
					<div>
						<img src="/img/placeholders/track_3.png" alt="track 3" />
					</div>) : (<>
					  <SAudio.TrackPlayImage>
						<SAudio.TrackPlaySvg alt="music">
						  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
						</SAudio.TrackPlaySvg>
					  </SAudio.TrackPlayImage>
					  <SAudio.TrackPlayAuthor>
						<SAudio.TrackPlayAuthorLink href="http://"
						  >Ты та...
						</SAudio.TrackPlayAuthorLink
						>
					  </SAudio.TrackPlayAuthor>
					  <SAudio.TrackPlayAlbum>
						<SAudio.TrackPlayAlbumLink href="http://">Баста</SAudio.TrackPlayAlbumLink>
					  </SAudio.TrackPlayAlbum>
					  </>)}
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
