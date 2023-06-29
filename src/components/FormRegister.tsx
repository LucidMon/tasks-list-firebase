import React from "react";

import { Grid, TextField, Button } from "@mui/material";

export const FormRegister = () => {
    return(
        <div className="FormRegister">
            <Grid container justifyContent={'center'}>
                <div className="text-title-FormRegister" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{fontSize:'30px',fontWeight:'bold' , marginTop:'50px'}}>Create Account</span>
                    <span style={{fontSize:'15px', marginTop:'10px'}}>Create a new account</span>
                </div>
                <TextField id="new-name-field" variant="outlined" label="Name" size="small" style={{marginTop:'50px', marginBottom:'13px', width:'80%'}}/>
                <TextField id="new-email-field" variant="outlined" label="Email" size="small" style={{marginTop:'20px', marginBottom:'13px', width:'80%'}}/>
                <TextField id="new-password-field" variant="outlined" label="Password" size="small" style={{marginTop:'20px', marginBottom:'13px', width:'80%'}}/>
                <TextField id="confirm-password-field" variant="outlined" label="Confirm Password" size="small" style={{marginTop:'20px', marginBottom:'30px', width:'80%'}}/>
                <Button variant="contained" style={{width:'60%'}}>Create Account</Button>
                <div className="text-new-account" style={{marginTop:'20px'}}>
                    <span>Already have a account?</span>
                    <span style={{color:'#1976D2'}}> Login</span>
                </div>
            </Grid>
        </div>
    )
}