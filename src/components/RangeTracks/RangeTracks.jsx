import SearchPopup from '../SearchPopup/SearchPopup.jsx';
import * as S from './RangeTracks.styles'
import {PopupFilter} from "../../services/constants";
import SearchTimePopup from "../SearchTimePopup/SearchTimePopup";
import {SortP} from "./RangeTracks.styles";

export default function RangeTracks() {

  return (
    <>
        <S.CenterBlockH2>Треки</S.CenterBlockH2>
            <S.CenterBlockFilter>
                <S.FiltersDiv>
                    <S.FilterTitle>Искать по:</S.FilterTitle>
                    <SearchPopup name={PopupFilter[0]}/>
                    <SearchPopup name={PopupFilter[1]}/>
                </S.FiltersDiv>
                <S.FiltersDiv>
                    <S.SortP>Сортировка: </S.SortP>
                    <SearchTimePopup name={"По умолчанию"}/>
                </S.FiltersDiv>
            </S.CenterBlockFilter>
    </>
  );
}
