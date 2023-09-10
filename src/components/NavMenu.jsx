import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';
import NavMenuCatalog from './NavMenuCatalog.jsx';
import { useState } from 'react';


export default function NavMenu() {
	const [visible, setVisible] = useState(true);

	const toggleVisibility = () => setVisible(!visible);

	return (
		<nav class="main__nav nav">
		<div class="nav__logo logo">
		  <img class="logo__image" src="/img/logo.png" alt="logo" />
		</div>
		<div onClick={toggleVisibility} class="nav__burger burger">
		  <span class="burger__line"></span>
		  <span class="burger__line"></span>
		  <span class="burger__line"></span>
		</div>
		{visible && (<NavMenuCatalog />)}
	  </nav>
	);
  }
  