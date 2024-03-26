import SearchPopup from '../SearchPopup/SearchPopup.jsx';
import * as S from './RangeTracks.styles'
import {PopupFilter} from "../../services/constants";
import SearchTimePopup from "../SearchTimePopup/SearchTimePopup";
import {SortP} from "./RangeTracks.styles";
import {useEffect, useState} from "react";

export default function RangeTracks() {
    const [filter, setFilter] = useState(1);
    const [name, setName] = useState()

    useEffect(() => {
        console.log("filter", filter);
        switch (filter) {
            case 1:
                setName("По умолчанию");
                break;
            case 2:
                setName("Сначала старые");
                break;
            case 3:
                setName("Сначала новые");
                break;
        }
    }, [filter]);
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
                    <SearchTimePopup name={name} filter={filter} setFilter={setFilter}/>
                </S.FiltersDiv>
            </S.CenterBlockFilter>
    </>
    );
}
