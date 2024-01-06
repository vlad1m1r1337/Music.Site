import { configureStore, createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
    name: 'id',
    initialState: {
        id: -1,
        amount_id_tracks: -1,
        is_playing: true,
    },
    reducers: {
        increment: state => {
            state.id = (state.id + 1) % state.amount_id_tracks
        },
        decrement: state => {
            state.id - 1 < 0 ? state.id = state.amount_id_tracks : state.id = (state.id - 1) % state.amount_id_tracks
        },
        chose: (state, action) => {
            state.id = action.payload.id
        },
        set_def: state => {
            state.id = -1;
        },
        set_amount_id_tracks: function (state, action) {
            state.amount_id_tracks = action.payload.tracks.length - 1;
        },
        set_is_playing_def: (state) => {
            state.is_playing = true
        },
        set_is_playing: (state, action) => {
            state.is_playing = action.payload.bool
        }
    }
})

export const store = configureStore({
    reducer: idSlice.reducer
})

export const {set_is_playing_def, increment, decrement, chose , set_def, set_amount_id_tracks, set_is_playing} = idSlice.actions;
