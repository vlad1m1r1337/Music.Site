import {useState, useRef, useEffect} from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import * as S from "./SearchPopup.styles"
import {useThemeContext} from "../../contexts/color_theme";
import {useDispatch, useSelector} from "react-redux";
import {find_all_authors} from "../../store/idSlice";
import {SearchPopupElement} from "../SearchPopupElement/SearchPopupElement";

export default function SearchPopup({ name }) {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    const all_authors = useSelector(state => state.main.all_authors);
    const tracks_page = useSelector(state => state.main.tracks_page);
    const {theme} = useThemeContext();

    useEffect(() => {
        if (tracks_page) {
            dispatch(find_all_authors());
        }
    }, []);
    function waitForDelayAndRun() {
    if (isOpen) setTimeout(() => setOpen(false), 50);
    }

    useClickOutside(menuRef, () => {
        waitForDelayAndRun();
    });

    let scroll = 0;
    if (all_authors) {
        scroll = all_authors.length > 3 ? 1 : 0;
    }

    return (
      <div>
        <S.BtnText $theme={theme} onClick={() => setOpen(!isOpen)}>
          {name}
        </S.BtnText>
        <S.SearchPopupMenu $theme={theme} $isOpen={isOpen} ref={menuRef}>
          <S.PopMenuFind $theme={theme} $scroll={scroll}>
            {all_authors && all_authors.map((item, index) => (
                <SearchPopupElement key={index} item={item} />
            ))}
          </S.PopMenuFind>
        </S.SearchPopupMenu>
      </div>
    );
}
