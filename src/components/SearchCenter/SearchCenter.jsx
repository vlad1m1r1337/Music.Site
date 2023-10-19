import * as S from "./SearchCenter.styles";

export default function SearchCenter() {
	return (
		<S.CenterBlockSearch>
		  <S.SearchSvg>
			<use xlinkHref="img/icon/sprite.svg#icon-search"></use>
		  </S.SearchSvg>
		  <S.SearchText
			type="search"
			placeholder="Поиск"
			name="search"
		  />
		</S.CenterBlockSearch>
	)
}