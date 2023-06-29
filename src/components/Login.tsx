import React from "react";

import { Button, Grid, TextField } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

import ImageLogo from '../assets/images/portapapeles-icon.jpg';


export const Login = () => {
    return(
        
        <div className="Login">
            <Grid container justifyContent={'center'}>
            <p style={{textAlign:'justify', fontStyle:'italic'}}>Keep track of your daily tasks and manage them efficiently!</p>

            <div className="logo-app" style={{marginTop:'20px' ,display:'flex', alignItems:'center', fontSize:'50px', fontStyle:'italic'}}>
                <span style={{textDecoration:'line-through', textDecorationThickness:'4px', textDecorationColor:'#EA4235'}}>To</span>
                <img style={{width:'100px', height:'140px', marginRight:'10px', marginLeft:'10px'}} src={ImageLogo} alt="ImageLogo" />
                <span>Do</span>
            </div>

            <span style={{fontSize:'25px', marginTop:'50px'}}>Welcome to the Task List App</span>
        
            <TextField id="email-field" variant="outlined" label="Email" size="small" style={{marginTop:'50px', marginBottom:'13px', width:'60%'}}/>
            <TextField id="password-field" label="Password" variant="outlined" size="small" style={{marginBottom:'13px', width:'60%'}}/>
            <span style={{fontSize:'13px', textAlign:'right', width:'60%', marginBottom:'10px', color:'#1976D2'}}>Forgot Password?</span>
            <Button variant="contained" style={{width:'60%'}}>Login</Button>
            <div className="text-create-account" style={{fontSize:'12px', marginTop:'15px'}}>
                <span>Don't have account? </span>
                <span style={{color:'#1976D2'}}>create a new account</span>
            </div>
            
            <Grid container justifyContent={'center'} style={{width:'60%', marginTop:'10px'}}>
                <Grid item xs={5}> <hr /> </Grid>
                <Grid item xs={1}> <span style={{display:'block', textAlign:'center'}}>or</span> </Grid>
                <Grid item xs={5}> <hr /> </Grid>
            </Grid>
            <Button variant="contained" style={{width:'60%', backgroundColor:'#EA4235', marginTop:'10px'}}>
                <GoogleIcon style={{marginRight:'10px'}}></GoogleIcon>
                Login with Google
            </Button>
            </Grid>
        </div>
    )
}