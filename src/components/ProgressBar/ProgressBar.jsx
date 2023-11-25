import { useState } from "react";
import * as S from "./ProgressBar.styles";
export default function ProgressBar() {
    const [currentTime, setCurrentTime] = useState(0);

    return (
        <S.ProgressInput
            type="range"
            min={0}
            max={230}
            value={currentTime}
            step={0.01}
            onChange={(event) => setCurrentTime(event.target.value)}
            $color="#B672FF"
        />
    );
}
