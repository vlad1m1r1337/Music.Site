import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {set_allow, fill_redux_by_storage} from "../../store/idSlice";
import {set_rerender} from "../../store/rerender";

export const ProtectedRoute = ({ redirectPath = "/login"}) => {
    const dispatch = useDispatch();
    const allowed = useSelector(state => state.main.isAllowed);
    if (!allowed && localStorage.getItem("auth")) {
        dispatch(fill_redux_by_storage());
        dispatch(set_allow({allowed: true}));
        dispatch(set_rerender({rerender: true}));
        return <Outlet />
    }
    else if (!allowed) {
        return  <Navigate to={redirectPath} replace={true} />;
    }
    else {
        return  <Outlet />;
    }
};
