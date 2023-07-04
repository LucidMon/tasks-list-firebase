import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { Lobby } from "./pages/Looby"

export const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/lobby" element={<Lobby/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}