import styled from 'styled-components'
import {Link} from "react-router-dom";

export const NavMenu = styled.div`
	display: block;
	visibility: visible;
`

export const MenuList = styled.ul`
	padding: 18px 0 10px 0;
`

export const LeftMenuItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 5px 0;
	margin-bottom: 16px;
`

export const MenuLink = styled(Link)`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
    color: ${prop => (prop.$theme.font)};
`

export const ChangeThemeImg = styled.img`
    cursor: pointer;
`
