import * as S from './Track.styles'
import {useParams} from "react-router-dom";

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
	return (
		<S.PlayListItem>
				<S.PlaylistTrack>
					<S.TrackTitle>
							<S.TrackTitleImage>
									<S.TrackTitleSvg alt="music">
										<use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
									</S.TrackTitleSvg>
							</S.TrackTitleImage>
							<S.TrackTitleLink onClick={() => setId(objId = id - idCacl)}>{track}<S.TrackTitleSpan>{track_add}</S.TrackTitleSpan></S.TrackTitleLink>
					</S.TrackTitle>
					<S.TrackAuthor>
						<S.TrackAuthorLink href="http://">{executor}</S.TrackAuthorLink>
					</S.TrackAuthor>
					<S.TrackAlbum>
						<S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
					</S.TrackAlbum>
					<S.TrackTimeSvg alt="time">
						<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
					</S.TrackTimeSvg>
					<S.TrackTimeText>{time}</S.TrackTimeText>
				</S.PlaylistTrack>
		</S.PlayListItem>
	)
}
