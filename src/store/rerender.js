import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: "rerender",
    initialState: {
        rerender: -1,
    },
    reducers: {
        set_rerender: (state, action) => {
            state.rerender = action.payload.rerender;
        },
    },
});

export const { set_rerender } = Slice.actions;
export const RerenderReducer = Slice.reducer;