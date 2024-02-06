import {AudioPlayerButtonPrevWhite} from "./AudioPlayerButtonPrevWhite";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../store";

describe("<AudioPlayerButtonPrevWhite/>", () => {
    it("should render successfully and match snapshot", () => {
        const { container } = render(
            <Provider store={store}>
                <AudioPlayerButtonPrevWhite />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    })
})