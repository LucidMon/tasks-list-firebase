import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from "../context/AuthContext";

import { Button, Grid, TextField } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

import { LogoApp } from "./LogoApp";

export const FormLogin = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [emailLogin, setEmailLogin] = useState<string>('');
    const [passwordLogin, setPasswordLogin] = useState<string>('');
    
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        auth.login(emailLogin, passwordLogin);

        if(auth.user){
            console.log('Usuario Logueado: ', auth.user);
            navigate('/lobby');
        } else {
            console.log('error al inicio de sesion');
        }
    }

    const handleLoginGoogle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        auth.loginWithGoogle();
    }

    return(
        <div className="FormLogin">
            <Grid container justifyContent={'center'}>
            <p style={{textAlign:'justify', fontStyle:'italic'}}>Keep track of your daily tasks and manage them efficiently!</p>

            <div className="logo-app" style={{marginTop:'20px' ,display:'flex', alignItems:'center', fontSize:'50px', fontStyle:'italic'}}>
                <LogoApp size={140}></LogoApp>
            </div>

            <span style={{fontSize:'25px', marginTop:'50px'}}>Welcome to the Task List App</span>
        
            <TextField id="email-field" variant="outlined" label="Email" size="small" onChange={(e) => (setEmailLogin(e.target.value))} style={{marginTop:'50px', marginBottom:'13px', width:'60%'}}/>
            <TextField id="password-field" label="Password" variant="outlined" size="small" onChange={(e) => (setPasswordLogin(e.target.value))} style={{marginBottom:'13px', width:'60%'}}/>
            <span style={{fontSize:'13px', textAlign:'right', width:'60%', marginBottom:'10px', color:'#1976D2'}}>Forgot Password?</span>
            <Button variant="contained" onClick={handleLogin} style={{width:'60%'}}>Login</Button>
            <div className="text-create-account" style={{fontSize:'12px', marginTop:'15px'}}>
                <span>Don't have account? </span>
                <span>
                    <Link to={'register'} style={{color:'#1976D2', textDecoration:'none'}}>create a new account</Link>
                </span>
            </div>
            
            <Grid container justifyContent={'center'} style={{width:'60%', marginTop:'10px'}}>
                <Grid item xs={5}> <hr /> </Grid>
                <Grid item xs={1}> <span style={{display:'block', textAlign:'center'}}>or</span> </Grid>
                <Grid item xs={5}> <hr /> </Grid>
            </Grid>
            <Button variant="contained" onClick={handleLoginGoogle} style={{width:'60%', backgroundColor:'#EA4235', marginTop:'10px'}}>
                <GoogleIcon style={{marginRight:'10px'}}></GoogleIcon>
                Login with Google
            </Button>
            </Grid>
        </div>
    )
}