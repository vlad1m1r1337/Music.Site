import * as SAudio from "../AudioPlayer/AudioPlayer.styles";

export default function AudioPlayerBarVolumeBlock({volume, setVolume}) {
   return (
       <SAudio.BarVolumeBlock>
           <SAudio.VolumeContent>
               <SAudio.VolumeImage>
                   <SAudio.VolumeSvg alt="volume">
                       <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                   </SAudio.VolumeSvg>
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