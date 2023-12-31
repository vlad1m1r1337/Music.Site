import * as S from './NavMenuCatalog.styles'
import {useThemeContext} from "../../contexts/color_theme";

export default function NavMenuCatalog({setAllowed}) {
	const signOut = () => {
		localStorage.removeItem('user');
		setAllowed(false);
	}
	const {toggleTheme} = useThemeContext();

	const {theme} = useThemeContext();
	return (
		<S.NavMenu>
		  <S.MenuList>
			<S.LeftMenuItem>
			  <S.MenuLink $theme={theme} to="/">Главное</S.MenuLink>
			</S.LeftMenuItem>
			<S.LeftMenuItem>
			  <S.MenuLink $theme={theme} to="/favorites">Мой плейлист</S.MenuLink>
			</S.LeftMenuItem>
			<S.LeftMenuItem>
			  <S.MenuLink $theme={theme} onClick={signOut}>Выйти</S.MenuLink>
			</S.LeftMenuItem>
			  { theme.theme === "black" ? <img onClick={toggleTheme} src="/img/change_theme(black).svg" alt="change_theme"/> :
											<img onClick={toggleTheme} src="/img/change_theme(white).svg" alt="change_theme"/>}
		  </S.MenuList>
		</S.NavMenu>
	)
}
