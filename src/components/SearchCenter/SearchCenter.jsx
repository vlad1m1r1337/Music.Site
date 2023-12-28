import * as S from "./SearchCenter.styles";
import {useThemeContext} from "../../contexts/color_theme";

export default function SearchCenter() {
	const {theme} = useThemeContext();
	return (
		<S.CenterBlockSearch>
		  <S.SearchSvg>
			  {theme.theme === "black" ? <use xlinkHref="img/icon/sprite.svg#icon-search"/> : <use xlinkHref="img/icon/sprite.svg#icon-search-black"/>}
			  {/*<use xlinkHref="img/icon/sprite.svg#icon-search-black"></use>*/}
			  {/*<use xlinkHref="img/icon/sprite.svg#icon-search"></use>*/}
		  </S.SearchSvg>
		  <S.SearchText $theme={theme}
			type="search"
			placeholder="Поиск"
			name="search"
		  />
		</S.CenterBlockSearch>
	)
}