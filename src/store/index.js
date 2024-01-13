import {configureStore} from "@reduxjs/toolkit";
import {idSlice} from "./idSlice";

export const store = configureStore({
    reducer: idSlice.reducer
})