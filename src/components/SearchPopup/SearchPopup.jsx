import { useState , useRef} from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import * as S from "./SearchPopup.styles"
import {useThemeContext} from "../../contexts/color_theme";

export default function SearchPopup({ name, arr }) {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  function waitForDelayAndRun() {
      if (isOpen) setTimeout(() => setOpen(false), 50);
  }

  useClickOutside(menuRef, () => {
    waitForDelayAndRun();
  });

  const scroll = arr.length > 3 ? 1 : 0;

  const {theme} = useThemeContext();
  return (
      <div>
        <S.BtnText $theme={theme} onClick={() => setOpen(!isOpen)}>
          {name}
        </S.BtnText>
        <S.SearchPopupMenu $theme={theme} $isOpen={isOpen} ref={menuRef}>
          <S.PopMenuFind $theme={theme} $scroll={scroll}>
            {arr.map((item, index) => (
              <S.MenuItem key={index}>{item}</S.MenuItem>
            ))}
          </S.PopMenuFind>
        </S.SearchPopupMenu>
      </div>
  );
}
