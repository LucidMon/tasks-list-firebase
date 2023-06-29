import React from "react";

import { Grid, Paper } from '@mui/material';

export const ContainerLobby = ({ children }: { children: React.ReactNode }) => {
    return(
        <div className="ContainerLobby">
            <Grid container>
                <Paper elevation={3} style={{width:'440px', height:'640px', margin:'100px', padding:'20px', display:'flex',flexDirection:'column', alignItems:'center'}}>
                    {children}
                </Paper>
            </Grid>
        </div>
    )
}