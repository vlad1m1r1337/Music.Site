import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';

export default function SearchCenter() {
	return (
		<div class="centerblock__search search">
		  <svg class="search__svg">
			<use xlinkHref="img/icon/sprite.svg#icon-search"></use>
		  </svg>
		  <input
			class="search__text"
			type="search"
			placeholder="Поиск"
			name="search"
		  />
		</div>
	)
}