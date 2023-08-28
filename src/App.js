import './App.css';
import './css/signin.css';
import './css/style.css';
import './css/signup.css';
import './css/index.css';

import AudioPlayer from './components/AudioPlayer.js';
import NavMenu from './components/NavMenu.js';
import TrackList from './components/TrackList.js';
import SideBar from './components/SideBar.js';

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
        <footer class="footer"></footer>
      </div>
    </div>
    </div>
  );
}

export default App;
