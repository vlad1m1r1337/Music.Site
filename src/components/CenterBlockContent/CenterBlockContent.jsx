import Track from '../Track/Track';
import * as S from './CenterBlockContent.styles';

export default function CenterBlockContent({tracks, setId, objId}) {
	return (
		<S.CenterBlockContent>
			<S.ContentTitle>
				<S.Col01>Трек</S.Col01>
				<S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
				<S.Col03>АЛЬБОМ</S.Col03>
				<S.Col04>
					<S.PlayListTitleSvg alt="time">
						<use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
					</S.PlayListTitleSvg>
				</S.Col04>
			</S.ContentTitle>
			<S.ContentPlayList>
				{tracks &&
					tracks.map((track) => {
						const id = track.id;
						const name = track.name;
						const author = track.author;
						const album = track.album;
						const dur_in_sec = Number(track.duration_in_seconds);
						const minutes = Math.floor(dur_in_sec / 60);
						const seconds = dur_in_sec % 60 < 10 ? "0" + dur_in_sec % 60 : dur_in_sec % 60;
						const time = minutes + ":" + seconds;
						return (
								<Track setId={setId} objId={objId} key={id} id={id} track={name} executor={author} album={album} time={time}/>
							)
					})
				}
			</S.ContentPlayList>
			</S.CenterBlockContent>
	)
}
