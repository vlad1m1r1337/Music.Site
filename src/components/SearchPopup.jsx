import { useState } from "react";

export default function SearchPopup({ name, arr }) {
  const [isOpen, setOpen] = useState(false);

  let scroll = arr.length > 3 ? 1 : 0

  return (
    <>
      <div className="range__buttons">
        <div onClick={() => setOpen(!isOpen)} className="filter__button button-author _btn-text">
          {name}
        </div>
        <nav className={`search__pop_menu ${isOpen ? "active" : ""}`}>
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
