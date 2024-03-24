import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {set_allow, fill_redux_by_storage} from "../../store/idSlice";

export const ProtectedRoute = ({ redirectPath = "/login"}) => {
    const dispatch = useDispatch();
    const allowed = useSelector(state => state.main.isAllowed);
    console.log("localStorage", JSON.parse(localStorage.getItem("auth")));
    // if (!allowed && localStorage.getItem("auth")) {
    //     // console.log("1");
    //     // const auth = JSON.parse(localStorage.getItem("auth"));
    //     // console.log("auth.access", auth.access);
    //     // dispatch(fill_redux_by_storage);
    //     // dispatch(set_allow(true));
    //     return <Outlet />
    // }
     if (!allowed) {
        return  <Navigate to={redirectPath} replace={true} />;
    }
    return  <Outlet />;
};
