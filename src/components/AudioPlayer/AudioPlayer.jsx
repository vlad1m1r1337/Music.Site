import { useEffect, useState } from 'react';
import * as S from './AudioPlayer.styles'

export default function AudioPlayer() {
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	return (
		<S.Bar>
		<S.BarContent>
		  <S.BarPlayerProgress></S.BarPlayerProgress>
		  <S.BarPlayerBlock>
			<S.BarPlayer>
			  <S.PlayerControls>
				<S.PlayerBtnPrev>
				  <S.PlayerBtnPrevSvg alt="prev">
					<use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
				  </S.PlayerBtnPrevSvg>
				</S.PlayerBtnPrev>
				<S.PlayerBtnPlay class="_btn">
				  <S.PlayerBtnPlaySvg alt="play">
					<use xlinkHref="img/icon/sprite.svg#icon-play"></use>
				  </S.PlayerBtnPlaySvg>
				</S.PlayerBtnPlay>
				<S.PlayerBtnNext>
				  <S.PlayerBtnNextSvg alt="next">
					<use xlinkHref="img/icon/sprite.svg#icon-next"></use>
				  </S.PlayerBtnNextSvg>
				</S.PlayerBtnNext>
				<S.PlayerBtnRepeat>
				  <S.PlayerBtnRepeatSvg alt="repeat">
					<use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
				  </S.PlayerBtnRepeatSvg>
				</S.PlayerBtnRepeat>
				<S.PlayerBtnShuffle>
				  <S.PlayerBtnShuffleSvg alt="shuffle">
					<use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
				  </S.PlayerBtnShuffleSvg>
				</S.PlayerBtnShuffle>
			  </S.PlayerControls>
				<S.PlayerTrackPlay>
				<S.TrackPlayContain>
					{isLoading ? (
					<div>
						<img src="img/placeholders/track_3.png" alt="track 3" />
					</div>) : (<>
					  <S.TrackPlayImage>
						<S.TrackPlaySvg alt="music">
						  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
						</S.TrackPlaySvg>
					  </S.TrackPlayImage>
					  <S.TrackPlayAuthor>
						<S.TrackPlayAuthorLink href="http://"
						  >Ты та...
						</S.TrackPlayAuthorLink
						>
					  </S.TrackPlayAuthor>
					  <S.TrackPlayAlbum>
						<S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
					  </S.TrackPlayAlbum>
					  </>)}
				</S.TrackPlayContain>

				<S.TrackPlayLikeDis>
				  <S.TrackPlayLike class="_btn-icon">
					<S.TrackPlayLikeSvg alt="like">
					  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
					</S.TrackPlayLikeSvg>
				  </S.TrackPlayLike>
				  <div class="track-play__dislike _btn-icon">
					<svg class="track-play__dislike-svg" alt="dislike">
					  <use
						xlinkHref="img/icon/sprite.svg#icon-dislike"
					  ></use>
					</svg>
				  </div>
				</S.TrackPlayLikeDis>
			  </S.PlayerTrackPlay>
				</S.BarPlayer>
				<S.BarVolumeBlock>
				  <S.VolumeContent>
					<S.VolumeImage>
					  <S.VolumeSvg alt="volume">
						<use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
					  </S.VolumeSvg>
					</S.VolumeImage>
					<S.VolumeProgress class="_btn">
					  <S.VolumeProgressLine
						class="_btn"
						type="range"
						name="range"
					  />
					</S.VolumeProgress>
				  </S.VolumeContent>
				</S.BarVolumeBlock>
		  </S.BarPlayerBlock>
		</S.BarContent>
	  </S.Bar>
	);
  }