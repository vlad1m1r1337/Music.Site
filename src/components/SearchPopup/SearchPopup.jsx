import {useState, useRef, useEffect} from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import * as S from "./SearchPopup.styles"
import {useThemeContext} from "../../contexts/color_theme";
import {useDispatch, useSelector} from "react-redux";
import {find_all_authors, find_all_release_dates, find_all_genres} from "../../store/idSlice";
import {SearchPopupElement} from "../SearchPopupElement/SearchPopupElement";
import {PopupFilter} from "../../services/constants";
import {PopupCounterParagraph} from "./SearchPopup.styles";

export default function SearchPopup({ name }) {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    const tracks_page = useSelector(state => state.main.tracks_page);
    const {theme} = useThemeContext();

    const all_authors = useSelector(state => state.main.all_authors);
    const all_release_dates = useSelector(state => state.main.all_release_dates);
    const all_genres = useSelector(state => state.main.all_genres);

    const [arr, setArr] = useState()
    useEffect(() => {
        if (tracks_page) {
            switch (PopupFilter.indexOf(name)) {
                case 0:
                    setArr(all_authors);
                    dispatch(find_all_authors());
                    break;
                case 1:
                    setArr(all_release_dates);
                    dispatch(find_all_release_dates());
                    break;
                case 2:
                    setArr(all_genres);
                    dispatch(find_all_genres());
                    break;
                default:
                    break;
            }
        }
    }, [dispatch, tracks_page, name, all_authors, all_release_dates, all_genres]);

    function waitForDelayAndRun() {
        if (isOpen) setTimeout(() => setOpen(false), 100);
    }

    useClickOutside(menuRef, () => {
        waitForDelayAndRun();
    });

    let scroll = 0;
    if (arr) {
        scroll = arr.length > 3 ? 1 : 0;
    }

    let popup_counter;
    const popup_author_counter = useSelector(state => state.main.popup_author_counter);
    const popup_release_date_counter = useSelector(state => state.main.popup_release_dates);
    const popup_genre_counter = useSelector(state => state.main.popup_genres);

    switch (PopupFilter.indexOf(name)) {
        case 0:
            popup_counter = popup_author_counter;
            break;
        case 1:
            popup_counter = popup_release_date_counter;
            break;
        case 2:
            popup_counter = popup_genre_counter;
            break;
    }

    return (
      <div style={{position: "relative"}}>
        <S.BtnText $theme={theme} onClick={() => setOpen(!isOpen)}>
          {name}
        </S.BtnText>
        <S.SearchPopupMenu $theme={theme} $isOpen={isOpen} ref={menuRef}>
            <S.PopMenuFind $theme={theme} $scroll={scroll}>
                {arr && arr.map((item, index) => (
                    <SearchPopupElement key={index} item={item} name={name}/>
                ))}
            </S.PopMenuFind>
        </S.SearchPopupMenu>
        {popup_counter > 0 && <S.PopupCounterParagraph>{popup_counter}</S.PopupCounterParagraph>}
      </div>
    );
}
