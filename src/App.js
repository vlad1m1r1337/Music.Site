import './App.css';
import './css/signin.css';
import './css/style.css';
import './css/signup.css';
import './css/index.css';

import AudioPlayer from './components/AudioPlayer.jsx';
import NavMenu from './components/NavMenu.jsx';
import TrackList from './components/TrackList.jsx';
import SideBar from './components/SideBar.jsx';
//import { useEffect, useState } from 'react';

function App() {
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //   const delay = 5000;

    //   setTimeout(() => {
    //     setIsLoading(false);
    //     console.log("Loading finished after 5 seconds");
    //   }, delay);
    // }, [])

  return (
    <div className="App">
      <div class="wrapper">
      <div class="container">
        <main class="main">
          <NavMenu/>
          <TrackList/>
          <SideBar/>
        </main>
        <AudioPlayer />
        <footer class="footer"></footer>
      </div>
    </div>
    </div>
  );
}

export default App;
