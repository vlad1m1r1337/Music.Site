import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAllowed: false,
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