import {MenuItem} from './SearchTimePopupElement.styles'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sort_by_date_id, sort_by_date_old, sort_by_date_new} from "../../store/idSlice";
export default function SearchTimePopupElement({item, setFilter, stateFilter}) {
    const items = ["По умолчанию", "Сначала старые", "Сначала новые"];
    const [filter, setFilterInside] = useState(0);
    const tracks_page = useSelector(state => state.main.tracks_page);
    const dispatch = useDispatch();

    useEffect(() => {
        if (stateFilter === 1 && item === items[0] || stateFilter === 2 && item === items[1] || stateFilter === 3 && item === items[2]) {
            setFilterInside(1);
        }
        else {
            setFilterInside(0);
        }
    }, [stateFilter, item])

    const manage_filter = () => {
        if (item === items[0]) {
            setFilter(1);
            dispatch(sort_by_date_id());
        }
        if (item === items[1]) {
            setFilter(2);
            dispatch(sort_by_date_old());
        }
        if (item === items[2]) {
            setFilter(3);
            dispatch(sort_by_date_new());
        }
    }
    return (
        <div>
            <MenuItem $filter={filter} onClick={() => manage_filter()} >{item}</MenuItem>
        </div>
    )
}