import SearchCenter from "../SearchCenter/SearchCenter.jsx";
import RangeTracks from "../RangeTracks/RangeTracks.jsx";
import CenterBlockContent from "../CenterBlockContent/CenterBlockContent.jsx";
import * as SS from "./TrackList.styles";

export default function TrackList({setId, id, tracks}) {
	return (
		<SS.MainCenterBlock>
			<SearchCenter/>
			<RangeTracks />
			{/*<button onClick={() => setId(!id)}>Some button</button>*/}
			<CenterBlockContent tracks={tracks} setId={setId} objId={id}/>
	  	</SS.MainCenterBlock>
	);
  }
  