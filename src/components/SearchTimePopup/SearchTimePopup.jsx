import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {useThemeContext} from "../../contexts/color_theme";
import {useClickOutside} from "../../hooks/useClickOutside";
import * as S from "../SearchPopup/SearchPopup.styles";
import SearchTimePopupElement from "../SearchTimePopupElement/SearchTimePopupElement";

export default function SearchTimePopup({ name, filter, setFilter }) {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    const {theme} = useThemeContext();
    const [counter, setCounter] = useState(0)

    function waitForDelayAndRun() {
        if (isOpen) setTimeout(() => setOpen(false), 100);
    }

    useClickOutside(menuRef, () => {
        waitForDelayAndRun();
    });
    return (
        <div style={{position: "relative"}}>
            <S.BtnText $theme={theme} onClick={() => setOpen(!isOpen)}>
                {name}
            </S.BtnText>
            <S.SearchPopupMenu $theme={theme} $isOpen={isOpen} ref={menuRef}>
                <S.PopMenuFind $theme={theme}>
                    <SearchTimePopupElement setCounter={setCounter} item={"По умолчанию"} setFilter={setFilter} stateFilter={filter}/>
                    <SearchTimePopupElement setCounter={setCounter} item={"Сначала старые"} setFilter={setFilter} stateFilter={filter}/>
                    <SearchTimePopupElement setCounter={setCounter} item={"Сначала новые"} setFilter={setFilter} stateFilter={filter}/>
                </S.PopMenuFind>
            </S.SearchPopupMenu>
            {filter > 1  && <S.PopupCounterParagraph>1</S.PopupCounterParagraph>}
        </div>
    );
}