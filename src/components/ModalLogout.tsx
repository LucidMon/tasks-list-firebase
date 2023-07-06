import React from "react";
import { useNavigate } from "react-router-dom";

import { Modal, Button, Box, Grid } from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import LogoutPersonImg from '../assets/images/logout-person.png';
import { useAuth } from "../context/AuthContext";


export const ModalLogout = ({openModal, onClose}: {openModal: boolean, onClose: () => void}) => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handlogout = () => {
        auth.logout();
        navigate('/');
    } 

    return(
        <div className="ModalLoguot">
            <Modal open={openModal} >
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}
                sx={{
                    position: 'absolute',
                    bottom: '100px',
                    left: '350px',
                    width: 400,
                    height: 200,
                    borderRadius:2,
                    bgcolor: '#fafafa',
                    boxShadow: 24,
                    p: 5,
                }}>
                    <Box display={'flex'} alignItems={'center'}
                    sx={{
                        position: 'absolute',
                        height: 40,
                        width: '100%',
                        top: 0,
                        left: 0,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        backgroundColor: '#5D5C5C',
                        color: 'white'
                    }}>
                        <LogoutOutlinedIcon style={{marginLeft:'15px'}}/>
                        LOGOUT
                    </Box>

                    <img style={{
                        height: '100px',
                        width: '100px',
                        marginTop: '20px',
                        }} 
                    src={LogoutPersonImg} alt="logout-img" />
                    <h4>Are you sure you want to exit ToDo App?</h4>
                    
                    <Grid display={'flex'} alignItems={'center'}>
                        <Button variant="contained" style={{marginRight:10}} onClick={onClose}>Cancel</Button>
                        <Button variant="outlined" color='error' onClick={handlogout}>Logout</Button>
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}