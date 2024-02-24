import {createGlobalStyle} from "styled-components";
import * as S from "./Login.styles";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getToken, login} from "../../store/idSlice";
import {set_auth_error} from "../../store/idSlice";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #000000D9;
}
`

export const Login = () => {
    const dispatch = useDispatch();
    const handleRegistryClick = () => {
        dispatch(set_auth_error(false));
        navigate("/registr", { replace: true });
    }
    const navigate = useNavigate();

    const logIn = () => {
        dispatch(getToken());
        dispatch(login())
            .unwrap()
            .then(() => {
                navigate("/");
                dispatch(set_auth_error(false));
            })
            .catch(() => {});
    }
    const auth_error = useSelector(state => state.main.auth_error);
    return (
    <>
        <GlobalStyle/>
        <S.Div>
           <S.Img src="/img/SkyPro_logo.png" alt="SkyPro"/>
            <S.DivInput>
                <S.Input data-testid={"input_mail"} id="input_mail" placeholder="Почта" type="text"/>
                <S.Input data-testid={"input_password"} id="input_password" placeholder="Пароль" type="password"/>
            </S.DivInput>
            {(auth_error[0]) && <S.ParagraphErrorLog>{auth_error[1]}</S.ParagraphErrorLog>}
            <S.ButtonPurpl onClick={logIn}>Войти</S.ButtonPurpl>
            <S.ButtonWhite onClick={handleRegistryClick}>Зарегистрироваться</S.ButtonWhite>
        </S.Div>
    </>
    )
}
