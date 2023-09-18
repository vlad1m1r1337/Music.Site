import SearchPopup from './SearchPopup.jsx';

export default function RangeTracks() {

	const perf_arr = ["Nero", "Dynoro, Outwork, Mr. Gee", "Ali Bakgor", "Стоункат, Psychopath"];

	const year_arr = ["1992", "1993", "1994"];

	const genre_arr = ["Рок", "Хип-хоп", "Поп-музыка", "Техно"];
	
	return (
		<>
		<h2 class="centerblock__h2">Треки</h2>
		<div class="centerblock__filter filter">
		<div class="filter__title">Искать по:</div>
		<SearchPopup name={"исполнителю"} perf_arr={perf_arr}/>
		<SearchPopup name={"году выпуска"}  year_arr={year_arr}/>
		<SearchPopup name={"жанру"}  genre_arr={genre_arr}/>
		</div>
		</>
	)
}
