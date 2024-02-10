import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const addFavoriteTrack = createAsyncThunk(
    'main/addFavoriteTrack',
    async function({access, id}, {rejectWithValue}) {
        try {
            const url = `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            })
            if (!response.ok) {
                throw new Error('Server Error!');
            }
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

export const removeFavoriteTrack = createAsyncThunk(
    'main/removeFavoriteTrack',
    async function({access, id}, {rejectWithValue}) {
        try {
            const url = `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`;
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            })
            if (!response.ok) {
                throw new Error('Server Error!');
            }
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getFavorite = createAsyncThunk(
    'main/getFavorite',
    async function(accessToken, {rejectWithValue}) {
        try {
            const favoriteUrl = 'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/'
            const response = await fetch(favoriteUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken.accessToken}`,
                },
            })
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

export const fetchFavorite = createAsyncThunk(
    'main/fetchFavorite',
    async function(accessToken, {rejectWithValue}) {
        try {
            const favoirteUrl = 'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/'
            const response = await fetch(favoirteUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken.accessToken}`,
                },
            })
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getToken = createAsyncThunk(
    'main/getToken',
    async function(_, {rejectWithValue}) {
            return fetch("https://skypro-music-api.skyeng.tech/user/token/", {
                method: "POST",
                body: JSON.stringify({
                    email: "test@test.test",
                    password: "test@test.test",
                }),
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((json) => {
                    return {  access: json.access, refresh: json.refresh};
                });
    }
)

export const fetchSelectionTracks = createAsyncThunk(
    'main/fetchSelectionTracks',
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
    'main/fetchTracks',
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
    'main/login',
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
                throw new Error('Неверный логин или пароль');
            }
            dispatch(set_allow({ allowed: true }));
            dispatch(set_login({login: InputMail.value}));
            dispatch(set_password({password: InputPassword.value}));
        }
        catch(error) {
            dispatch(set_text_auth_error({error: error.message}));
            return rejectWithValue(error.message);
        }
    }
)

export const registration = createAsyncThunk(
    'main/registration',
    async function(_, {rejectWithValue, dispatch}) {
        const InputMail = document.getElementById("input_mail");
        const InputPassword = document.getElementById("input_password");
        const InputPasswordRepeat = document.getElementById("input_password_repeat");
        const url = "https://skypro-music-api.skyeng.tech/user/signup/";
        try {
            if (InputPassword.value && InputPassword.value !== InputPasswordRepeat.value) {
                throw new Error("Пароли не совпадают");
            }
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: InputMail.value,
                    password: InputPassword.value,
                    username:  InputMail.value,
                }),
                headers: {
                    "content-type": "application/json",
                },
            });
            if (!response.ok) {
                const data = await response.json();
                dispatch(set_text_auth_error({error: data.password[0]}));
                throw new Error('Some error');
            }
            console.log("Answer", response.json());
        }
        catch(error) {
            console.log(error);
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
        tracks_page: null,
        track: null,
        track_favoites: null,
        loading: true,
        auth_error: [false, null],
    },
    reducers: {
        set_auth_error: (state, action) => {
          state.auth_error[0] = action.payload.error;
        },
        set_text_auth_error: (state, action) => {
          state.auth_error[1] = action.payload.error;
        },
        increment: state => {
            const tr = JSON.parse(JSON.stringify(state.tracks));
            const foundIndex = tr.findIndex((el) => el.id === state.id);

            if (tr[foundIndex + 1]) {
                state.id = tr[foundIndex + 1].id;
            }
            else {
                state.id = tr[0].id;
            }
        },
        decrement: state => {
            const tr = JSON.parse(JSON.stringify(state.tracks));
            const foundIndex = tr.findIndex((el) => el.id === state.id);

            if (tr[foundIndex - 1]) {
                state.id = tr[foundIndex - 1].id;
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
        shuffle_next: (state) => {
            const temp = JSON.parse(JSON.stringify(state.tracks));
            console.log(temp);
            const random_id = Math.floor(Math.random() * (temp.length));
            state.id = temp[random_id].id;
        },
        shuffle_prev: (state) => {
            const temp = JSON.parse(JSON.stringify(state.tracks));
            console.log(temp);
            const random_id = Math.floor(Math.random() * (temp.length));
            state.id = temp[random_id].id;
        },
        setIsLoading: (state, action) => {
            state.loading = action.payload.loading;
        },
        set_allow: (state, action) => {
            state.isAllowed = action.payload.allowed;
            if (!action.payload.allowed) {
                state.id = -1;
                state.track = null;
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
        },
        copy_tracks: state => {
            state.tracks = JSON.parse(JSON.stringify(state.tracks_page));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.rejected, state => {
                state.auth_error[0] = true;
            })
            .addCase(registration.rejected, state => {
                state.auth_error[0] = true;
            })
            .addCase(fetchMainTracks.fulfilled, (state, action) => {
                if (state.tracks_page === null && state.tracks === null) {
                    state.tracks = action.payload;
                }
                state.tracks_page = action.payload;
                state.loading = false;
            })
            .addCase(fetchSelectionTracks.fulfilled, (state, action) => {
                if (state.tracks_page === null && state.tracks === null) {
                    if (action.payload.params.id) {
                        state.tracks = action.payload.data[action.payload.params.id - 1].items;
                    } else {
                        state.tracks = action.payload.data[0].items;
                    }
                }
                if (action.payload.params.id) {
                    state.tracks_page = action.payload.data[action.payload.params.id - 1].items;
                } else {
                    state.tracks_page = action.payload.data[0].items;
                }
                state.loading = false;
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.access = action.payload.access;
                state.refresh = action.payload.refresh;
            })
            .addCase(fetchFavorite.fulfilled, (state, action) => {
                state.tracks_page = action.payload;
                state.loading = false;
            })
            .addCase(getFavorite.fulfilled, (state, action) => {
                state.track_favoites = action.payload;
            })
    },
})

export const {set_text_auth_error, set_auth_error, copy_tracks, set_shuffle_def, set_track, set_password, set_login, set_allow, setIsLoading, set_def_shuffle_arr, set_shuffle_first, push_first_shuffle_id, shuffle_next, shuffle_prev, increment, decrement, chose , set_amount_id_tracks, set_is_playing} = Slice.actions;
export const Reducer = Slice.reducer;