import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';
import styled from "styled-components";

//
// const Styled = styled.div`
//
// `

const StyledSidebarItem = styled.div`
	width: 250px;
	height: 150px;
	&: not(:last-child) {
	margin-bottom: 30px;
}
`

export default function sideBarImages() {
	return (
		<>
		<StyledSidebarItem>
			  <a class="sidebar__link" href="https://my.sky.pro/student-cabinet/showcase">
				<img
				  class="sidebar__img"
				  src="img/playlist01.png"
				  alt="day's playlist"
				/>
			  </a>
			</StyledSidebarItem>
			<StyledSidebarItem>
			  <a class="sidebar__link" href="https://my.sky.pro/student-cabinet/showcase">
				<img
				  class="sidebar__img"
				  src="img/playlist02.png"
				  alt="day's playlist"
				/>
			  </a>
			</StyledSidebarItem>
			<StyledSidebarItem>
			  <a class="sidebar__link" href="https://my.sky.pro/student-cabinet/showcase">
				<img
				  class="sidebar__img"
				  src="img/playlist03.png"
				  alt="day's playlist"
				/>
			  </a>
			</StyledSidebarItem>
			</>
	)
}