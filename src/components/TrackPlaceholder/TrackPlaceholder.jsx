import * as S from "../Track/Track.styles";
import {useThemeContext} from "../../contexts/color_theme";

export default function TrackPlaceholder() {

    const {theme} = useThemeContext();
    return (
        <>
          <S.PlayListItem>
              <S.TrackPlaceholder>
                  <S.TrackTitle>
                      {theme.theme === "black" ? <img src="/img/placeholders/track.png" alt="track_placeholder"/> : <img src="/img/placeholders/track_white.svg" alt="track_placeholder_white"/>}
                  </S.TrackTitle>
              </S.TrackPlaceholder>
          </S.PlayListItem>
        </>
    )
}