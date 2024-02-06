import {AudioPlayerButtonRepeatWhite} from "./AudioPlayerButtonRepeatWhite";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../store";

describe("<AudioPlayerButtonRepeatWhite/>", () => {
    it("should render successfully and match snapshot", () => {
        const {container} = render(
            <Provider store={store}>
                <AudioPlayerButtonRepeatWhite />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    })
});