import * as S from './Track.styles'
import {useParams} from "react-router-dom";
import {useThemeContext} from "../../contexts/color_theme";

export default function Track({setId, objId, id, track, track_add, executor, album, time}) {
	const params = useParams();
	let idCacl;
	if (params.id === '1') {
		idCacl = 8;
	}
	else if (params.id === '2') {
		idCacl = 18;
	}
	else if (params.id === '3') {
		idCacl = 28;
	}
	else {
		idCacl = 8
	}
	const {theme} = useThemeContext();
	return (
		<S.PlayListItem>
				<S.PlaylistTrack>
					<S.TrackTitle>
							<S.TrackTitleImage $theme={theme}>
									<S.TrackTitleSvg alt="music">
										<use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
									</S.TrackTitleSvg>
							</S.TrackTitleImage>
							<S.TrackTitleLink $theme={theme} onClick={() => setId(objId = id - idCacl)}>{track}<S.TrackTitleSpan>{track_add}</S.TrackTitleSpan></S.TrackTitleLink>
					</S.TrackTitle>
					<S.TrackAuthor>
						<S.TrackAuthorLink $theme={theme}>{executor}</S.TrackAuthorLink>
					</S.TrackAuthor>
					<S.TrackAlbum>
						<S.TrackAlbumLink $theme={theme}>{album}</S.TrackAlbumLink>
					</S.TrackAlbum>
					<S.TrackTimeSvg alt="time">
						<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
					</S.TrackTimeSvg>
					<S.TrackTimeText>{time}</S.TrackTimeText>
				</S.PlaylistTrack>
		</S.PlayListItem>
	)
}
