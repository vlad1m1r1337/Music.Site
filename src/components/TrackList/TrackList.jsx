import SearchCenter from "../SearchCenter/SearchCenter.jsx";
import RangeTracks from "../RangeTracks/RangeTracks.jsx";
import CenterBlockContent from "../CenterBlockContent/CenterBlockContent.jsx";
import * as SS from "./TrackList.styles";

export default function TrackList({tracks}) {
	return (
		<SS.MainCenterBlock>
			<SearchCenter/>
			<RangeTracks />
			<CenterBlockContent tracks={tracks}/>
	  	</SS.MainCenterBlock>
	);
  }
  