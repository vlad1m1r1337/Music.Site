import { useEffect, useState } from 'react';
import SideBarImages from '../SideBarImages/SideBarImages';
import * as S from './SideBar.styles'
import SideBarPreloader from "../SideBarPreloader/SideBarPreloader";
import {useThemeContext} from "../../contexts/color_theme";
import {SideBarIconBlack} from "../SideBarIconBlack/SideBarIconBlack";
import {SideBarIconWhite} from "../SideBarIconWhite/SideBarIconWhite";

export default function SideBar({setAllowed}) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, [])

	const {theme} = useThemeContext();
	return (
		<S.MainSidebar>
		<S.SidebarPersonal>
		  {/*<S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>*/}
		{theme.theme === "black" ? <SideBarIconBlack setAllowed={setAllowed}/> : <SideBarIconWhite setAllowed={setAllowed}/>}
		</S.SidebarPersonal>
		<S.SideBarBlock>
		  <S.SideBarList>
			  {isLoading ? <SideBarPreloader/> : <SideBarImages/>}
		  </S.SideBarList>
		</S.SideBarBlock>
	  </S.MainSidebar>
	);
  }
  