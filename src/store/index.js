import { configureStore, createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
    name: 'id',
    initialState: {
        value: -1,
        amount_id_tracks: -1
    },
    reducers: {
        increment: state => {
            state.value = (state.value + 1) % state.amount_id_tracks
            console.log(state.value)
            console.log("amount", state.amount_id_tracks)
        },
        decrement: state => {
            state.value - 1 < 0 ? state.value = state.amount_id_tracks : state.value = (state.value - 1) % state.amount_id_tracks
        },
        chose: (state, action) => {
            state.value = action.payload.id
        },
        set_def: state => {
            state.value = -1;
        },
        set_amount_id_tracks: function (state, action) {
            state.amount_id_tracks = action.payload.tracks.length - 1;
        }
    }
})

export const store = configureStore({
    reducer: idSlice.reducer
})

export const { increment, decrement, chose , set_def, set_amount_id_tracks} = idSlice.actions;
