import SearchCenter from "../SearchCenter/SearchCenter.jsx";
import RangeTracks from "../RangeTracks/RangeTracks.jsx";
import CenterBlockContent from "../CenterBlockContent/CenterBlockContent.jsx";
import * as SS from "./TrackList.styles";

export default function TrackList({trackId}) {
	return (
		<SS.MainCenterBlock>
			<SearchCenter/>
			<RangeTracks />
			<CenterBlockContent trackId={trackId}/>
	  	</SS.MainCenterBlock>
	);
  }
  