import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";

export const login = createAsyncThunk(
    'auth/login',
    async function(_, {extra, rejectWithValue, dispatch}) {
        console.log("1");
        console.log('extra', extra);return ;
        const navigate = extra.navigate;
        console.log("2");
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
            console.log("succes");
            dispatch(set_allow({ allowed: true }));
            navigate("/", { replace: true });
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
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(login.pending, (state) => {
        //         // handle pending state if needed
        //     })
        //     .addCase(login.fulfilled, (state, action) => {
        //         // handle fulfilled state if needed
        //     })
        //     .addCase(login.rejected, (state, action) => {
        //         // handle rejected state if needed
        //     });
    },
})

export const {allow, prohibit, set_allow} = authSlice.actions;
export const authReducer = authSlice.reducer;