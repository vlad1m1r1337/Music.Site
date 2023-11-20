import {createGlobalStyle} from "styled-components";
import * as S from "./Login.styles";
import {useNavigate} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #000000D9;
}
`

export const Login = () => {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        const InputMail = document.getElementById("input_mail");
        const InputPassword = document.getElementById("input_password");
        if (!InputMail.value.length || !InputPassword.value.length)
            return;
        localStorage.setItem('user', 'key');navigate("/", { replace: true });
        window.location.reload();
        setTimeout(() => {
            navigate("/", { replace: true });
        }, 3000)
    }
    const handleRegistryClick = () => {
        navigate("/registr", { replace: true });
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
            <S.ButtonPurpl onClick={handleSignInClick}>Войти</S.ButtonPurpl>
            <S.ButtonWhite onClick={handleRegistryClick}>Зарегестрироваться</S.ButtonWhite>
        </S.Div>
    </>
    )
}