import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/main/MainPage";
import {Login} from "./pages/login/Login";
import {Registration} from "./pages/registration/Registration";
import {NotFound} from "./pages/not-found/NotFound";
import {SelectionsPage} from "./components/SelectionsPage/SelectionsPage";
import {ProtectedRoute} from "./components/protected-route";

export const AppRoutes = () => {
    const checkKey = () => {
        const storedValue = localStorage.getItem('user');
        return storedValue !== null && storedValue;
    }
    const [isAllowed, setAllowed] = useState(checkKey);
    const updateIsAllowed = () => {
        setAllowed(!isAllowed);
    }

    return (
       <>
            <Routes>
                <Route path="/login" element={<Login isAllowed={isAllowed} setAllowed={updateIsAllowed}/>}/>
                <Route path="/registr" element={<Registration/>}/>
                <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
                    <Route path="/favorites" element={<SelectionsPage header={"Мои треки"} setAllowed={updateIsAllowed}/>} />
                    <Route path="/category/:id" element={<SelectionsPage setAllowed={updateIsAllowed}/>}/>
                    <Route path="/" element={<MainPage setAllowed={updateIsAllowed}/>} />
                </Route>
                <Route path="*" element={<NotFound setAllowed={setAllowed}/>}/>
            </Routes>
       </>
    )
}
