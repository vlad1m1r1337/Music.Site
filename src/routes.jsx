import React from "react";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/main/MainPage";
import {Login} from "./pages/login/Login";
import {Registration} from "./pages/registration/Registration";
import {NotFound} from "./pages/not-found/NotFound";
import {SelectionsPage} from "./components/SelectionsPage/SelectionsPage";
import {ProtectedRoute} from "./components/protected-route";

export const AppRoutes = () => {
    return (
       <>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registr" element={<Registration/>}/>
                <Route element={<ProtectedRoute isAllowed={Boolean(localStorage.length)} />}>
                    <Route path="/favorites" element={<SelectionsPage header={"Мои треки"} />} />
                    <Route path="/category/:id" element={<SelectionsPage/>}/>
                    <Route path="/" element={<MainPage />} />
                </Route>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
       </>
    )
}
