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
        },
        set_allow: (state, action) => {
            state.isAllowed = action.payload.allowed;
        }
    }
})

export const {allow, prohibit, set_allow} = authSlice.actions;
export const authReducer = authSlice.reducer;