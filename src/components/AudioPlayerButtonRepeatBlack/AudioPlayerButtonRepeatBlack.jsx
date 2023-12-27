import * as SAudio from "../AudioPlayer/AudioPlayer.styles";

export function AudioPlayerButtonRepeatBlack({repeat, cycleExec}) {
   return (
       <SAudio.PlayerBtnRepeat $repeatBool={repeat} onClick={cycleExec}>
           <SAudio.PlayerBtnRepeatSvg $repeat={Boolean(repeat)} alt="repeat">
               <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
           </SAudio.PlayerBtnRepeatSvg>
       </SAudio.PlayerBtnRepeat>
   )
}