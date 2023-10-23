import { useState , useRef} from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import styled from "styled-components";

const StyledSearchPopupMenu = styled.nav`
  opacity: ${props => (props.isOpen ? '1' : '0')};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  margin: 50px 0 0 0;
  background-color: #313131;
  border: 1px solid #313131;
  border-radius: 12px;
  transition: 0.3s;
  color: #ffffff;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  width: 248px;
`

const StyledPopMenuFind = styled.ul`
  overflow: ${props => (props.scroll ? 'auto' : '')};
  height: ${props => (props.scroll ? '133px' : '')};
  
  &::-webkit-scrollbar-thumb {
  background-color: #f1f1f1; /* Цвет ползунка */
  border-radius: 6px; /* Закругленные углы ползунка */
  margin-right: 5px;
  }
  &::-webkit-scrollbar {
  width: 12px; /* Ширина скроллбара */
  }
`

const StyledMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  margin-bottom: 16px;
  &: hover {
    color: #B672FF;
    text-decoration: underline;
`

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
        <StyledSearchPopupMenu className={`search__pop_menu ${isOpen ? "active" : ""}`} ref={menuRef}>
          <StyledPopMenuFind scroll={scroll}>
            {arr.map((item, index) => (
              <StyledMenuItem key={index}>{item}</StyledMenuItem>
            ))}
          </StyledPopMenuFind>
        </StyledSearchPopupMenu>
      </div>
    </>
  );
}
