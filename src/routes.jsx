import React from "react";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/main/MainPage";
import {Login} from "./pages/login/Login";
import {Registration} from "./pages/registration/Registration";
import {NotFound} from "./pages/not-found/NotFound";
import {DaysPlayList} from "./pages/days-play-list/DaysPlayList";
import {HundredHits} from "./pages/hundred-hits/HundredHits";
import {IndieCharge} from "./pages/indie-charge/IndieCharge";
import {Favorites} from "./pages/favorites/Favorites";
import {SelectionsPage} from "./components/SelectionsPage/SelectionsPage";
import {ProtectedRoute} from "./components/protected-route";

export const AppRoutes = () => {
    return (
       <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registr" element={<Registration/>}/>
                <Route path="/category/:id" element={<SelectionsPage/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/*" element={<NotFound/>}/>
                <Route
                    path="/favorites"
                    element={
                        <ProtectedRoute isAllowed={Boolean(localStorage.length)}>
                            <Favorites/>
                        </ProtectedRoute>
                    }
                />
            </Routes>
       </>
    )
}
