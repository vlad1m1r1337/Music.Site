import { useEffect, useState } from 'react';
import SideBarImages from '../SideBarImages/SideBarImages';
import * as S from './SideBar.styles'

export default function SideBar() {
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	return (
		<S.MainSidebar>
		<S.SidebarPersonal>
		  <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
		  <S.SideBarIcon>
			<svg alt="logout">
			  <use xlinkHref="img/icon/sprite.svg#logout"></use>
			</svg>
		  </S.SideBarIcon>
		</S.SidebarPersonal>
		<S.SideBarBlock>
		  <S.SideBarList>
			{isLoading ? (<S.SideBarItem>
			  <S.SideBarLink to='/'>
				<S.SideBarImg
				  src="img/placeholders/big.png"
				  alt="day's playlist"
				/>
			  </S.SideBarLink>
			</S.SideBarItem>) : <SideBarImages />}
		  </S.SideBarList>
		</S.SideBarBlock>
	  </S.MainSidebar>
	);
  }
  