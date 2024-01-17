import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAllowed: false,
        access: null,
        refresh: null,
    },
    reducers: {
        allow: state => {
            state.isAllowed = true
        },
        prohibit: state => {
            state.isAllowed = false
        }
    }
})

export const {allow, prohibit} = authSlice;
export const authReducer = authSlice.reducer;