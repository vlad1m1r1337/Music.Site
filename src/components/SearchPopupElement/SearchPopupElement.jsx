import * as S from './SearchPopupElement.styles'
import {useState} from "react";

export const SearchPopupElement = ({item}) => {
    const [filter, setFilter] = useState(false)

    return (
       <S.MenuItem $filter={filter} onClick={() => setFilter(!filter)} >{item}</S.MenuItem>
    )
}