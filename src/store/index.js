import {configureStore} from "@reduxjs/toolkit";
import {idReducer} from "./idSlice";

const rootReducer = {
    id: idReducer,
}

export const store = configureStore({
        reducer: rootReducer,
})
