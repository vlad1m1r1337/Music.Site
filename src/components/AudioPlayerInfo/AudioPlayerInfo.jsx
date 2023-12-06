import * as SAudio from "../AudioPlayer/AudioPlayer.styles";
import {useEffect, useState} from "react";

export default function AudioPlayerInfo({name, author}) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);

    }, []);

    return (
       <>
           {isLoading ? (
               <div>
                   <img src="/img/placeholders/track_3.png" alt="track 3" />
               </div>) : (<>
               <SAudio.TrackPlayImage>
                   <SAudio.TrackPlaySvg alt="music">
                       <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                   </SAudio.TrackPlaySvg>
               </SAudio.TrackPlayImage>
               <SAudio.TrackPlayAuthor>
                   <SAudio.TrackPlayAuthorLink href="http://"
                   >{name}
                   </SAudio.TrackPlayAuthorLink
                   >
               </SAudio.TrackPlayAuthor>
               <SAudio.TrackPlayAlbum>
                   <SAudio.TrackPlayAlbumLink href="http://">{author}</SAudio.TrackPlayAlbumLink>
               </SAudio.TrackPlayAlbum>
           </>)}
       </>
    )
}