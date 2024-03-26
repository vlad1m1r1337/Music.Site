import * as S from './SearchPopupElement.styles'
import {useEffect, useState} from "react";
import {filter_by_attr} from "../../store/idSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {PopupFilter} from "../../services/constants";

export const SearchPopupElement = ({item, setCounter, attr}) => {
    const [filter, setFilter] = useState(false);
    const dispatch = useDispatch();

    const manage_filter = (filter) => {
        let correct_attr;
        switch (attr) {
            case PopupFilter[0]:
                correct_attr = "author";
                break;
            case PopupFilter[1]:
                correct_attr = "genre";
                break;
            default:
                break;
        }
        dispatch(filter_by_attr({item: item, attr: correct_attr, filter: filter}));
    }

    const filterItem = () => {
        setFilter(!filter);
        if (filter) {
            setCounter((prev) => prev - 1);
        }
        else {
            setCounter((prev) => prev + 1);
        }
        manage_filter(!filter);
    }

    return (
       <S.MenuItem $filter={filter} onClick={() => filterItem()} >{item}</S.MenuItem>
    )
}
