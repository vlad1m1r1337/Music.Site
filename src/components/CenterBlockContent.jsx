import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';
import Track from './Track';

export default function CenterBlockContent() {
	return (
		<div class="centerblock__content">
			<div class="content__title playlist-title">
				<div class="playlist-title__col col01">Трек</div>
				<div class="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
				<div class="playlist-title__col col03">АЛЬБОМ</div>
				<div class="playlist-title__col col04">
				<svg class="playlist-title__svg" alt="time">
					<use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
				</svg>
				</div>
			</div>
			<div class="content__playlist playlist">
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
			</div>
			</div>
	)
}