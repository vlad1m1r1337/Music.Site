import SearchPopup from './SearchPopup.jsx';

export default function RangeTracks() {

	return (
		<>
		<h2 class="centerblock__h2">Треки</h2>
		<div class="centerblock__filter filter">
		<div class="filter__title">Искать по:</div>
		<SearchPopup name={"исполнителю"}/>
		<SearchPopup name={"году выпуска"}/>
		<SearchPopup name={"жанру"}/>
		</div>
		</>
	)
}
