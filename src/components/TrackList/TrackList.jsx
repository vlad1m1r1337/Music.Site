import '../../App.css';
import '../../css/signin.css';
import '../../css/style.css';
import '../../css/signup.css';
import '../../css/index.css';
import SearchCenter from "../SearchCenter/SearchCenter.jsx";
import RangeTracks from "../RangeTracks/RangeTracks.jsx";
import CenterBlockContent from "../CenterBlockContent/CenterBlockContent.jsx";
import styled from "styled-components";

const MainCenterBlock = styled.div`
	width: auto;
	-webkit-box-flex: 3;
	-ms-flex-positive: 3;
	flex-grow: 3;
	padding: 20px 40px 20px 111px;
`

export default function TrackList() {
	return (
		<MainCenterBlock>
			<SearchCenter/>
			<RangeTracks />
			<CenterBlockContent/>
	  	</MainCenterBlock>
	);
  }
  