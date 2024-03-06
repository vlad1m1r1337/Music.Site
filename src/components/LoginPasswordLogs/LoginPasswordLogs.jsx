import * as S from "./LoginPasswordLogs.styles"
import {useSelector} from "react-redux";

export const LoginPasswordLogs = () => {

    const auth_email_error = useSelector(state => state.main.auth_email_error);
    const auth_password_error = useSelector(state => state.main.auth_password_error);
    const login_detail_error = useSelector(state => state.main.login_detail_error);

    return (
        <>
            <S.DivErrorLogs>
                {auth_email_error[0] && <S.ParagraphErrorLogEmail>{auth_email_error[1]}</S.ParagraphErrorLogEmail>}
            </S.DivErrorLogs>
            <S.DivErrorLogs>
                {auth_password_error[0] && <S.ParagraphErrorLogPassword>{auth_password_error[1]}</S.ParagraphErrorLogPassword>}
            </S.DivErrorLogs>
            <S.DivErrorLogs>
                {login_detail_error[0] && <S.ParagraphErrorLogPassword>{login_detail_error[1]}</S.ParagraphErrorLogPassword>}
            </S.DivErrorLogs>
        </>
    )
}