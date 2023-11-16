import React from "react";
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/main/Main";
import {About} from "./pages/About/About";
import {Login} from "./pages/login/Login";
import {Registration} from "./pages/registration/Registration";
import {NotFound} from "./pages/not-found/NotFound";

export const AppRoutes = () => {
    return (
       <>
           <Routes>
               <Route path="/login" element={<Login/>}/>
               <Route path="/registr" element={<Registration/>}/>
               <Route path="/" element={<Main/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/*" element={<NotFound/>}/>
           </Routes>
       </>
    )
}