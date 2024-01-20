import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
    name: 'id',
    initialState: {
        id: -1,
        amount_id_tracks: -1,
        is_playing: true,
        shuffle_arr: ['null'],
        shuffle_flag: 1 // флаг, показывающий к какой кнопке(вперёд, назад) относится массив shuffle_arr
    },
    reducers: {
        increment: state => {
            state.id = (state.id + 1) % state.amount_id_tracks;
        },
        decrement: state => {
            state.id - 1 < 0 ? state.id = state.amount_id_tracks : state.id = (state.id - 1) % state.amount_id_tracks;
        },
        chose: (state, action) => {
            state.id = action.payload.id;
        },
        set_def: state => {
            state.id = -1;
        },
        set_amount_id_tracks: function (state, action) {
            state.amount_id_tracks = action.payload.tracks.length - 1;
        },
        set_is_playing_def: (state) => {
            state.is_playing = true;
        },
        set_is_playing: (state, action) => {
            state.is_playing = action.payload.bool;
        },
        set_shuffle_first: (state, action) => {
            state.shuffle_arr.splice(0, state.shuffle_arr.length);
            state.shuffle_arr[0] = action.payload.flag;

        },
        set_def_shuffle_arr: state => {
            state.shuffle_arr[0] = 'null';
            state.shuffle_flag = 1;
        },
        shuffle_next: state => {
            if (state.shuffle_flag < 1) {
                state.id = state.shuffle_arr[state.shuffle_arr.length - 2];
                state.shuffle_arr.pop();
            }
            else {
                state.id = Math.floor(Math.random() * (state.amount_id_tracks + 1));
                state.shuffle_arr.push(state.id);
            }
            state.shuffle_flag++;
        },
        shuffle_prev: state => {
            if (state.shuffle_flag > 1) {
                state.id = state.shuffle_arr[state.shuffle_arr.length - 2];
                state.shuffle_arr.pop();
            }
            else {
                state.id = Math.floor(Math.random() * (state.amount_id_tracks + 1));
                state.shuffle_arr.push(state.id);
            }
            state.shuffle_flag--;
        },
    }
})

export const {set_def_shuffle_arr, set_shuffle_first, push_first_shuffle_id, shuffle_next, shuffle_prev, set_is_playing_def, increment, decrement, chose , set_def, set_amount_id_tracks, set_is_playing} = idSlice.actions;
export const idReducer = idSlice.reducer;