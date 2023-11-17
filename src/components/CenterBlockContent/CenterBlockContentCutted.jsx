import Track from '../Track/Track';
import * as S from './CenterBlockContent.styles'
export default function CenterBlockContentCutted() {

    return (
        <S.CenterBlockContent>
            <S.ContentTitle>
                <S.Col01>Трек</S.Col01>
                <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
                <S.Col03>АЛЬБОМ</S.Col03>
                <S.Col04>
                    <S.PlayListTitleSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </S.PlayListTitleSvg>
                </S.Col04>
            </S.ContentTitle>
            <S.ContentPlayList>
                <Track track={"Guilt "} executor={"Nero"}
                       album={"Welcome Reality"} time={"4:44"}/>
                <Track track={"Elektro "} executor={"Dynoro, Outwork, Mr. Gee"}
                       album={"Elektro"} time={"2:22"}/>
                <Track track={"I’m Fire "} executor={"Ali Bakgor"}
                       album={"I’m Fire"} time={"2:22"}/>
                <Track track={"Non Stop"} track_add={"(Remix)"} executor={"Стоункат, Psychopath"}
                       album={"Non Stop"} time={"4:12"}/>
                <Track track={"Run Run"} track_add={"(feat. AR/CO)"} executor={"Jaded, Will Clarke, AR/CO"}
                       album={"Run Run"} time={"2:54"}/>
            </S.ContentPlayList>
        </S.CenterBlockContent>
    )
}