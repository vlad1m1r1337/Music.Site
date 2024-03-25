import SearchPopup from '../SearchPopup/SearchPopup.jsx';
import * as S from './RangeTracks.styles'
import {PopupFilter} from "../../services/constants";
import SearchTimePopup from "../SearchTimePopup/SearchTimePopup";

export default function RangeTracks() {

  return (
    <>
        <S.CenterBlockH2>Треки</S.CenterBlockH2>
            <S.CenterBlockFilter>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <S.FilterTitle>Искать по:</S.FilterTitle>
                    <SearchPopup name={PopupFilter[0]}/>
                    <SearchPopup name={PopupFilter[1]}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{marginRight: '15px'}}>Сортировка: </p>
                    <SearchTimePopup name={"По умолчанию"}/>
                </div>
            </S.CenterBlockFilter>
    </>
  );
}
