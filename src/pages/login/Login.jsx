import {createGlobalStyle} from "styled-components";
import * as S from "./Login.styles";
import {useNavigate} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #000000D9;
}
`

export const Login = ({isAllowed, setAllowed}) => {
    const navigate = useNavigate();

    const inputValidator = () => {
        const InputMail = document.getElementById("input_mail");
        const InputPassword = document.getElementById("input_password");
        return !(!InputMail.value.length || !InputPassword.value.length);
    }
    const handleSignInClick = () => {
        if (!inputValidator())
            return ;
        localStorage.setItem('user', 'key');
        setAllowed(true);
        navigate("/", { replace: true });
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