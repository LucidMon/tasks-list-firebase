import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { Grid, TextField, Button} from "@mui/material";

import { useAuth } from "../context/AuthContext";

import { ModalRegister } from "./ModalRegister";
import SavedRegisterImg from "../assets/images/check-icon.png";
import RejectRegisterImg from "../assets/images/cross-icon.png"


export const FormRegister = () => {
    const auth = useAuth();

    const [userRegister, setUserRegister] = useState<string>('');
    const [emailRegister, setEmailRegister] = useState<string>('');
    const [passwordRegister, setPasswordRegister] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if(passwordRegister === confirmPassword){
            auth.register(emailRegister, passwordRegister);
            setOpenModal(true);
        }
        else{
            console.log('Contraseñas no coninciden');
        }
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return(
        <div className="FormRegister">
            <Grid container justifyContent={'center'}>
                <div className="text-title-FormRegister" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{fontSize:'30px',fontWeight:'bold' , marginTop:'50px'}}>Create Account</span>
                    <span className="text-desc" style={{fontSize:'15px', marginTop:'10px'}}>Create a new account!</span>
                </div>
                <TextField id="new-name-field" variant="outlined" label="Name" size="small" onChange={(e) => (setUserRegister(e.target.value))} style={{marginTop:'50px', marginBottom:'13px', width:'80%'}}/>
                <TextField id="new-email-field" variant="outlined" label="Email" size="small" onChange={(e) => (setEmailRegister(e.target.value))} style={{marginTop:'20px', marginBottom:'13px', width:'80%'}}/>
                <TextField id="new-password-field" variant="outlined" label="Password" size="small" onChange={(e) => (setPasswordRegister(e.target.value))} style={{marginTop:'20px', marginBottom:'13px', width:'80%'}}/>
                <TextField id="confirm-password-field" variant="outlined" label="Confirm Password" size="small" onChange={(e) => (setConfirmPassword(e.target.value))} style={{marginTop:'20px', marginBottom:'30px', width:'80%'}}/>
                <Button variant="contained" onClick={handleRegister} style={{width:'60%'}}>Create Account</Button>
                
                <ModalRegister open={openModal}  
                image={(auth.registerSucces)?(SavedRegisterImg):(RejectRegisterImg)} 
                title={(auth.registerSucces)?("Successful registration!"):("A problem has ocurred :(")} 
                description={(auth.registerSucces)?("Congratulations you are already a member of ToDo App"):("Please try again in a few minutes")}></ModalRegister>

                <div className="text-new-account" style={{marginTop:'20px'}}>
                    <span>Already have a account?</span>
                    <span>
                        <Link to="/" style={{color:'#1976D2', textDecoration:'none'}}> Login</Link>
                    </span>
                </div>
            </Grid>
        </div>
    )
}