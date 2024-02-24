import {AudioPlayerButtonRepeatBlack} from "./AudioPlayerButtonRepeatBlack";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import store from "../../store";

describe("<AudioPlayerButtonRepeatBlack/>", () => {
   it("should render successfully and match snapshot", () => {
       const {container} = render(
           <Provider store={store}>
               <AudioPlayerButtonRepeatBlack />
           </Provider>
       );
       expect(container).toMatchSnapshot();
   })
});
