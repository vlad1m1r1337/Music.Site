import styled from "styled-components";

export const FilterButton = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid ${prop => prop.$font};
    border-radius: 60px;
    padding: 6px 20px;
    &: not(:last-child) {
    margin-right: 10px;
    }
`

export const BtnText = styled(FilterButton)`
    &: hover {
      border-color: ${prop => prop.$theme.popup_color_hover};
      color: ${prop => prop.$theme.popup_color_hover};
      cursor: pointer;
    }
    &: active {
    border-color: ${prop => prop.$theme.popup_color_active};
    color: ${prop => prop.$theme.popup_color_active};
    cursor: pointer;
    }
`

export const SearchPopupMenu = styled.nav`
  margin: 50px 0 0 0;
  background-color: ${prop => prop.$theme.background2};
  border: 1px solid ${prop => prop.$theme.background2};
  border-radius: 12px;
  transition: 0.3s;
  color: ${prop => prop.$theme.font};
  opacity: 0;
  visibility: hidden;
  position: absolute;
  width: 248px;
  ${props => props.$isOpen && `
    opacity: 1;
    visibility: visible;
  `}
`

export const PopMenuFind = styled.ul`
  overflow: ${props => (props.$scroll ? 'auto' : '')};
  height: ${props => (props.$scroll ? '133px' : '')};
  
  &::-webkit-scrollbar-thumb {
  background-color: ${props => props.$theme.popup_scroll};
  border-radius: 6px;
  margin-right: 5px;
  }
  &::-webkit-scrollbar {
  width: 12px; /* Ширина скроллбара */
  }
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  margin-bottom: 16px;
  &: hover {
    color: #B672FF;
    text-decoration: underline;
`