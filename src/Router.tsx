import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { Lobby } from "./pages/Looby"
import { FormUser } from "./pages/FormUser"

export const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/lobby" element={<Lobby/>}></Route>
                    <Route path="/formuser" element={<FormUser/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}