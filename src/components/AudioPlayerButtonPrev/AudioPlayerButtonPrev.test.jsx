import {AudioPlayerButtonPrev} from "./AudioPlayerButtonPrev";
import {getByRole, render, screen} from "@testing-library/react";
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

describe("Attributes tests", () => {
    it('should set alt to prev', () => {
        const {container} = render(
            <Provider store={store}>
                <AudioPlayerButtonPrev />
            </Provider>
        )
    });
    // screen.debug();
    // expect(screen.getByRole("svg")).toHaveAttribute("alt", "button");
})
