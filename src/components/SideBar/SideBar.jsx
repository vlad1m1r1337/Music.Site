import { useEffect, useState } from 'react';
import SideBarImages from '../SideBarImages/SideBarImages';
import * as S from './SideBar.styles'
import SideBarPreloader from "../SideBarPreloader/SideBarPreloader";
import {useThemeContext} from "../../contexts/color_theme";
import {SideBarIconBlack} from "../SideBarIconBlack/SideBarIconBlack";
import {SideBarIconWhite} from "../SideBarIconWhite/SideBarIconWhite";
import {useSelector} from "react-redux";

export default function SideBar() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, [])
	const login = useSelector(state => state.main.login);
	const {theme} = useThemeContext();

	return (
		<S.MainSidebar>
		<S.SidebarPersonal>
		<S.SidebarPersonalName>{login}</S.SidebarPersonalName>
			{theme.theme === "black" ? <SideBarIconBlack/> : <SideBarIconWhite/>}
		</S.SidebarPersonal>
		<S.SideBarBlock>
		  <S.SideBarList>
			  {isLoading ? <SideBarPreloader/> : <SideBarImages/>}
		  </S.SideBarList>
		</S.SideBarBlock>
	  </S.MainSidebar>
	);
  }
  