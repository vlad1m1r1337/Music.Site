import * as S from './SearchPopupElement.styles'
import {useEffect, useState} from "react";
import {change_filtr_flag} from "../../store/idSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

export const SearchPopupElement = ({item, name, setCounter}) => {
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
        if (filter) {
            setCounter((prev) => prev - 1);
        }
        else {
            setCounter((prev) => prev + 1);
        }

        setFilter(!filter);
    }

    return (
       <S.MenuItem $filter={filter} onClick={() => filterItem()} >{item}</S.MenuItem>
    )
}
