import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {useThemeContext} from "../../contexts/color_theme";
import {useClickOutside} from "../../hooks/useClickOutside";
import * as S from "../SearchPopup/SearchPopup.styles";
import SearchTimePopupElement from "../SearchTimePopupElement/SearchTimePopupElement";

export default function SearchTimePopup({ name }) {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    const tracks_page = useSelector(state => state.main.tracks_page);
    const {theme} = useThemeContext();
    const [counter, setCounter] = useState(0)

    function waitForDelayAndRun() {
        if (isOpen) setTimeout(() => setOpen(false), 100);
    }

    useClickOutside(menuRef, () => {
        waitForDelayAndRun();
    });

    let scroll = 0;

    console.log("counter", counter);

    return (
        <div style={{position: "relative"}}>
            <S.BtnText $theme={theme} onClick={() => setOpen(!isOpen)}>
                {name}
            </S.BtnText>
            <S.SearchPopupMenu $theme={theme} $isOpen={isOpen} ref={menuRef}>
                <S.PopMenuFind $theme={theme}>
                    <SearchTimePopupElement setCounter={setCounter}  item={"По умолчанию"} attr={name}/>
                    <SearchTimePopupElement setCounter={setCounter}  item={"Сначала старые"} attr={name}/>
                    <SearchTimePopupElement setCounter={setCounter}  item={"Сначала новые"} attr={name}/>
                </S.PopMenuFind>
            </S.SearchPopupMenu>
            {counter > 0 && <S.PopupCounterParagraph>{counter}</S.PopupCounterParagraph>}
        </div>
    );
}