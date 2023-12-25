import * as S from './NavMenuCatalog.styles'
import {useThemeContext} from "../../contexts/color_theme";

export default function NavMenuCatalog({setAllowed}) {
	const signOut = () => {
		localStorage.removeItem('user');
		setAllowed(false);
	}
	const {toggleTheme} = useThemeContext();

	return (
		<S.NavMenu>
		  <S.MenuList>
			<S.LeftMenuItem>
			  <S.MenuLink to="/">Главное</S.MenuLink>
			</S.LeftMenuItem>
			<S.LeftMenuItem>
			  <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
			</S.LeftMenuItem>
			<S.LeftMenuItem>
			  <S.MenuLink onClick={signOut}>Выйти</S.MenuLink>
			</S.LeftMenuItem>
			<img onClick={toggleTheme} src="/img/change_theme(black).png" alt="change_theme"/>
		  </S.MenuList>
		</S.NavMenu>
	)
}
