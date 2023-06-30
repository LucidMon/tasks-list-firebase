import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Modal, Button, Box } from "@mui/material";

export const ModalRegister = ({open, image, title, description}: {open: boolean,  image: string, title: string, description: string}) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(open) {
            const timeout = setTimeout(() => {setShowModal(true)},2000);
            return () => clearTimeout(timeout);
        }
    },[open])

    useEffect(() => {
        if(showModal) {
            const timeout = setTimeout(() => {navigate('/')},7000);
            return () => clearTimeout(timeout);
        }
    },[showModal, navigate])
    

    return(
        <div className='ModalRegister'>
            <Modal open={open} >
                <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 450,
                    height: 300,
                    borderRadius:2,
                    bgcolor: '#fafafa',
                    boxShadow: 24,
                    p: 5,
                }}>
                    <img style={{height:'130px', width:'130px'}} src={image} alt="Saved"/>
                    <h1 style={{fontWeight:'bold'}}>{title}</h1>
                    <h4>{description}</h4>
                    <Link to={'/'} style={{textDecoration:'none', color:'#ffffff'}}>
                        <Button variant="contained" size='small' style={{width:'100px'}}>Ok</Button>
                    </Link>
                </Box>
            </Modal>
        </div>
    )
}