// Ваш родительский компонент
import SearchPopup from '../SearchPopup/SearchPopup.jsx';
import * as S from './RangeTracks.styles'
import {PopupFilter} from "../../services/constants";

export default function RangeTracks() {

  return (
    <>
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <S.CenterBlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <SearchPopup name={PopupFilter[0]} />
        <SearchPopup name={PopupFilter[1]} />
        <SearchPopup name={PopupFilter[2]} />
      </S.CenterBlockFilter>
    </>
  );
}
