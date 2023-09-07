import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';

export default function RangeTracks() {
	return (
		<>
		<h2 class="centerblock__h2">Треки</h2>
		<div class="centerblock__filter filter">
		<div class="filter__title">Искать по:</div>
		<div class="filter__button button-author _btn-text">
			исполнителю
		</div>
		<div class="filter__button button-year _btn-text">
			году выпуска
		</div>
		<div class="filter__button button-genre _btn-text">жанру</div>
		</div>
		</>
	)
}
