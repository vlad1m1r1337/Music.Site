import * as S from "./PasswordLogs.styles"
import {useSelector} from "react-redux";


export const PasswordLogs = () => {

    const auth_password_error = useSelector(state => state.main.auth_password_error);

    if (auth_password_error[0]) {
        return (
            <S.ParagraphErrorLogPassword>{auth_password_error[1]}</S.ParagraphErrorLogPassword>
        )
    }
}
