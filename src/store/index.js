import {configureStore} from "@reduxjs/toolkit";
import {Reducer} from "./idSlice";

export default configureStore({
    reducer: {
        main: Reducer,
    },
});
