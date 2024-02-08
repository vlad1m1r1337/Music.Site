import {AudioPlayerButtonPrev} from "./AudioPlayerButtonPrev";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import store from "../../store";

describe("<AudioPlayerButtonPrev />", () => {
    it("should render successfully and match snapshot", () => {
        const { container } = render(
            <Provider store={store}>
                <AudioPlayerButtonPrev />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    })
});



