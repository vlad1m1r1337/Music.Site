import * as S from './Track.styles'
import {useNavigate} from "react-router-dom";
import {useThemeContext} from "../../contexts/color_theme";
import {useDispatch, useSelector} from "react-redux";
import {
	remove_track_from_favorite_by_id,
	add_track_to_favorite_by_id,
	addFavoriteTrack,
	chose,
	copy_tracks, removeFavoriteTrack,
	set_amount_id_tracks,
	set_shuffle_def,
	set_shuffle_first,
	fetchFavorite, remove_track_from_favorite,
} from "../../store/idSlice";
import {set_track} from "../../store/idSlice";
import {useEffect, useState} from "react";
import {TrackTimeDiv} from "./Track.styles";
import {MyTracks} from "../../services/constants";

export default function Track({id, track, track_add, executor, album, time, header}) {
	const [like, setLike] = useState(false);
	const {theme} = useThemeContext();
	const dispatch = useDispatch();

	const cur_id = useSelector(state => state.main.id);
	const isPlaying = useSelector(state => state.main.is_playing);

	const tr = useSelector(state => state.main.tracks);
	const access = useSelector(state => state.main.access);


	const handleClick = (id) => {
		dispatch(set_amount_id_tracks());
		dispatch(copy_tracks());
		dispatch(chose({ id: id }));
		dispatch(set_shuffle_def({ id: id }));
		dispatch(set_track({track: tr.find(el => el.id === id)}));
		dispatch(set_shuffle_first({ flag: id }));
	};
	const navigate = useNavigate();
	const favoriteAction = async () => {
		setLike(!like);
		if (!like) {
			try {
				await dispatch(addFavoriteTrack({ access: access, id: id }));
				dispatch(add_track_to_favorite_by_id({ id: id }));
			}
			catch(error) {
				navigate("/login", { replace: true });
				return ;
			}
		}
		else {
			try {
				await dispatch(removeFavoriteTrack({ access: access, id: id }));
				dispatch(remove_track_from_favorite());
				if (header === MyTracks) {
					dispatch(fetchFavorite({accessToken: access}));
				}
			}
			catch (error) {
				navigate("/login", { replace: true });
				return ;
			}
		}

		(!like) ? dispatch(addFavoriteTrack({ access: access, id: id, navigate: navigate })).unwrap().catch(() => navigate("/")) : dispatch(removeFavoriteTrack({ access: access, id: id, navigate: navigate })).unwrap().catch(() => navigate("/"));
	}
	const track_favorites = useSelector(state => state.main.track_favorites);

	useEffect(() => {
		if ( Array.isArray(track_favorites) && track_favorites?.find(el => el.id === id)) {
			setLike(true);
		}
		else {
			setLike(false);
		}
	}, [track_favorites, id]);


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
					<TrackTimeDiv onClick={favoriteAction}>
						<S.TrackTimeSvg $like={like} alt="time">
							<use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
						</S.TrackTimeSvg>
					</TrackTimeDiv>
					<S.TrackTimeText>{time}</S.TrackTimeText>
				</S.PlaylistTrack>
		</S.PlayListItem>
	)
}
