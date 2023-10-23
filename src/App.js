import './App.css';

import AudioPlayer from './components/AudioPlayer/AudioPlayer.jsx';
import NavMenu from './components/NavMenu/NavMenu.jsx';
import TrackList from './components/TrackList/TrackList.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import {createGlobalStyle} from "styled-components";
import * as S from "./App.styles"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }


  ul li {
    list-style: none;
  }

  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("../public/fonts/StratosSkyeng.woff") format("woff"),
    url("../public/fonts/StratosSkyeng.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }
`

export default function App() {
  return (
    <div>
        <GlobalStyle/>
          <S.Wrapper>
            <S.Container>
                <S.Main>
                  <NavMenu/>
                  <TrackList/>
                  <SideBar/>
                </S.Main>
            <AudioPlayer />
            </S.Container>
        </S.Wrapper>
    </div>
  );
}

