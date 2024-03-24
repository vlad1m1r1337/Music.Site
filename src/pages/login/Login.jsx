import {createGlobalStyle} from "styled-components";
import * as S from "./Login.styles";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getToken, login} from "../../store/idSlice";
import {reset_to_zero_auth_errors} from "../../store/idSlice";
import {LoginLogs} from "../../components/LoginLogs/LoginLogs";
import {LoginWrapper} from "./Login.styles";
import {PasswordLogs} from "../../components/PasswordLogs/PasswordLogs";
const GlobalStyle = createGlobalStyle`
body {
  background-color: #000000D9;
}
`

export const Login = () => {
    const dispatch = useDispatch();
    const auth_email_error = useSelector(state => state.main.auth_email_error);
    const auth_password_error = useSelector(state => state.main.auth_password_error);
    const handleRegistryClick = () => {
        dispatch(reset_to_zero_auth_errors());
        navigate("/registr", { replace: true });
    }
    const navigate = useNavigate();

    const logIn = () => {
        dispatch(getToken());
        dispatch(login())
            .unwrap()
            .then(() => {
                localStorage.setItem("key", "value");
                navigate("/");
                dispatch(reset_to_zero_auth_errors());
            })
            .catch((error) => {
                setTimeout(() => {
                    dispatch(reset_to_zero_auth_errors());
                }, 4000)
            })
    }
    return (
    <>
        <GlobalStyle/>
        <LoginWrapper>
            <S.Div>
                <S.Img src="/img/SkyPro_logo.png" alt="SkyPro"/>
                <S.DivInput>
                    <LoginLogs/>
                    <S.Input $error={auth_email_error[0]}
                             data-testid={"input_mail"}
                             id="input_mail"
                             placeholder="Почта"
                             type="text"/>
                    <PasswordLogs/>
                    <S.Input $error={auth_password_error[0]}
                             data-testid={"input_password"}
                             id="input_password"
                             placeholder="Пароль"
                             type="password"/>
                </S.DivInput>
                <S.ButtonPurpl onClick={logIn}>Войти</S.ButtonPurpl>
                <S.ButtonWhite onClick={handleRegistryClick}>Зарегистрироваться</S.ButtonWhite>
            </S.Div>
        </LoginWrapper>
    </>
    )
}
