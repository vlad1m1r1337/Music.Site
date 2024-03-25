import * as S from './SearchPopupElement.styles'
import {useEffect, useState} from "react";
import {change_filtr_flag,
        change_popup_counter} from "../../store/idSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

export const SearchPopupElement = ({item, name}) => {
    const [filter, setFilter] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (filter) {
            dispatch(change_filtr_flag({flag: true}));
        }
        else {
            dispatch(change_filtr_flag({flag: false}));
        }
    }, [dispatch, filter]);

    const filterItem = () => {
        setFilter(!filter);
        dispatch(change_popup_counter({name: name, filter: filter}));
    }

    return (
       <S.MenuItem $filter={filter} onClick={() => filterItem()} >{item}</S.MenuItem>
    )
}
