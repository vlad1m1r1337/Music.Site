import './App.css';
import './css/signin.css';
import './css/style.css';
import './css/signup.css';
import './css/index.css';

import AudioPlayer from './components/AudioPlayer/AudioPlayer.jsx';
import NavMenu from './components/NavMenu/NavMenu.jsx';
import TrackList from './components/TrackList/TrackList.jsx';
import SideBar from './components/SideBar/SideBar.jsx';

function App() {
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
      </div>
    </div>
    </div>
  );
}

export default App;
