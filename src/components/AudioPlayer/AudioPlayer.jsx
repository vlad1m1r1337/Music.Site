import {useEffect, useRef, useState} from 'react';
import * as SAudio from './AudioPlayer.styles'
import AudioPlayerProgressBar from "../AudioPlayerProgressBar/AudioPlayerProgressBar";
import AudioPlayerInfo from "../AudioPlayerInfo/AudioPlayerInfo";
import AudioPlayerBarVolumeBlock from "../AudioPlayerBarVolumeBlock/AudioPlayerBarVolumeBlock";
import {useThemeContext} from "../../contexts/color_theme";
import {AudioPlayerActiveButtons} from "../AudioPlayerActiveButtons/AudioPlayerActiveButtons";
import {useSelector} from "react-redux";
import {remove_track_from_favorite, add_track_to_favorite, addFavoriteTrack, removeFavoriteTrack} from "../../store/idSlice";
import {useDispatch} from "react-redux";


export default function AudioPlayer() {
	const audioRef = useRef(null);
	const dispatch = useDispatch();

	const {theme} = useThemeContext();

	const [loadMetaData, setLoadMetaData] = useState(false);

	const [volume, setVolume] = useState(50);

	let [currentTime, setCurrentTime] = useState(0);

	// const id = useSelector(state => state.main.id);
	const tracks = useSelector(state => state.main.track);

	const access = useSelector(state => state.main.access);

	const id = useSelector(state => state.main.id);

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

	useEffect(() => 	{
		audioRef.current.volume = volume / 100;
	}, [volume]);

	function toMin(dur) {
		const seconds = (parseInt(dur % 60) < 10 ? "0" + parseInt(dur % 60) : parseInt(dur % 60));
		return Math.floor(parseInt(dur / 60)) + ':' + seconds;
	}

	useEffect(() => {
		audioRef.current.onloadedmetadata = () => {
			setLoadMetaData(true);
		};
	}, []);
	 async function setLike() {
		dispatch(add_track_to_favorite());
		await dispatch(addFavoriteTrack({ access: access, id: id }));
	}
	async function setDislike() {
		dispatch(remove_track_from_favorite());
		await dispatch(removeFavoriteTrack({ access: access, id: id }));
	}
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
						<SAudio.BarPlayerBlock $theme={theme}>
							<SAudio.BarPlayer>
								<AudioPlayerActiveButtons audioRef={audioRef}/>
								<SAudio.PlayerTrackPlay>
									<SAudio.TrackPlayContain>
										<AudioPlayerInfo name={name} author={author}/>
									</SAudio.TrackPlayContain>
									<SAudio.TrackPlayLikeDis>
										<SAudio.TrackPlayLike onClick={setLike} $theme={theme}>
											<SAudio.TrackPlayLikeSvg $theme={theme} className="track-play__like-svg" alt="like">
												<use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
											</SAudio.TrackPlayLikeSvg>
										</SAudio.TrackPlayLike>
										<SAudio.TrackPlayDislike onClick={setDislike} $theme={theme}>
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
