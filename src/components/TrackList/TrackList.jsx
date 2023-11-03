import SearchCenter from "../SearchCenter/SearchCenter.jsx";
import RangeTracks from "../RangeTracks/RangeTracks.jsx";
import CenterBlockContent from "../CenterBlockContent/CenterBlockContent.jsx";
import * as S from "./TrackList.styles";

export default function TrackList() {
	return (
		<S.MainCenterBlock>
			<SearchCenter/>
			<RangeTracks />
			<CenterBlockContent/>
	  	</S.MainCenterBlock>
	);
  }
  