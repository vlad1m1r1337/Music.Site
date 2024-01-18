import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

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
                const data  = await response.json();
                console.log("data", data);
                throw new Error('Server Error!');
            }
            const data  = await response.json();
            console.log(data);
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
    },
})

export const {set_login, set_password, allow, prohibit, set_allow} = authSlice.actions;
export const authReducer = authSlice.reducer;