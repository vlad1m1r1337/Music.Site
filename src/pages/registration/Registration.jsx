import {createGlobalStyle} from "styled-components"
import * as S from "./Registration.styles"
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registration, set_auth_error, set_text_auth_error} from "../../store/idSlice";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #000000D9;
}
`

export const Registration = () => {
    const auth_error = useSelector(state => state.main.auth_error);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reg = () => {
        dispatch(registration())
            .unwrap()
            .then(() => {
                navigate("/login");
                dispatch(set_auth_error(false));
            })
            .catch((error) => {
                console.log(error);
                if (error === 'Cannot read properties of undefined (reading \'0\')') {
                    error = "Такой пользователь уже зарегистрирован";
                }
                dispatch(set_text_auth_error({error: error}))
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
                {(auth_error[0]) && <S.ParagraphErrorLog>{auth_error[1]}</S.ParagraphErrorLog>}
                <S.StyledButtonPurple onClick={reg}>Зарегистрироваться</S.StyledButtonPurple>
            </S.StyledDiv>
        </>
    )
}
