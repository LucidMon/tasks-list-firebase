import React from "react";
import { ContainerLobby } from "../components/ContainerLobby";
import { FormRegister } from "../components/FormRegister";

export const Register = () => {
    return(
        <>
            <ContainerLobby>{<FormRegister/>}</ContainerLobby>
        </>
    )
}