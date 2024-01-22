import {createGlobalStyle} from "styled-components";
import * as S from "./Login.styles";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getToken, login} from "../../store/idSlice";
const GlobalStyle = createGlobalStyle`
body {
  background-color: #000000D9;
}
`

export const Login = () => {
    const dispatch = useDispatch();
    // const inputValidator = () => {
    //     const InputMail = document.getElementById("input_mail");
    //     const InputPassword = document.getElementById("input_password");
    //     return !(!InputMail.value.length || !InputPassword.value.length);
    // }
    // const handleSignInClick = () => {
    //     if (!inputValidator())
    //         return ;
    //     dispatch(set_allow({ allowed: true }));
    //     navigate("/", { replace: true });
    // }
    const handleRegistryClick = () => {
        navigate("/registr", { replace: true });
    }
    // const login = () => {
    //     const InputMail = document.getElementById("input_mail");
    //     const InputPassword = document.getElementById("input_password");
    //     fetch("https://skypro-music-api.skyeng.tech/user/login/", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             email: InputMail.value,
    //             password: InputPassword.value,
    //         }),
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //     })
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error(`HTTP error! Status: ${res.status}`);
    //             }
    //             return res.json();
    //         })
    //         .then((res) => {
    //             console.log('someshit');
    //             console.log(res);
    //             dispatch(set_allow({ allowed: true }));
    //             navigate("/", { replace: true });
    //         })
    //         .catch((error) => {
    //             console.log('An error occurred:', error);
    //         });
    // }
    // const getToken = () => {
    //     const InputMail = document.getElementById("input_mail");
    //     const InputPassword = document.getElementById("input_password");
    //
    //     return fetch("https://skypro-music-api.skyeng.tech/user/token/", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             email: "test@test.test",
    //             password: "test@test.test",
    //         }),
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //     })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then((json) => {
    //             return json.access;
    //         });
    // };
    //
    // const printToken = async () => {
    //     try {
    //         const token = await getToken();
    //         console.log("my Token", token);
    //     } catch (error) {
    //         console.error("Error fetching token:", error);
    //     }
    // };
    //
    // const getAllTracks = async () => {
    //     const accessToken = await getToken();
    //
    //     fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));
    // }
    //
    // const addTrackToFavorite = async () => {
    //     const accessToken = await getToken();
    //     fetch("https://skypro-music-api.skyeng.tech/catalog/track/22/favorite/", {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => console.log("RES", json));
    // }
    // const deleteTrackFromFavorites = async () => {
    //     const accessToken = await getToken();
    //     fetch("https://skypro-music-api.skyeng.tech/catalog/track/22/favorite/", {
    //         method: "DELETE",
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => console.log("RES", json));
    // }

    const navigate = useNavigate();

    const logIn = () => {
        dispatch(getToken());
        dispatch(login())
            .unwrap()
            .then(() => navigate("/"));
    }
    return (
    <>
        <GlobalStyle/>
        <S.Div>
           <S.Img src="/img/SkyPro_logo.png" alt="SkyPro"/>
            <S.DivInput>
                <S.Input id="input_mail" placeholder="Почта" type="text"/>
                <S.Input id="input_password" placeholder="Пароль" type="password"/>
            </S.DivInput>
            <S.ButtonPurpl onClick={logIn}>Войти</S.ButtonPurpl>
            <S.ButtonWhite onClick={handleRegistryClick}>Зарегестрироваться</S.ButtonWhite>
            {/*<button onClick={getToken}>Get Token</button>*/}
            {/*<button onClick={printToken}>Print Token</button>*/}
            {/*<button onClick={getAllTracks}>Get favorites track</button>*/}
            {/*<button onClick={printToken}>Print Token</button>*/}
            {/*<button onClick={addTrackToFavorite}>Add track yo favorite</button>*/}
            {/*<button onClick={deleteTrackFromFavorites}>Delete track from favorites</button>*/}
        </S.Div>
    </>
    )
}
