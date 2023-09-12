import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';

export default function sideBarImages() {
	return (
		<>
		<div class="sidebar__item">
			  <a class="sidebar__link" href="https://my.sky.pro/student-cabinet/showcase">
				<img
				  class="sidebar__img"
				  src="img/playlist01.png"
				  alt="day's playlist"
				/>
			  </a>
			</div>
			<div class="sidebar__item">
			  <a class="sidebar__link" href="https://my.sky.pro/student-cabinet/showcase">
				<img
				  class="sidebar__img"
				  src="img/playlist02.png"
				  alt="day's playlist"
				/>
			  </a>
			</div>
			<div class="sidebar__item">
			  <a class="sidebar__link" href="https://my.sky.pro/student-cabinet/showcase">
				<img
				  class="sidebar__img"
				  src="img/playlist03.png"
				  alt="day's playlist"
				/>
			  </a>
			</div>
			</>
	)
}