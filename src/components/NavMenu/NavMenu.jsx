import NavMenuCatalog from '../MenuCatalog/NavMenuCatalog.jsx';
import { useState } from 'react';
import * as S from './NavMenu.styles'
import {useThemeContext} from "../../contexts/color_theme";

export default function NavMenu({setAllowed}) {
	const [visible, setVisible] = useState(false);

	const toggleVisibility = () => setVisible(!visible);

	const {theme} = useThemeContext();
	return (
		<S.MainNav $theme={theme}>
		<S.NavLogo>
			{theme.theme === "black" ? <S.LogoImage src="/img/logo.png" alt="logo"/> : <S.LogoImage src="/img/logo_black.png" alt="logo"/>}
		</S.NavLogo>
		<S.NavBurger onClick={toggleVisibility}>
		  <S.BurgerLine></S.BurgerLine>
		  <S.BurgerLine></S.BurgerLine>
		  <S.BurgerLine></S.BurgerLine>
		</S.NavBurger>
		{visible && (<NavMenuCatalog setAllowed={setAllowed} />)}
	  </S.MainNav>
	);
  }
  