import * as S from './NavMenuCatalog.styles'


export default function NavMenuCatalog() {
	return (
		<S.NavMenu>
		  <S.MenuList>
			<S.LeftMenuItem class="left__menu_item">
			  <S.MenuLink href="https://my.sky.pro/student-cabinet/showcase">Главное</S.MenuLink>
			</S.LeftMenuItem>
			<S.LeftMenuItem class="left__menu_item">
			  <S.MenuLink href="https://my.sky.pro/student-cabinet/showcase">Мой плейлист</S.MenuLink>
			</S.LeftMenuItem>
			<S.LeftMenuItem class="left__menu_item">
			  <S.MenuLink href="../signin.html">Войти</S.MenuLink>
			</S.LeftMenuItem>
		  </S.MenuList>
		</S.NavMenu>
	)
}