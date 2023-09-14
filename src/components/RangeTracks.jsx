import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';

import { useState } from 'react';

export default function RangeTracks() {

	const [performer, setVisiblePerformer] = useState(false);

	const toggleVisibilityPerformer = () => setVisiblePerformer(!performer);


	const [year, setVisibleYear] = useState(false);

	const toggleVisibilityYear = () => setVisibleYear(!year);


	const [genre, setVisibleGenre] = useState(false);

	const toggleVisibilityGenre = () => setVisibleGenre(!genre);

	return (
		<>
		<h2 class="centerblock__h2">Треки</h2>
		<div class="centerblock__filter filter">
		<div class="filter__title">Искать по:</div>
		<div onClick={toggleVisibilityPerformer} class="performer">
			<div class="filter__button button-author _btn-text">
				исполнителю
			</div>
				{performer && (<div>
				<img src="img/ranking/perfomer.png" alt="ranging" />
			</div>)}
		</div>
		<div class="output_year">
			<div onClick={toggleVisibilityYear} class="filter__button button-year _btn-text">
				году выпуска
			</div>
				{year && (<div>
				<img src="img/ranking/year.png" alt="ranging" />
			</div>)}
		</div>
		<div class="genre">
			<div onClick={toggleVisibilityGenre} class="filter__button button-genre _btn-text">
				жанру
			</div>
				{genre && (<div>
				<img src="img/ranking/genre.png" alt="ranging" />
			</div>)}
		</div>
		</div>
		</>
	)
}
