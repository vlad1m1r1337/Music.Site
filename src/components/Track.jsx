import { useState, useEffect } from 'react';

export default function PlayList({track, track_add, executor, album, time}) {
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	return (
		<div class="playlist__item">
					{isLoading ? 
					(
						<>
							<div class="track_placeholder">
								<div class="track__title">
									<img src="/img/placeholders/track.png" alt="track_placeholder" />
								</div>
							</div>
						</>
					) : (
					<>
						<div class="playlist__track track">
							<div class="track__title">
									<div class="track__title-image">
											<svg class="track__title-svg" alt="music">
											<use xlinkHref="img/icon/sprite.svg#icon-note"></use>
											</svg>
									</div>
									<div class="track__title-text">
										<a class="track__title-link" href="http://"
										>{track} <span class="track__title-span">{track_add}</span
										></a>
									</div>
							</div>
							<div class="track__author">
								<a class="track__author-link" href="http://">{executor}</a>
							</div>
							<div class="track__album">
								<a class="track__album-link" href="http://">{album}</a>
							</div>
							<div class="track__time">
								<svg class="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
								</svg>
								<span class="track__time-text">{time}</span>
							</div>
						</div>
					</>
					)}
		</div>
	)
}