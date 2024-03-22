import * as S from "./LoginLogs.styles"
import {useSelector} from "react-redux";

export const LoginLogs = () => {

    const auth_email_error = useSelector(state => state.main.auth_email_error);
    const login_detail_error = useSelector(state => state.main.login_detail_error);

    if (auth_email_error[0]) {
        return (
            <S.ParagraphErrorLogEmail>{auth_email_error[1]}</S.ParagraphErrorLogEmail>
        )
    }
    else if (login_detail_error[0]) {
        return (
            <S.ParagraphErrorLogEmail>{login_detail_error[1]}</S.ParagraphErrorLogEmail>
        )
    }
}
