import { useState } from "react"

export default function SearchPopup({name}) {

	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<div class="range__buttons">
				<div onClick={() => setOpen(!isOpen)} class="filter__button button-author _btn-text">
					{name}
				</div>
				<nav className={`search__pop_menu ${isOpen ? "active" : ""}`}>
					<ul className="menu__list_track">
						<li className="menu__item">1</li>
						<li className="menu__item">2</li>
						<li className="menu__item">3</li>
						<li className="menu__item">4</li>
						<li className="menu__item">5</li>
						<li className="menu__item">6</li>
					</ul>
				</nav>
			</div>
		</>
	)
}