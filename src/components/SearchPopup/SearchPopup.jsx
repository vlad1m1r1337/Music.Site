import {useState, useRef, useEffect} from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import * as S from "./SearchPopup.styles"
import {useThemeContext} from "../../contexts/color_theme";
import {useDispatch, useSelector} from "react-redux";
import {
    find_all_authors,
    find_all_release_dates,
    find_all_genres,
    change_count_genre,
    change_count_author, handle_cross_count_author_genre
} from "../../store/idSlice";
import {SearchPopupElement} from "../SearchPopupElement/SearchPopupElement";
import {PopupFilter} from "../../services/constants";
import {PopupCounterParagraph} from "./SearchPopup.styles";

export default function SearchPopup({ name }) {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    const tracks_page = useSelector(state => state.main.tracks_page);
    const {theme} = useThemeContext();
    const [counter, setCounter] = useState(0)
    const [arr, setArr] = useState();

    const all_authors = useSelector(state => state.main.all_authors);
    const all_release_dates = useSelector(state => state.main.all_release_dates);
    const all_genres = useSelector(state => state.main.all_genres);

    useEffect(() => {
        switch (name) {
            case PopupFilter[0]:
                dispatch(change_count_author(counter));
                break;
            case PopupFilter[1]:
                dispatch(change_count_genre(counter));
                break;
        }
        dispatch(handle_cross_count_author_genre());
    }, [counter]);
    useEffect(() => {
        if (tracks_page) {
            switch (PopupFilter.indexOf(name)) {
                case 0:
                    setArr(all_authors);
                    dispatch(find_all_authors());
                    break;
                case 1:
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

    return (
      <div style={{position: "relative"}}>
        <S.BtnText $theme={theme} onClick={() => setOpen(!isOpen)}>
          {name}
        </S.BtnText>
        <S.SearchPopupMenu $theme={theme} $isOpen={isOpen} ref={menuRef}>
            <S.PopMenuFind $theme={theme} $scroll={scroll}>
                {arr && arr.map((item, index) => (
                    <SearchPopupElement setCounter={setCounter} key={index} item={item} attr={name}/>
                ))}
            </S.PopMenuFind>
        </S.SearchPopupMenu>
        {counter > 0 && <S.PopupCounterParagraph>{counter}</S.PopupCounterParagraph>}
      </div>
    );
}
