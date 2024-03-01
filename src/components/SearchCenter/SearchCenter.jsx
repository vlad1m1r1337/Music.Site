import * as S from "./SearchCenter.styles";
import {useThemeContext} from "../../contexts/color_theme";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {change_filtr_flag, filter_search} from "../../store/idSlice";

export default function SearchCenter() {
	const {theme} = useThemeContext();
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		dispatch(filter_search({inputValue: inputValue}));
		if (inputValue !== '') {
			dispatch(change_filtr_flag({flag: true}));
		}
	}, [inputValue]);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<S.CenterBlockSearch>
		  <S.SearchSvg>
			  {theme.theme === "black" ? <use xlinkHref="img/icon/sprite.svg#icon-search"/> : <use xlinkHref="img/icon/sprite.svg#icon-search-black"/>}
		  </S.SearchSvg>
		  <S.SearchText
			onChange={handleInputChange}
			value={inputValue}
			$theme={theme}
			type="search"
			placeholder="Поиск"
			name="search"
		  />
		</S.CenterBlockSearch>
	)
}