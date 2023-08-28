import '../App.css';
import '../css/signin.css';
import '../css/style.css';
import '../css/signup.css';
import '../css/index.css';

import SearchCenter from "./SearchCenter.js";

import RangeTracks from "./RangeTracks.js";

import CenterBlockContent from "./CenterBlockContent.js";

export default function TrackList() {
	return (
		<div class="main__centerblock centerblock">
			<SearchCenter/>
			<RangeTracks />
			<CenterBlockContent/>
	  	</div>
	);
  }
  