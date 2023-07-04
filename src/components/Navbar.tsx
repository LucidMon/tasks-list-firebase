import React, { useState } from "react";

import { AppBar, Toolbar, TextField, Box, Avatar, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { LeftNavbar } from "./LeftNavbar";

export const Navbar = () => {
    const [showLeftNavbar, setShowLeftNavbar] = useState<boolean>(true);

    const handleShowLeft = () => {
        setShowLeftNavbar(!showLeftNavbar);
    }

    return(
        <div className="Navbar">
            <AppBar position="static" sx={{bgcolor:'#d9d9d9', color:'black'}}>
                <Toolbar>
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item xs={1}>
                            <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleShowLeft} 
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography variant="h6" component="a" href='/lobby' 
                                sx={{
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                                >
                                ToDo App
                            </Typography>
                        </Grid>

                        <Grid item xs={8} sx={{ display:'flex', justifyContent:'center' }}>
                            <Box sx={{
                                width: '80%', 
                                height: 45,
                                
                                borderRadius: 5,
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#bbb9b9',
                                    '&:hover': {
                                        backgroundColor: '#efecec',
                                        boxShadow: 2,
                                    }
                                }}
                            >
                                <IconButton sx={{marginLeft:1}}>
                                    <SearchIcon></SearchIcon>
                                </IconButton> 
                                <TextField 
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    sx={{
                                    color:'black', 
                                    width: 230,
                                    }} 
                                    size="medium" placeholder="Search paper" variant="standard"
                                >
                                </TextField>
                            </Box>
                        </Grid>

                        <Grid item xs={1} sx={{ display:'flex', justifyContent:'end', paddingRight:2 }}>
                            <Avatar></Avatar>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <LeftNavbar showLeftNavbar={showLeftNavbar}></LeftNavbar>
        </div>
    )
}