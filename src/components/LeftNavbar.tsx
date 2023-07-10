import React, { useState } from "react";

import { Box, Grid, Button } from '@mui/material';
import { LogoApp } from "./LogoApp";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ModalLogout } from "./ModalLogout";
import { PapersList } from "./PapersList";

export const LeftNavbar = ({showLeftNavbar}: {showLeftNavbar: boolean}) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleModal = () => {
        setOpenModal((prevOpenModal) => !prevOpenModal);
    }

    return(
        <>
            <Box sx={{
                width: (showLeftNavbar) ? 300 : 0,
                height: `calc(100vh - 64px)`,
                backgroundColor: '#bbb9b9',
                boxShadow: 2,
                transition: 'width 1s ease-in-out',
                transform: (showLeftNavbar) ? 'translateX(0)' : 'translateX(-200px)',
                
                }}
            >
                <Grid justifyContent={'center'} display={'flex'} marginBottom={3} paddingTop={3}>
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

                <Grid justifyContent={'center'} display={'flex'} alignItems={'center'}>
                    <PapersList></PapersList>
                </Grid>
                
                
                <Grid justifyContent={'center'} display={'flex'} alignItems={'center'} marginTop={3}>
                    <Button variant="text" disableRipple sx={{
                            color:'white',
                            width:'90%',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#EA4235'
                                }
                        }}
                    onClick={handleModal}
                    >
                        <LogoutOutlinedIcon></LogoutOutlinedIcon>
                        Logout
                    </Button>
                </Grid>
                <ModalLogout openModal={openModal} onClose={handleModal}></ModalLogout>

            </Box>
        </>
    )
}