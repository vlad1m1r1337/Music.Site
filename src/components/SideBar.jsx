import { useEffect, useState } from 'react';
import SideBarImages from './SideBarImages';

export default function SideBar() {
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	return (
		<div class="main__sidebar sidebar">
		<div class="sidebar__personal">
		  <p class="sidebar__personal-name">Sergey.Ivanov</p>
		  <div class="sidebar__icon">
			<svg alt="logout">
			  <use xlinkHref="img/icon/sprite.svg#logout"></use>
			</svg>
		  </div>
		</div>
		<div class="sidebar__block">
		  <div class="sidebar__list">
			{isLoading ? (<div class="sidebar__item">
			  <a class="sidebar__link" href="https://my.sky.pro/student-cabinet/showcase">
				<img
				  class="sidebar__img"
				  src="img/placeholders/big.png"
				  alt="day's playlist"
				/>
			  </a>
			</div>) : <SideBarImages />}	
		  </div>
		</div>
	  </div>
	);
  }
  