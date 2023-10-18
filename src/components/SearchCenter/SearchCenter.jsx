import {CenterBlockSearch, SearchText} from "./SearchCenter.styles";

export default function SearchCenter() {
	return (
		<CenterBlockSearch>
		  <svg class="search__svg">
			<use xlinkHref="img/icon/sprite.svg#icon-search"></use>
		  </svg>
		  <SearchText
			class="search__text"
			type="search"
			placeholder="Поиск"
			name="search"
		  />
		</CenterBlockSearch>
	)
}