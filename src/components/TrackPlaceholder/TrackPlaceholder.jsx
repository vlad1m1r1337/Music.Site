import * as S from "../Track/Track.styles";

export default function TrackPlaceholder() {
    return (
        <>
          <S.PlayListItem>
              <S.TrackPlaceholder>
                  <S.TrackTitle>
                      <img src="/img/placeholders/track.png" alt="track_placeholder"/>
                  </S.TrackTitle>
              </S.TrackPlaceholder>
          </S.PlayListItem>
        </>
    )
}