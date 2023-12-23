import NavMenuCatalog from '../MenuCatalog/NavMenuCatalog.jsx';
import { useState } from 'react';
import * as S from './NavMenu.styles'

export default function NavMenu({setAllowed}) {
	const [visible, setVisible] = useState(false);

	const toggleVisibility = () => setVisible(!visible);

	return (
		<S.MainNav>
		<S.NavLogo>
		  <S.LogoImage src="/img/logo.png" alt="logo" />
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
  