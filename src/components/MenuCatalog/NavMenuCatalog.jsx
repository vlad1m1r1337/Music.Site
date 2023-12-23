import * as S from './NavMenuCatalog.styles'

export default function NavMenuCatalog({setAllowed}) {
	const signOut = () => {
		localStorage.removeItem('user');
		setAllowed(false);
	}
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
		  </S.MenuList>
		</S.NavMenu>
	)
}