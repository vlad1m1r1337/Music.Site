import {configureStore} from "@reduxjs/toolkit";
import {Reducer} from "./idSlice";
import {RerenderReducer} from "./rerender";

export default configureStore({
    reducer: {
        main: Reducer,
        rerender: RerenderReducer,
    },
});
