import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useParams} from "react-router-dom";

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
            console.log(data);
            return {data: data, params: params};
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
            console.log(data);
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

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAllowed: false,
        access: null,
        refresh: null,
        login: null,
        password: null,
        tracks: null,
        loading: true,
    },
    reducers: {
        setIsLoading: (state, action) => {
          state.loading = action.payload.loading;
        },
        set_allow: (state, action) => {
            state.isAllowed = action.payload.allowed;
        },
        set_login: (state, action) => {
            state.login = action.payload.login;
        },
        set_password: (state, action) => {
            state.password = action.payload.password;
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
                console.log(action.payload);
                // return ;
                // if (p.id) {
                //     state.tracks = data[p.id - 1].items;
                // }
                // else {
                //     state.tracks = data[0].items;
                // }
            })
    },
})

export const {setIsLoading, set_login, set_password, set_allow} = authSlice.actions;
export const authReducer = authSlice.reducer;