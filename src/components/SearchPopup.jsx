import { useState } from "react"

export default function SearchPopup({name}) {

	const [state, ReverseState] = useState(false);

	const toggleState = () => ReverseState(!state);

	return (
		<div onClick={toggleState} class="performer">
			<div class="filter__button button-author _btn-text">
				{name}
			</div>
			{state && (
			<div>
				<img src="img/ranking/perfomer.png" alt="ranging" />
			</div>)}
		</div>
	)
}