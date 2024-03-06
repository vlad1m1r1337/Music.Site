import {createGlobalStyle} from "styled-components";
import * as S from "./Login.styles";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getToken, login} from "../../store/idSlice";
import {reset_to_zero_auth_errors} from "../../store/idSlice";
import {LoginPasswordLogs} from "../../components/LoginPasswordLogs/LoginPasswordLogs";

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
                navigate("/");
                dispatch(reset_to_zero_auth_errors());
            })
            .catch((error) => {
                setTimeout(() => {
                    dispatch(reset_to_zero_auth_errors());
                }, 3000)
            })
    }
    return (
    <>
        <GlobalStyle/>
        <LoginPasswordLogs/>
        <S.Div>
           <S.Img src="/img/SkyPro_logo.png" alt="SkyPro"/>
            <S.DivInput>
                <S.Input $error={auth_email_error[0]}
                         data-testid={"input_mail"}
                         id="input_mail"
                         placeholder="Почта"
                         type="text"/>
                <S.Input $error={auth_password_error[0]}
                         data-testid={"input_password"}
                         id="input_password"
                         placeholder="Пароль"
                         type="password"/>
            </S.DivInput>
            <S.ButtonPurpl onClick={logIn}>Войти</S.ButtonPurpl>
            <S.ButtonWhite onClick={handleRegistryClick}>Зарегистрироваться</S.ButtonWhite>
        </S.Div>
    </>
    )
}
