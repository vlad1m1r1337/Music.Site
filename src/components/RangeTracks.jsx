// Ваш родительский компонент
import SearchPopup from './SearchPopup.jsx';

export default function RangeTracks() {
  const perf_arr = ["Nero", "Dynoro, Outwork, Mr. Gee", "Ali Bakgor", "Стоункат, Psychopath"];
  const year_arr = ["1992", "1993", "1994"];
  const genre_arr = ["Рок", "Хип-хоп", "Поп-музыка", "Техно"];
  
  return (
    <>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <SearchPopup name={"исполнителю"} arr={perf_arr} />
        <SearchPopup name={"году выпуска"} arr={year_arr} />
        <SearchPopup name={"жанру"} arr={genre_arr} />
      </div>
    </>
  );
}
