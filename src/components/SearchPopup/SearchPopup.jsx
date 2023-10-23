import { useState , useRef} from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
// import styled from "styled-components";

// const StyledFilterButton = styled.div`
//
// `

export default function SearchPopup({ name, arr }) {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null); 
  function waitForDelayAndRun() {
    setTimeout(() => {
      if (isOpen) setTimeout(() => setOpen(false), 50);
    }, 50);
  }
  useClickOutside(menuRef, () => {
    waitForDelayAndRun();
  });

  const scroll = arr.length > 3 ? 1 : 0

  return (
    <>
      <div>
        <div className="filter__button _btn-text" onClick={() => setOpen(!isOpen)}>
          {name}
        </div>
        <nav className={`search__pop_menu ${isOpen ? "active" : ""}`} ref={menuRef}>
          <ul className={`menu__list_track ${scroll ? "pop__menu_find" : ""}`}>
            {arr.map((item, index) => (
              <li key={index} className="menu__item">{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
