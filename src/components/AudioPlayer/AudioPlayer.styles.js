import styled from "styled-components";

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${prop => prop.background};
`

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`

export const BarPlayerBlock = styled.div`
  background-color: ${prop => prop.$theme.background};
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const PlayerBtnPrev = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 23px;
  cursor: pointer;
`

export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`

export const PlayerBtnPlay = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 23px;
  cursor: pointer;
`

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`

export const PlayerBtnPlayImg = styled.img`
  width: 22px;
  height: 20px;
`

export const PlayerBtnNext = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 28px;
  fill: #a53939;
  cursor: pointer;
`

export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`

export const PlayerBtnRepeat = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 24px;
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
	fill: transparent;
	stroke: ${prop => prop.$theme.placeholder};
	cursor: pointer;
  }
  &:active {
	fill: #696969;
	stroke: ${prop => prop.$theme.placeholder};
	cursor: pointer;
  }
`

export const PlayerBtnRepeatSvg = styled.svg`
	width: 18px;
	height: 12px;
	fill: transparent;
    stroke: ${prop => prop.$repeat ? prop.$theme.font2 : prop.$theme.active_icons};
  `

export const PlayerBtnRepeatSvgWhite = styled.svg`
	width: 18px;
	height: 12px;
	fill: transparent;
    stroke: ${prop => prop.$repeat ? prop.$theme.font2 : prop.$theme.active_icons};
  `

export const PlayerBtnShuffle = styled.div`
	padding: 5px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	&:hover svg {
	fill: transparent;
	stroke: ${prop => prop.$theme.hover_icons};
	cursor: pointer;
	}
	&:active svg {
	fill: transparent;
	stroke: ${prop => prop.$theme.theme === "black" ? "#ffffff" : "#000000"};
	cursor: pointer;
	}
	&:active {
	fill: #696969;
	stroke: ${prop => prop.$theme.theme === "black" ? "#ffffff" : "#000000"};
	cursor: pointer;
	}
`

export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: ${prop => prop.$shuffle ? prop.$theme.active_icons : prop.$theme.font2};
`

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`

export const TrackPlayContain = styled.div`
	width: auto;
	display: -ms-grid;
	display: grid;
	-ms-grid-columns: auto 1fr;
	grid-template-columns: auto 1fr;
	grid-template-areas: "image author" "image album";
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
`

export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: ${prop => prop.$theme.background2};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  grid-row: 1;
  grid-row: 2;
  grid-column: 1;
  grid-area: image;
`

export const TrackPlaySvg = styled.svg`
	width: 18px;
	height: 17px;
	fill: transparent;
	stroke: #4e4e4e;
`

export const TrackPlayAuthor = styled.div`
	grid-row: 1;
	grid-column: 2;
	grid-area: author;
	min-width: 49px;
`

export const TrackPlayAuthorLink = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: ${prop => prop.$theme.font};
	white-space: nowrap;
`

export const TrackPlayAlbum = styled.div`
	grid-row: 2;
	grid-column: 2;
	grid-area: album;
	min-width: 49px;
`

export const TrackPlayLikeDis = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 26%;
`

export const BtnIcon = styled.div`
    &:hover svg {
      fill: transparent;
      cursor: pointer;
      stroke: ${props => props.$theme.hover_icons};
    }
    &:active svg {
    fill: transparent;
    stroke: ${prop => prop.$theme.active_icons};
    }
    &:active {
    .track-play__like-svg {
      fill: ${prop => prop.$theme.active_fill_icons};
      stroke: ${prop => prop.$theme.active_icons};
      cursor: pointer;
    }
    }
    &:active {
    .track-play__dislike-svg {
      fill: ${prop => prop.$theme.active_fill_icons};
      stroke: white;
      cursor: pointer;
    }
    }
`

export const TrackPlayLike = styled(BtnIcon)`
  padding: 5px;
`

export const TrackPlayDislike = styled(BtnIcon)`
  margin-left: 28.5px;
`

export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke:${prop => prop.$theme.font2};
`

export const TrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: ${prop => prop.$theme.font2};
`

export const TrackPlayAlbumLink = styled.a`
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 24px;
    color: ${prop => prop.$theme.font};
`

export const BarVolumeBlock = styled.div`
	width: auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
`

export const VolumeImage = styled.div`
	width: 13px;
	height: 18px;
	margin-right: 17px;
`

export const VolumeSvg = styled.svg`
	width: 13px;
	height: 18px;
	fill: transparent;
`

export const VolumeProgress = styled.div`
	width: 109px;
`

export const Btn = styled.input`
  cursor: pointer;
`

export const VolumeProgressLine = styled(Btn)`
  width: 109px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Time = styled.div`
  align-self: end;
  color: #696969;
`

