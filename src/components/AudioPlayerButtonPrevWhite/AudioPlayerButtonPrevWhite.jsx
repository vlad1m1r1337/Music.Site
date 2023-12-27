import * as SAudio from "../AudioPlayer/AudioPlayer.styles";

export function AudioPlayerButtonPrevWhite({NotImplemented}) {
   return (
       <SAudio.PlayerBtnPrev onClick={NotImplemented}>
           <SAudio.PlayerBtnPrevSvg alt="prev">
               <use xlinkHref="/img/icon/sprite.svg#icon-prev-white"></use>
           </SAudio.PlayerBtnPrevSvg>
       </SAudio.PlayerBtnPrev>
   )
}