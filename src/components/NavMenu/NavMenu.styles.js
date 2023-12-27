import styled from 'styled-components';

export const MainNav = styled.nav`
	width: 244px;
	background-color: ${prop => prop.$theme.left_side_bar};
	padding: 20px 0 20px 36px;
`

export const NavLogo = styled.div`
	width: 113.33px;
	height: 43px;
	padding: 13px 0 13px 0;
	background-color: transparent;
	margin-bottom: 20px;
`

export const LogoImage = styled.img`
	width: 113.33px;
	height: 17px;
	color: #181818;
`

export const NavBurger = styled.div`
	width: 20px;
	height: 36px;
	padding: 13px 0;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
`

export const BurgerLine = styled.span`
	display: inline-block;
	width: 100%;
	height: 1px;
	background-color: ${prop => prop.$theme.font};
`