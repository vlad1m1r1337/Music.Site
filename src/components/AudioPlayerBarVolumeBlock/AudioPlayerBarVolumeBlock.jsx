import * as SAudio from "../AudioPlayer/AudioPlayer.styles";
import {useThemeContext} from "../../contexts/color_theme";

export default function AudioPlayerBarVolumeBlock({volume, setVolume}) {
    const {theme} = useThemeContext();

   return (
       <SAudio.BarVolumeBlock>
           <SAudio.VolumeContent>
               <SAudio.VolumeImage>
                   {theme.theme === "black" ? (
                       <SAudio.VolumeSvg alt="volume">
                           <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                       </SAudio.VolumeSvg>
                   ) : (
                       <SAudio.VolumeSvg alt="volume">
                           <use xlinkHref="/img/icon/sprite.svg#icon-volume-white"></use>
                       </SAudio.VolumeSvg>
                   )}
               </SAudio.VolumeImage>
               <SAudio.VolumeProgress>
                   <SAudio.VolumeProgressLine
                       type="range"
                       min={0}
                       max={100}
                       value={volume}
                       onChange={(event) => setVolume(event.target.value)}
                   />
               </SAudio.VolumeProgress>
           </SAudio.VolumeContent>
       </SAudio.BarVolumeBlock>
   )
}