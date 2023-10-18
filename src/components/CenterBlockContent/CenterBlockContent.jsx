import Track from '../Track/Track';
import * as S from './CenterBlockContent.styles'
export default function CenterBlockContent() {

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
				<Track track={"Guilt "} executor={"Nero"}
						album={"Welcome Reality"} time={"4:44"}/>
				<Track track={"Elektro "} executor={"Dynoro, Outwork, Mr. Gee"}
						album={"Elektro"} time={"2:22"}/>
				<Track track={"I’m Fire "} executor={"Ali Bakgor"}
						album={"I’m Fire"} time={"2:22"}/>
				<Track track={"Non Stop"} track_add={"(Remix)"} executor={"Стоункат, Psychopath"}
						album={"Non Stop"} time={"4:12"}/>
				<Track track={"Run Run"} track_add={"(feat. AR/CO)"} executor={"Jaded, Will Clarke, AR/CO"}
						album={"Run Run"} time={"2:54"}/>
				<Track track={"Eyes on Fire"} track_add={"(Zeds Dead Remix)"} executor={"Blue Foundation, Zeds Dead"}
						album={"Eyes on Fire"} time={"5:20"}/>
				<Track track={"Mucho Bien"} track_add={"(Hi Profile Remix)"} executor={"HYBIT, Mr. Black, Offer Nissim, Hi Profile"}
						album={"Mucho Bien"} time={"3:41"}/>
				<Track track={"Knives n Cherries"} executor={"minthaze"}
						album={"Captivating"} time={"1:48"}/>
				<Track track={"How Deep Is Your Love"} executor={"Calvin Harris, Disciples"}
						album={"How Deep Is Your Love"} time={"3:32"}/>
				<Track track={"Morena"} executor={"Tom Boxer"}
						album={"Soundz Made in Romania"} time={"3:36"}/>
			</S.ContentPlayList>
			</S.CenterBlockContent>
	)
}