import React, { useState } from "react";

import { Grid } from "@mui/material";

import { LeftNavbar } from "../components/LeftNavbar";
import { Navbar } from "../components/Navbar";
import { NameUser } from "../components/NameUser";


export const Lobby = () => {
    const [showLeftNavbar, setShowLeftNavbar] = useState<boolean>(true);

    const handleShowLeft = () => {
        setShowLeftNavbar(!showLeftNavbar);
    }

    return(
        <>
            <Navbar handleShowLeft={handleShowLeft}></Navbar>
            <Grid container >
                <Grid item>
                    <LeftNavbar showLeftNavbar={showLeftNavbar}/>
                </Grid>
                <Grid item>
                    <NameUser/>
                </Grid>
            </Grid>
        </>
    )
}