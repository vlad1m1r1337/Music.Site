import {createGlobalStyle} from "styled-components"
import * as S from "./Registration.styles"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registration, reset_to_zero_auth_errors} from "../../store/idSlice";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #000000D9;
}
`

export const Registration = () => {
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
                console.log(error);
            })
    }

    return (
        <>
            <GlobalStyle/>
            <S.StyledDiv>
                <S.StyledImg src="/img/SkyPro_logo.png" alt="SkyPro"/>
                <S.StyledDivInput>
                    <S.StyledInput data-testid={"input_mail"} id="input_mail" placeholder="Почта" type="text"/>
                    <S.StyledInput data-testid={"input_password"} id="input_password" placeholder="Пароль" type="password"/>
                    <S.StyledInput id="input_password_repeat" placeholder="Повторите пароль" type="password"/>
                </S.StyledDivInput>
                {/*{(auth_error[0]) && <S.ParagraphErrorLog>{auth_error[1]}</S.ParagraphErrorLog>}*/}
                <S.StyledButtonPurple onClick={reg}>Зарегистрироваться</S.StyledButtonPurple>
            </S.StyledDiv>
        </>
    )
}
