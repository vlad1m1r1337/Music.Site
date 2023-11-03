import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/main/Main";
import {About} from "./pages/About/About";
import React from "react";
import {NotFound} from "./pages/not-found/NotFound";

export const AppRoutes = () => {
    return (
       <>
           <Routes>
               <Route path="/" element={<Main/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/*" element={<NotFound/>}/>
           </Routes>
       </>
    )
}