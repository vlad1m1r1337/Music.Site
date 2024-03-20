import {createGlobalStyle} from "styled-components"
import * as S from "./Registration.styles"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registration, reset_to_zero_auth_errors} from "../../store/idSlice";
import {LoginPasswordLogs} from "../../components/LoginPasswordLogs/LoginPasswordLogs";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #000000D9;
}
`

export const Registration = () => {
    const auth_error = useSelector(state => state.main.auth_error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const auth_email_error = useSelector(state => state.main.auth_email_error);
    const auth_password_error = useSelector(state => state.main.auth_password_error);

    const reg = () => {
        dispatch(registration())
            .unwrap()
            .then(() => {
                navigate("/login");
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
            <S.StyledDiv>
                <S.StyledImg src="/img/SkyPro_logo.png" alt="SkyPro"/>
                <S.StyledDivInput>
                    <S.StyledInput $error={auth_email_error[0]}
                                   data-testid={"input_mail"}
                                   id="input_mail"
                                   placeholder="Почта"
                                   type="text"/>
                    <S.StyledInput $error={auth_password_error[0]} data-testid={"input_password"}
                                   id="input_password"
                                   placeholder="Пароль"
                                   type="password"/>
                    <S.StyledInputRepeat $error={auth_password_error[1]} id="input_password_repeat" placeholder="Повторите пароль" type="password"/>
                </S.StyledDivInput>
                <S.StyledButtonPurple onClick={reg}>Зарегистрироваться</S.StyledButtonPurple>
            </S.StyledDiv>
        </>
    )
}
