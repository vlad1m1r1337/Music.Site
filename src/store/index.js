import {configureStore} from "@reduxjs/toolkit";
import {idReducer} from "./idSlice";
import {authReducer} from "./authSlice";

export default configureStore({
    reducer: {
        ids: idReducer,
        extra: authReducer,
    },
});
