import {AudioPlayerButtonPrev} from "./AudioPlayerButtonPrev";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import {Provider} from "react-redux";
import store from "../../store";


describe("Attributes tests", () => {
    it('should set alt to prev', () => {
        const {container} = render(
            <Provider store={store}>
                <AudioPlayerButtonPrev />
            </Provider>
        )
    expect(screen.getByRole('svg')).toHaveAttribute("alt", "prev");
    });
})

// describe("<AudioPlayerButtonPrev />", () => {
//     it("should render successfully and match snapshot", () => {
//         const { container } = render(
//             <Provider store={store}>
//                 <AudioPlayerButtonPrev />
//             </Provider>
//         );
//         expect(container).toMatchSnapshot();
//     })
// });
