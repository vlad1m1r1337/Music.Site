import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';
import PlayList from './PlayList';

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
				<PlayList track={"Guilt "} executor={"Nero"}
						album={"Welcome Reality"} time={"4:44"}/>
				<PlayList track={"Elektro "} executor={"Dynoro, Outwork, Mr. Gee"}
						album={"Elektro"} time={"2:22"}/>
				<PlayList track={"I’m Fire "} executor={"Ali Bakgor"}
						album={"I’m Fire"} time={"2:22"}/>
				<PlayList track={"Non Stop"} track_add={"(Remix)"} executor={"Стоункат, Psychopath"}
						album={"Non Stop"} time={"4:12"}/>
				<PlayList track={"Run Run"} track_add={"(feat. AR/CO)"} executor={"Jaded, Will Clarke, AR/CO"}
						album={"Run Run"} time={"2:54"}/>
				<PlayList track={"Eyes on Fire"} track_add={"(Zeds Dead Remix)"} executor={"Blue Foundation, Zeds Dead"}
						album={"Eyes on Fire"} time={"5:20"}/>
				<PlayList track={"Mucho Bien"} track_add={"(Hi Profile Remix)"} executor={"HYBIT, Mr. Black, Offer Nissim, Hi Profile"}
						album={"Mucho Bien"} time={"3:41"}/>
				<PlayList track={"Knives n Cherries"} executor={"minthaze"}
						album={"Captivating"} time={"1:48"}/>
				<PlayList track={"How Deep Is Your Love"} executor={"Calvin Harris, Disciples"}
						album={"How Deep Is Your Love"} time={"3:32"}/>
				<PlayList track={"Morena"} executor={"Tom Boxer"}
						album={"Soundz Made in Romania"} time={"3:36"}/>
			</div>
			</div>
	)
}