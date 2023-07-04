import React from "react";

import { Box, Grid } from '@mui/material';
import { LogoApp } from "./LogoApp";

export const LeftNavbar = ({showLeftNavbar}: {showLeftNavbar:boolean}) => {


    return(
        <div className="LeftNavbar">
            <Box sx={{
                width: (showLeftNavbar) ? 300 : 0,
                height: `calc(100vh - 64px)`,
                backgroundColor: '#bbb9b9',
                boxShadow: 2,
                transition: 'width 1s ease-in-out',
                transform: (showLeftNavbar) ? 'translateX(0)' : 'translateX(-200px)',
                
                }}
            >
                <Grid justifyContent={'center'} display={'flex'} paddingTop={3}>
                    <Box sx={{
                        backgroundColor: '#ffffff',
                        width: 200,
                        paddingTop: 1,
                        paddingBottom: 1,
                        borderRadius: 12,
                        display: 'flex',
                        justifyContent: 'center',
                        boxShadow: 2
                    }}>
                        <LogoApp size={60}/>
                    </Box>
                </Grid>
            </Box>
        </div>
    )
}