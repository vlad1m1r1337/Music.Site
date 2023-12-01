import { useState, useEffect } from 'react';
import * as S from './Track.styles'
export default function PlayList({track, track_add, executor, album, time}) {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	return (
		<S.PlayListItem>
					{isLoading ? 
					(
						<>
							<S.TrackPlaceholder>
								<S.TrackTitle>
									<img src="/img/placeholders/track.png" alt="track_placeholder" />
								</S.TrackTitle>
							</S.TrackPlaceholder>
						</>
					) : (
					<>
						<S.PlaylistTrack>
							<S.TrackTitle>
									<S.TrackTitleImage>
											<S.TrackTitleSvg alt="music">
												<use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
											</S.TrackTitleSvg>
									</S.TrackTitleImage>
									<S.TrackTitleLink>{track} <S.TrackTitleSpan>{track_add}</S.TrackTitleSpan></S.TrackTitleLink>
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
					</>
					)}
		</S.PlayListItem>
	)
}