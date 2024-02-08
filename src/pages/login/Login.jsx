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
    const handleRegistryClick = () => {
        navigate("/registr", { replace: true });
    }
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
            <h1 style={{
                color: "red",
                fontSize: "1rem"
            }}>Неверный логин или пароль</h1>
            <S.ButtonPurpl onClick={logIn}>Войти</S.ButtonPurpl>
            <S.ButtonWhite onClick={handleRegistryClick}>Зарегистрироваться</S.ButtonWhite>
        </S.Div>
    </>
    )
}
