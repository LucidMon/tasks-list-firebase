import React from "react";

import { Button, Grid, Paper } from "@mui/material";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import ImageLogo from './assets/images/portapapeles-icon.jpg';


export const Login = () => {
    return(
        <div className="Login">
            <Grid container justifyContent={'center'}>
                <Paper elevation={3} style={{width:'440px', height:'640px', margin:'100px', padding:'20px', display:'flex',flexDirection:'column', alignItems:'center'}}>
                <p style={{textAlign:'justify', fontStyle:'italic'}}>Keep track of your daily tasks and manage them efficiently!</p>
                <span style={{fontSize:'30px', marginTop:'30px'}}>Welcome to the Task List App</span>
                    <div className="logo-app" style={{marginTop:'80px' ,display:'flex', alignItems:'center', fontSize:'70px', fontStyle:'italic'}}>
                        To
                        <img style={{width:'150px', height:'200px', marginRight:'10px', marginLeft:'10px'}} src={ImageLogo} alt="ImageLogo" />
                        Do
                    </div>
                    <span style={{marginTop:'110px',fontStyle:'italic'}}>Sign in with your Google account</span>
                    <Button variant="contained" style={{width:'80%', backgroundColor:'#EA4235', marginTop:'15px'}}>Login Here
                        <PeopleAltOutlinedIcon style={{marginLeft:'5px'}}></PeopleAltOutlinedIcon>
                    </Button>
                </Paper>
            </Grid>
        </div>
    )
}