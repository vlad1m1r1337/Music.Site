import * as S from './Track.styles'
import {useParams} from "react-router-dom";
import {useThemeContext} from "../../contexts/color_theme";
import {useDispatch, useSelector} from "react-redux";
import {
	addFavoriteTrack,
	chose,
	copy_tracks, removeFavoriteTrack,
	set_amount_id_tracks,
	set_shuffle_def,
	set_shuffle_first
} from "../../store/idSlice";
import {set_track} from "../../store/idSlice";
import {useState} from "react";

export default function Track({id, track, track_add, executor, album, time}) {
	const [like, setLike] = useState(false);
	const params = useParams();
	const {theme} = useThemeContext();
	const dispatch = useDispatch();

	const cur_id = useSelector(state => state.main.id);
	const isPlaying = useSelector(state => state.main.is_playing);

	const id_track = useSelector(state => state.main.id);
	const tr = useSelector(state => state.main.tracks);
	const access = useSelector(state => state.main.access);

	const handleClick = (id) => {
		dispatch(set_amount_id_tracks());
		dispatch(copy_tracks());
		dispatch(chose({ id: id }));
		dispatch(set_shuffle_def({ id: id }));
		dispatch(set_track({track: tr.find((el, index, array) => el.id === id)}));
		dispatch(set_shuffle_first({ flag: id }));
	};
	const favoriteAction = () => {
		setLike(!like);
		if (!like) {
			console.log("dispatch(addFavoriteTrack({ access: access, id: id }));")
			dispatch(addFavoriteTrack({ access, id }));
		}
		else  {
			console.log("dispatch(removeFavoriteTrack({ access: access, id: id }))")
			dispatch(removeFavoriteTrack({ access: access, id: id }))
		}
		// (!like) ? dispatch(addFavoriteTrack({ access: access, id: id })) : dispatch(removeFavoriteTrack({ access: access, id: id }));
	}
	return (
		<S.PlayListItem>
				<S.PlaylistTrack>
					<S.TrackTitle>
						<S.TrackTitleImage $theme={theme}>
							{ id !== cur_id && <S.TrackTitleSvg alt="music">
								<use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
							</S.TrackTitleSvg>}
							{id === cur_id && <S.BlueVioletDot $isPlaying={isPlaying} src="/img/blueviolet_dot.svg" alt="blueviolet_dot"/>}
						</S.TrackTitleImage>
						<S.TrackTitleLink $theme={theme} onClick={() => handleClick(id)}>{track}<S.TrackTitleSpan>{track_add}</S.TrackTitleSpan></S.TrackTitleLink>
					</S.TrackTitle>
					<S.TrackAuthor>
						<S.TrackAuthorLink $theme={theme}>{executor}</S.TrackAuthorLink>
					</S.TrackAuthor>
					<S.TrackAlbum>
						<S.TrackAlbumLink $theme={theme}>{album}</S.TrackAlbumLink>
					</S.TrackAlbum>
					<S.TrackTimeSvg $like={like} onClick={favoriteAction} alt="time">
						<use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
					</S.TrackTimeSvg>
					<S.TrackTimeText>{time}</S.TrackTimeText>
				</S.PlaylistTrack>
		</S.PlayListItem>
	)
}
