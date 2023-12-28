import * as SAudio from "../AudioPlayer/AudioPlayer.styles";
import {useEffect, useState} from "react";
import {useThemeContext} from "../../contexts/color_theme";

export default function AudioPlayerInfo({name, author}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);
    const {theme} = useThemeContext();
    return (
       <>
           {isLoading ? (
               <div>
                   <img src="/img/placeholders/track_3.png" alt="track 3" />
               </div>) : (<>
               <SAudio.TrackPlayImage $theme={theme}>
                   <SAudio.TrackPlaySvg alt="music">
                       <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                   </SAudio.TrackPlaySvg>
               </SAudio.TrackPlayImage>
               <SAudio.TrackPlayAuthor>
                   <SAudio.TrackPlayAuthorLink $theme={theme} href="http://"
                   >{name}
                   </SAudio.TrackPlayAuthorLink
                   >
               </SAudio.TrackPlayAuthor>
               <SAudio.TrackPlayAlbum>
                   <SAudio.TrackPlayAlbumLink $theme={theme} href="http://">{author}</SAudio.TrackPlayAlbumLink>
               </SAudio.TrackPlayAlbum>
           </>)}
       </>
    )
}