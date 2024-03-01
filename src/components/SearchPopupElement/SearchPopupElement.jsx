import * as S from './SearchPopupElement.styles'
import {useEffect, useState} from "react";
import {change_filtr_flag, filter_by_attr} from "../../store/idSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

export const SearchPopupElement = ({item}) => {
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
    }, [filter]);
    const filterItem = () => {
        setFilter(!filter);
        dispatch(filter_by_attr({author: item, filtred_flag: filtred_flag}));
    }

    return (
       <S.MenuItem $filter={filter} onClick={() => filterItem()} >{item}</S.MenuItem>
    )
}