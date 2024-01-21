import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchSelectionTracks = createAsyncThunk(
    'auth/fetchSelectionTracks',
    async function(params, {rejectWithValue, dispatch}) {
        try {
            const apiURL = "https://skypro-music-api.skyeng.tech/catalog/selection/";
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return {data:data, params: params};
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const fetchMainTracks = createAsyncThunk(
    'auth/fetchTracks',
    async function(_, {rejectWithValue, dispatch}) {
        try {
            const apiURL = "https://skypro-music-api.skyeng.tech/catalog/track/all/";
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async function(_, {rejectWithValue, dispatch}) {
        const InputMail = document.getElementById("input_mail");
        const InputPassword = document.getElementById("input_password");
        try {
            const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
                method: "POST",
                body: JSON.stringify({
                    email: InputMail.value,
                    password: InputPassword.value,
                }),
                headers: {
                    "content-type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data  = await response.json();
            dispatch(set_allow({ allowed: true }));
            dispatch(set_login({login: InputMail.value}));
            dispatch(set_password({password: InputPassword.value}));
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

export const Slice = createSlice({
    name: 'id',
    initialState: {
        id: -1,
        amount_id_tracks: -1,
        is_playing: true,
        shuffle_arr: ['null'],
        shuffle_flag: 1, // флаг, показывающий к какой кнопке(вперёд, назад) относится массив shuffle_arr

        isAllowed: false,
        access: null,
        refresh: null,
        login: null,
        password: null,
        tracks: null,
        track: null,
        loading: true,
    },
    reducers: {
        increment: state => {
            const tr = JSON.parse(JSON.stringify(state.tracks));
            if (tr.find((el, index, array) => el.id === state.id + 1)) {
                state.id = (state.id + 1);
            }
            else {
                state.id = tr[0].id;
            }
        },
        decrement: state => {
            const tr = JSON.parse(JSON.stringify(state.tracks));
            if (tr.find((el, index, array) => el.id === state.id - 1)) {
                state.id = (state.id - 1);
            }
            else {
                state.id = tr[tr.length - 1].id;
            }
        },
        chose: (state, action) => {
            state.id = action.payload.id;
        },
        set_amount_id_tracks: function (state, action) {
            state.amount_id_tracks = state.tracks[state.tracks.length - 1].id;
        },
        set_is_playing: (state, action) => {
            state.is_playing = action.payload.bool;
        },
        set_shuffle_def: (state, action) => {
            state.shuffle_arr.splice(0, state.shuffle_arr.length);
            state.shuffle_arr[0] =  action.payload.id;
        },
        set_shuffle_first: (state, action) => {
            state.shuffle_arr.splice(0, state.shuffle_arr.length);
            state.shuffle_arr[0] = action.payload.flag;
        },
        set_def_shuffle_arr: state => {
            state.shuffle_arr[0] = 'null';
            state.shuffle_flag = 1;
        },
        shuffle_next: (state, action) => {
            if (state.shuffle_flag < 1) {
                state.id = state.shuffle_arr[state.shuffle_arr.length - 2];
                state.shuffle_arr.pop();
            }
            else {
                state.id = Math.floor(Math.random() * (state.amount_id_tracks - action.payload.first_id + 1)) + action.payload.first_id;
                state.shuffle_arr.push(state.id);
            }
            state.shuffle_flag++;
        },
        shuffle_prev: (state, action) => {
            if (state.shuffle_flag > 1) {
                state.id = state.shuffle_arr[state.shuffle_arr.length - 2];
                state.shuffle_arr.pop();
            }
            else {
                state.id = Math.floor(Math.random() * (state.amount_id_tracks - action.payload.first_id + 1)) + action.payload.first_id;
                state.shuffle_arr.push(state.id);
            }
            state.shuffle_flag--;
        },
        setIsLoading: (state, action) => {
            state.loading = action.payload.loading;
        },
        set_allow: (state, action) => {
            state.isAllowed = action.payload.allowed;
            if (!action.payload.allowed) {
                state.id = -1;
                // state.tracks = null;
                state.track = null;
                // state.shuffle_arr = null;
            }
        },
        set_login: (state, action) => {
            state.login = action.payload.login;
        },
        set_password: (state, action) => {
            state.password = action.payload.password;
        },
        set_track: (state, action) => {
            state.track = action.payload.track;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.rejected, (state) => console.log("error occured"))
            .addCase(fetchMainTracks.fulfilled, (state, action) => {
                state.tracks = action.payload;
                state.loading = false;
            })
            .addCase(fetchSelectionTracks.fulfilled, (state, action) => {
                if (action.payload.params.id) {
                    state.tracks = action.payload.data[action.payload.params.id - 1].items;
                } else {
                    state.tracks = action.payload.data[0].items;
                }
                state.loading = false;
            })
    },
})

export const {set_shuffle_def, set_track, set_password, set_login, set_allow, setIsLoading, set_def_shuffle_arr, set_shuffle_first, push_first_shuffle_id, shuffle_next, shuffle_prev, increment, decrement, chose , set_amount_id_tracks, set_is_playing} = Slice.actions;
export const Reducer = Slice.reducer;