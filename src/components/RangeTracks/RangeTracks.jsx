// Ваш родительский компонент
import SearchPopup from '../SearchPopup/SearchPopup.jsx';
import * as S from './RangeTracks.styles'

export default function RangeTracks() {
  const perf_arr = ["Nero", "Dynoro, Outwork, Mr. Gee", "Ali Bakgor", "Стоункат, Psychopath"];
  const year_arr = ["1992", "1993", "1994"];
  const genre_arr = ["Рок", "Хип-хоп", "Поп-музыка", "Техно"];
  
  return (
    <>
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <S.CenterBlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <SearchPopup name={"исполнителю"} arr={perf_arr} />
        <SearchPopup name={"году выпуска"} arr={year_arr} />
        <SearchPopup name={"жанру"} arr={genre_arr} />
      </S.CenterBlockFilter>
    </>
  );
}
