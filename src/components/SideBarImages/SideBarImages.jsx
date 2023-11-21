import * as S from './SideBarImages.styles'
export default function sideBarImages() {
	return (
		<>
		<S.SidebarItem>
			  <S.SideBarLink to="/category/1">
				<S.SideBarImg
				  src="/img/playlist01.png"
				  alt="day's playlist"
				/>
			  </S.SideBarLink>
			</S.SidebarItem>
			<S.SidebarItem>
			  <S.SideBarLink to="/category/2">
				<S.SideBarImg
				  src="/img/playlist02.png"
				  alt="day's playlist"
				/>
			  </S.SideBarLink>
			</S.SidebarItem>
			<S.SidebarItem>
			  <S.SideBarLink to="/category/3">
				<S.SideBarImg
				  src="/img/playlist03.png"
				  alt="day's playlist"
				/>
			  </S.SideBarLink>
			</S.SidebarItem>
			</>
	)
}