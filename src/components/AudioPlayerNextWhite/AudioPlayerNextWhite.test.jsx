import {AudioPlayerNextWhite} from "./AudioPlayerNextWhite";
import {render} from "@testing-library/react";
import {nextTrack} from "../AudioPlayerActiveButtons/AudioPlayerActiveButtons";

describe("<AudioPlayerNextWhite/>", () => {
    it("should render successfully and match snapshot", () => {
        const { container } = render(<AudioPlayerNextWhite nextTrack={nextTrack} />);
        expect(container).toMatchSnapshot();
    })
});