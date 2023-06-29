import React from "react";
import { ContainerLobby } from "../components/ContainerLobby";
import { FormLogin } from "../components/FormLogin";

export const Home = () => {
    return(
        <>
            <ContainerLobby>{<FormLogin/>}</ContainerLobby>
        </>
    )
}