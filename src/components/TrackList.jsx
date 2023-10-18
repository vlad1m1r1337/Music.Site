import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';

import SearchCenter from "./SearchCenter.jsx";

import RangeTracks from "./RangeTracks.jsx";

import CenterBlockContent from "./CenterBlockContent/CenterBlockContent.jsx";

export default function TrackList() {
	return (
		<div class="main__centerblock centerblock">
			<SearchCenter/>
			<RangeTracks />
			<CenterBlockContent/>
	  	</div>
	);
  }
  