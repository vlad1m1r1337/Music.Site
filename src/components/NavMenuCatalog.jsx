import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';

export default function NavMenuCatalog() {
	return (
		<div class="nav__menu menu">
		  <ul class="menu__list">
			<li class="menu__item">
			  <a href="https://my.sky.pro/student-cabinet/showcase" class="menu__link">Главное</a>
			</li>
			<li class="menu__item">
			  <a href="https://my.sky.pro/student-cabinet/showcase" class="menu__link">Мой плейлист</a>
			</li>
			<li class="menu__item">
			  <a href="../signin.html" class="menu__link">Войти</a>
			</li>
		  </ul>
		</div>
	)
}