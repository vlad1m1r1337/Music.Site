import * as S from './SearchPopupElement.styles'
import {useEffect, useState} from "react";
import {change_filtr_flag, filter_by_attr_author, filter_by_attr_release_date, filter_by_attr_genre} from "../../store/idSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {PopupFilter} from "../../services/constants";

export const SearchPopupElement = ({item, name}) => {
    const [filter, setFilter] = useState(false);
    const dispatch = useDispatch();
    const filtred_flag = useSelector(state => state.main.filtred_flag);

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
        if (name === PopupFilter[0]) {
            dispatch(filter_by_attr_author({author: item, filtred_flag: filtred_flag}));
        }
        if (name === PopupFilter[1]) {
            dispatch(filter_by_attr_release_date({release_date: item, filtred_flag: filtred_flag}));
        }
        if (name === PopupFilter[2]) {
            dispatch(filter_by_attr_genre({genre: item, filtred_flag: filtred_flag}));
        }
    }

    return (
       <S.MenuItem $filter={filter} onClick={() => filterItem()} >{item}</S.MenuItem>
    )
}