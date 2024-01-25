import * as S from "../CenterBlockContent/CenterBlockContent.styles";
import TrackPlaceholder from "../TrackPlaceholder/TrackPlaceholder";

export default function CenterBlockContentWithPlaceholders({amount}) {
    return (
        <S.CenterBlockContent>
            <S.ContentTitle>
                <S.Col01>Трек</S.Col01>
                <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
                <S.Col03>АЛЬБОМ</S.Col03>
                <S.Col04>
                    <S.PlayListTitleSvg alt="time">
                        <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                    </S.PlayListTitleSvg>
                </S.Col04>
            </S.ContentTitle>
            <S.ContentPlayList>
                {Array.from({ length: amount }).map((_, index) => (
                    <TrackPlaceholder key={index} />
                ))}
            </S.ContentPlayList>
        </S.CenterBlockContent>
    )
}