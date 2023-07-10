import React from "react";

import { ContainerLobby } from "../components/ContainerLobby";
import { UserInfoRegister } from "../components/UserInfoRegister";

export const FormUser = () => {
    return(
        <ContainerLobby>{<UserInfoRegister/>}</ContainerLobby>
    )
}