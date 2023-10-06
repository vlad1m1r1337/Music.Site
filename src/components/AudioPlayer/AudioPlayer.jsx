import { useEffect, useState } from 'react';
import styled from "styled-components";

const StyledBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`

const StyledBarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

const StyledBarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`

const StyledBarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

const StyledBarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export default function AudioPlayer() {
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	return (
		<StyledBar>
		<StyledBarContent>
		  <StyledBarPlayerProgress></StyledBarPlayerProgress>
		  <StyledBarPlayerBlock>
			<StyledBarPlayer>
			  <div class="player__controls">
				<div class="player__btn-prev">
				  <svg class="player__btn-prev-svg" alt="prev">
					<use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
				  </svg>
				</div>
				<div class="player__btn-play _btn">
				  <svg class="player__btn-play-svg" alt="play">
					<use xlinkHref="img/icon/sprite.svg#icon-play"></use>
				  </svg>
				</div>
				<div class="player__btn-next">
				  <svg class="player__btn-next-svg" alt="next">
					<use xlinkHref="img/icon/sprite.svg#icon-next"></use>
				  </svg>
				</div>
				<div class="player__btn-repeat _btn-icon">
				  <svg class="player__btn-repeat-svg" alt="repeat">
					<use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
				  </svg>
				</div>
				<div class="player__btn-shuffle _btn-icon">
				  <svg class="player__btn-shuffle-svg" alt="shuffle">
					<use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
				  </svg>
				</div>
			  </div>

			  <div class="player__track-play track-play">
				<div class="track-play__contain">
				{isLoading ? (
				<div>
					<img src="img/placeholders/track_3.png" alt="track 3" />
				</div>) : (<>
				  <div class="track-play__image">
					<svg class="track-play__svg" alt="music">
					  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
					</svg>
				  </div>
				  <div class="track-play__author">
					<a class="track-play__author-link" href="http://"
					  >Ты та...</a
					>
				  </div>
				  <div class="track-play__album">
					<a class="track-play__album-link" href="http://">Баста</a>
				  </div>
				  </>)}
				</div>

				<div class="track-play__like-dis">
				  <div class="track-play__like _btn-icon">
					<svg class="track-play__like-svg" alt="like">
					  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
					</svg>
				  </div>
				  <div class="track-play__dislike _btn-icon">
					<svg class="track-play__dislike-svg" alt="dislike">
					  <use
						xlinkHref="img/icon/sprite.svg#icon-dislike"
					  ></use>
					</svg>
				  </div>
				</div>
			  </div>
			</StyledBarPlayer>
			<div class="bar__volume-block volume">
			  <div class="volume__content">
				<div class="volume__image">
				  <svg class="volume__svg" alt="volume">
					<use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
				  </svg>
				</div>
				<div class="volume__progress _btn">
				  <input
					class="volume__progress-line _btn"
					type="range"
					name="range"
				  />
				</div>
			  </div>
			</div>
		  </StyledBarPlayerBlock>
		</StyledBarContent>
	  </StyledBar>
	);
  }