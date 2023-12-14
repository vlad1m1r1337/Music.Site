import { useEffect, useState } from 'react';
import SideBarImages from '../SideBarImages/SideBarImages';
import * as S from './SideBar.styles'
import SideBarPreloader from "../SideBarPreloader/SideBarPreloader";

export default function SideBar({setAllowed}) {
	const [isLoading, setIsLoading] = useState(true);

	const signOut = () => {
		localStorage.removeItem('user');
		setAllowed(false);
	}
	useEffect(() => {
		setIsLoading(false);
	}, [])
	return (
		<S.MainSidebar>
		<S.SidebarPersonal>
		  <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
		  <S.SideBarIcon>
			<svg onClick={signOut} alt="logout">
			  <use xlinkHref="/img/icon/sprite.svg#logout"></use>
			</svg>
		  </S.SideBarIcon>
		</S.SidebarPersonal>
		<S.SideBarBlock>
		  <S.SideBarList>
			  {isLoading ? <SideBarPreloader/> : <SideBarImages/>}
		  </S.SideBarList>
		</S.SideBarBlock>
	  </S.MainSidebar>
	);
  }
  