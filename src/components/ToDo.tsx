import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TasksList } from "./TasksList";


export const ToDo = () => {
    return(
        <div className="ToDo">
            <Grid container justifyContent={'center'}>
                <Paper elevation={3} style={{width: '460px', height:'760px', margin:'20px', padding:'40px'}}>
                    <h2>Title</h2>
                    <div className="add-new-task" style={{marginBottom:'40px'}}>
                        <Grid container spacing={2} style={{alignItems:'center'}}>
                            <Grid item xs={4}>
                                <TextField id="add-task" label='Task' variant="standard"></TextField>
                            </Grid>
                            <Grid item xs={7}>
                                <TextField id="add-description" label='Description' variant="standard" style={{display:'flex'}}></TextField>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton>
                                    <AddCircleOutlineIcon></AddCircleOutlineIcon>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                    <TasksList></TasksList>
                </Paper>
            </Grid>
        </div>
    )
}