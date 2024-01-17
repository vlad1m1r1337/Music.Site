import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";

export const ProtectedRoute = ({ redirectPath = "/login"}) => {
    const allowed = useSelector(state => state.auth.isAllowed);

    if (!allowed) {
        return  <Navigate to={redirectPath} replace={true} />;
    }
    return  <Outlet />;
};
