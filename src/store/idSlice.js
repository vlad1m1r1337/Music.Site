import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PopupFilter} from "../services/constants";
import {set_rerender} from "./rerender";
// import { setItem } from 'localStorage'; // Adjust the import path based on the library you're using

export const refreshToken = createAsyncThunk(
    "main/refreshToken",
    async function (refresh, {rejectWithValue}) {
        try {
            const response = await fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
                method: "POST",
                body: JSON.stringify({
                    refresh: refresh,
                }),
                headers: {
                    "content-type": "application/json",
                },
            });
            if (!response.ok) {
                console.log(response);
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
export const addFavoriteTrack = createAsyncThunk(
    'main/addFavoriteTrack',
    async function({access, id}, {rejectWithValue, dispatch, getState}) {
        try {
            const url = `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            })
             if (!response.ok) {
                if (response.status === 401) {
                    const refresh = getState().main.refresh;
                    dispatch(refreshToken(refresh));
                    const newAccess = getState().main.access;
                    return await dispatch(addFavoriteTrack({ access: newAccess, id: id }));
                }
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
    async function({access, id}, {rejectWithValue, dispatch, getState}) {
        try {
            const url = `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`;
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            })
            if (!response.ok) {
                if (response.status === 401) {
                    const refresh = getState().main.refresh;
                    dispatch(refreshToken(refresh));
                    const newAccess = getState().main.access;
                    return await dispatch(removeFavoriteTrack({ access: newAccess, id: id }));
                }
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
    async function(accessToken, {rejectWithValue, dispatch, getState}) {
        try {
            const favoriteUrl = 'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/'
            const response = await fetch(favoriteUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken.accessToken}`,
                },
            })
            if (!response.ok) {
                // if (response.status === 401) {
                //     const refresh = getState().main.refresh;
                //     dispatch(refreshToken(refresh));
                //     const newAccess = getState().main.access;
                //     return await dispatch(getFavorite({ accessToken: newAccess}));
                // }
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
    async function(accessToken, {rejectWithValue, dispatch, getState}) {
        try {
            const favoirteUrl = 'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/'
            const response = await fetch(favoirteUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken.accessToken}`,
                },
            })
            if (!response.ok) {
                if (response.status === 401) {
                    const refresh = getState().main.refresh;
                    dispatch(refreshToken(refresh));
                    const newAccess = getState().main.access;
                    return await dispatch(fetchFavorite({ accessToken: newAccess}));
                }
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

const set_email_password_login_error = (data, dispatch) => {
    const email_key = "email";
    const password_key = "password";
    const detail = "detail";
    if (email_key in data) {
        dispatch(set_auth_email_error({error_exist: true, error_text: data.email}));
    }
    if (password_key in data) {
        dispatch(set_auth_password_error({error_exist: true, error_text: data.password}));
    }
    if (detail in data) {
        dispatch(set_login_detail_error({error_exist: true, error_text: data.detail}))
    }
}

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
                const data = await response.json();
                set_email_password_login_error(data, dispatch);
                throw new Error('Error');
            }
            dispatch(set_allow({ allowed: true }));
            dispatch(set_login({login: InputMail.value}));
            dispatch(set_password({password: InputPassword.value}));
            dispatch(set_rerender({rerender: true}));
            const data = await response.json();
            return data;
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

const set_email_password_error = (data, dispatch) => {
    const email_key = "email";
    const password_key = "password";
    if (email_key in data) {
        dispatch(set_auth_email_error({error_exist: true, error_text: data.email}));
    }
    if (password_key in data) {
        dispatch(set_auth_password_error({error_exist: true, error_text: data.password}));
    }
}

export const registration = createAsyncThunk(
    'main/registration',
    async function(_, {rejectWithValue, dispatch}) {
        const InputMail = document.getElementById("input_mail");
        const InputPassword = document.getElementById("input_password");
        const InputPasswordRepeat = document.getElementById("input_password_repeat");
        const url = "https://skypro-music-api.skyeng.tech/user/signup/";
        try {
            console.log("InputPassword", InputPassword.value, "InputPasswordRepeat", InputPasswordRepeat.value);
            if (InputPassword.value && InputPassword.value !== InputPasswordRepeat.value) {
                set_email_password_error({password: "Пароли не совпадают"}, dispatch);
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
                set_email_password_error(data, dispatch);
                throw new Error('Error');
            }
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
        shuffle_flag: 1,

        isAllowed: false,
        access: null,
        refresh: null,
        login: null,
        password: null,

        tracks: null,
        tracks_page: null,
        track: null,
        track_favorites: null,
        loading: true,
        auth_email_error: [false, null],
        auth_password_error: [false, null],
        login_detail_error: [false, null],

        all_authors: [],
        all_release_dates: [],
        all_genres: [],

        popup_author_counter: 0,
        popup_release_dates: 0,
        popup_genres: 0,

        rerender_flag: true,
    },
    reducers: {
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
            console.log("id inside redux", action.payload.id);
            state.id = action.payload.id;
        },
        set_amount_id_tracks: function (state) {
            if (!state.tracks) {
                return;
            }
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
            const random_id = Math.floor(Math.random() * (temp.length));
            state.id = temp[random_id].id;
        },
        shuffle_prev: (state) => {
            const temp = JSON.parse(JSON.stringify(state.tracks));
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
        },
        add_track_to_favorite: state => {
            if (state.track_favorites.find((el) => el.id === state.id)) {return;}
            const found = state.tracks_page.find((element) => element.id === state.id);
            state.track_favorites.push(found);
        },
        add_track_to_favorite_by_id: (state, action) => {
            if (state.track_favorites.find((el) => el.id === action.payload.id)) {return;}
            const found = state.tracks_page.find((element) => element.id === action.payload.id);
            state.track_favorites.push(found);
        },
        remove_track_from_favorite_by_id: (state, action) => {
            const id = state.tracks_page.find(el => {
              if(el.id === action.payload.id) {
                  return el.id;
              }
              return undefined;
            })
            const deleted_index = state.track_favorites.findIndex((el, index) => {
                if (el.id === id) {
                    return index;
                }
                return undefined;
            });
            state.track_favorites.splice(deleted_index, 1);
        },
        remove_track_from_favorite: state => {
            let remove_id = -1;
            for (let i = 0; i < state.track_favorites.length; i++) {
                if (state.track_favorites[i].id === state.id) {
                    remove_id = i;
                }
            }
            if (remove_id !== -1) {
                state.track_favorites.splice(remove_id, 1);
            }
        },
        find_all_authors: state => {
            state.tracks_page.forEach((element) => {
                if (!state.all_authors || !state.all_authors.includes(element.author)) {
                    state.all_authors.push(element.author);
                }
            });
            state.all_authors.sort();
        },
        find_all_release_dates: state => {
            state.tracks_page.forEach((element) => {
                if (!state.all_release_dates || !state.all_release_dates.includes(element.release_date)) {
                    state.all_release_dates.push(element.release_date);
                }
            });
        },
        find_all_genres: state => {
            state.tracks_page.forEach((element) => {
                if (!state.all_genres || !state.all_genres.includes(element.genre)) {
                    state.all_genres.push(element.genre);
                }
            });
            state.all_genres.sort();
        },
        filter_search: (state, action) => {
            console.log("filtred_flag", state.filtred_flag);
            if (state.filtred_flag) {
                state.filtred_tracks = state.filtred_tracks.filter((element) => element.name.toLowerCase().includes(action.payload.inputValue.toLowerCase()));
            }
            else if (state.tracks_page) {
                state.filtred_tracks = state.tracks_page.filter((element) => element.name.toLowerCase().includes(action.payload.inputValue.toLowerCase()));
            }
        },
        filter_by_attr_author: (state, action) => {
          if (state.tracks) {
              if (!action.payload.filtred_flag) {
                state.filtred_tracks.splice(0, state.filtred_tracks.length);
              }
              state.tracks_page.forEach((el) => {
                  if (el.author === action.payload.author && state.filtred_tracks.find(item => item.id === el.id) === undefined) {
                      state.filtred_tracks.push(el);
                  }
              })
          }
        },
        filter_by_attr_release_date: (state, action) => {
            if (state.tracks) {
                if (!action.payload.filtred_flag) {
                    state.filtred_tracks.splice(0, state.filtred_tracks.length);
                }
                state.tracks_page.forEach((el) => {
                    if (el.release_date === action.payload.release_date && state.filtred_tracks.find(item => item.id === el.id) === undefined) {
                        state.filtred_tracks.push(el);
                    }
                })
            }
        },
        filter_by_attr_genre: (state, action) => {
            if (state.tracks) {
                if (!action.payload.filtred_flag) {
                    state.filtred_tracks.splice(0, state.filtred_tracks.length);
                }
                state.tracks_page.forEach((el) => {
                    if (el.genre === action.payload.genre && state.filtred_tracks.find(item => item.id === el.id) === undefined) {
                        state.filtred_tracks.push(el);
                    }
                })
            }
        },
        change_filtr_flag: (state, action) => {
            state.filtred_flag = action.payload.flag;
        },
        set_auth_email_error: (state, action) => {
            state.auth_email_error[0] = action.payload.error_exist;
            state.auth_email_error[1] = action.payload.error_text;
        },
        set_auth_password_error: (state, action) => {
            state.auth_password_error[0] = action.payload.error_exist;
            state.auth_password_error[1] = action.payload.error_text;
        },
        set_login_detail_error: (state, action) => {
            state.login_detail_error[0] = action.payload.error_exist;
            state.login_detail_error[1] = action.payload.error_text;
        },
        reset_to_zero_auth_errors: state => {
            state.auth_password_error[0] = false;
            state.auth_password_error[1] = null;
            state.auth_email_error[0] = false;
            state.login_detail_error[0] = false;
        },
        change_popup_counter: (state, action) => {
            switch (action.payload.name) {
                case (PopupFilter[0]):
                    if (action.payload.filter) {
                        state.popup_author_counter--;
                    } else {
                        state.popup_author_counter++;
                    }
                    break;
                case (PopupFilter[1]):
                    if (action.payload.filter) {
                        state.popup_release_dates--;
                    } else {
                        state.popup_release_dates++;
                    }
                    break;
                case (PopupFilter[2]):
                    if (action.payload.filter) {
                        state.popup_genres--;
                    } else {
                        state.popup_genres++;
                    }
                    break;
            }
        },
        fill_redux_by_storage: state  => {
            const storage = JSON.parse(localStorage.getItem("auth"));
            state.access = storage.access;
            state.refresh = storage.refresh;
            state.login = storage.email;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.rejected, state => {
                state.auth_error[0] = true;
                state.loading = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                if (localStorage.getItem("auth") === null) {
                    localStorage.setItem("auth", JSON.stringify(action.payload));
                }
                else {
                    const prev_obj = JSON.parse(localStorage.getItem("auth"));
                    localStorage.setItem("auth", JSON.stringify({
                        ...prev_obj,
                        ...action.payload,
                    }));
                }
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
                    if (action.payload.params.param.id) {
                        state.tracks = action.payload.data[action.payload.params.param.id - 1].items;
                    } else {
                        state.tracks = action.payload.data[0].items;
                    }
                }
                if (action.payload.params.param.id) {
                    state.tracks_page = action.payload.data[action.payload.params.param.id - 1].items;
                } else {
                    state.tracks_page = action.payload.data[0].items;
                }
                state.loading = false;
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.access = action.payload.access;
                state.refresh = action.payload.refresh;
                if(localStorage.getItem("auth") !== null) {
                    const prev_obj = JSON.parse(localStorage.getItem("auth"));
                    localStorage.setItem("auth", JSON.stringify({
                        ...prev_obj,
                        ...action.payload,
                    }));
                }
                else {
                    localStorage.setItem("auth", JSON.stringify(action.payload));
                }
            })
            .addCase(fetchFavorite.fulfilled, (state, action) => {
                state.tracks_page = action.payload;
                state.loading = false;
            })
            .addCase(getFavorite.fulfilled, (state, action) => {
                state.track_favorites = action.payload;
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.access = action.payload.access;
                const prev_obj = JSON.parse(localStorage.getItem("auth"));
                localStorage.setItem("auth", JSON.stringify({
                    ...prev_obj,
                    "access": state.access
                }));
            })
    }
})


export const {
    fill_redux_by_storage,
    remove_track_from_favorite_by_id,
    add_track_to_favorite_by_id,
    change_popup_counter,
    set_login_detail_error,
    reset_to_zero_auth_errors,
    set_auth_password_error,
    set_auth_email_error,
    find_all_genres,
    find_all_release_dates,
    change_filtr_flag,
    filter_search,
    find_all_authors,
    remove_track_from_favorite,
    add_track_to_favorite,
    copy_tracks,
    set_shuffle_def,
    set_track,
    set_password,
    set_login,
    set_allow,
    setIsLoading,
    set_def_shuffle_arr,
    set_shuffle_first,
    push_first_shuffle_id,
    shuffle_next,
    shuffle_prev,
    increment,
    decrement,
    chose ,
    set_amount_id_tracks,
    set_is_playing} = Slice.actions;
export const Reducer = Slice.reducer;