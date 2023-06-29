import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { Grid, TextField, Button } from "@mui/material";

import { useAuth } from "../context/AuthContext";

export const FormRegister = () => {
    const auth = useAuth();

    const [userRegister, setUserRegister] = useState<string>('');
    const [emailRegister, setEmailRegister] = useState<string>('');
    const [passwordRegister, setPasswordRegister] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(passwordRegister === confirmPassword){
            auth.register(emailRegister, passwordRegister);
        }
        else{
            console.log('Contraseñas no coinciden');
        }
    }

    return(
        <div className="FormRegister">
            <Grid container justifyContent={'center'}>
                <div className="text-title-FormRegister" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{fontSize:'30px',fontWeight:'bold' , marginTop:'50px'}}>Create Account</span>
                    <span style={{fontSize:'15px', marginTop:'10px'}}>Create a new account</span>
                </div>
                <TextField id="new-name-field" variant="outlined" label="Name" size="small" onChange={(e) => (setUserRegister(e.target.value))} style={{marginTop:'50px', marginBottom:'13px', width:'80%'}}/>
                <TextField id="new-email-field" variant="outlined" label="Email" size="small" onChange={(e) => (setEmailRegister(e.target.value))} style={{marginTop:'20px', marginBottom:'13px', width:'80%'}}/>
                <TextField id="new-password-field" variant="outlined" label="Password" size="small" onChange={(e) => (setPasswordRegister(e.target.value))} style={{marginTop:'20px', marginBottom:'13px', width:'80%'}}/>
                <TextField id="confirm-password-field" variant="outlined" label="Confirm Password" size="small" onChange={(e) => (setConfirmPassword(e.target.value))} style={{marginTop:'20px', marginBottom:'30px', width:'80%'}}/>
                <Button variant="contained" style={{width:'60%'}}>Create Account</Button>
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