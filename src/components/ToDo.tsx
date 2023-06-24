import React, { useState, useReducer, useRef, useEffect } from "react";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';

import { TasksList } from "./TasksList";

import { ITask, IAction } from "../interfaces/task.interface";

export const ToDo = () => {
    const [editTitle, setEditTitle] = useState<boolean>(false);
    const [focusTitle, setFocusTitle] = useState<boolean>(false);
    const h2TitleRef = useRef<HTMLInputElement>(null);

    const inputDescriptionRef = useRef<HTMLInputElement>(null);

    const initialState: ITask[] = [];

    const reducer = (state: ITask[], action: IAction): ITask[] => {
        switch (action.type) {
            case 'add_task': {
                console.log('add',  action.description)
                return [
                    ...state,
                    { description: action.description, checkbox: false }
                ]
            } 
            default: {
                return state;
        }
        }
    };

    const [tasks, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: 'add_task',
            description: inputDescriptionRef.current?.value,
            checkbox: false
        });
    
        if (inputDescriptionRef.current) {
            inputDescriptionRef.current.value = '';
        }
    }

    const hadleTitle = (e: React.FormEvent) => {
        e.preventDefault();
        setEditTitle(!editTitle);
        setFocusTitle(!focusTitle);
    }

    useEffect(() => {
        if(focusTitle && h2TitleRef.current){
            h2TitleRef.current.focus();
        } 
    }, [focusTitle])
    
    return (
        <div className="ToDo">
            <Grid container justifyContent={'center'}>
                <Paper elevation={3} style={{ width: '460px', height: '760px', margin: '20px', padding: '40px' }}>
                <div className="title-paper">
                    <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid item xs={11}>
                            <h2 ref={h2TitleRef} contentEditable={`${editTitle}`} tabIndex={-1}>Title New Paper</h2>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton onClick={hadleTitle}>
                                <EditIcon></EditIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
                <div className="add-new-task" style={{ marginBottom: '40px' }}>
                    <Grid container spacing={2} style={{ alignItems: 'center' }}>
                        <Grid item xs={11}>
                            <TextField inputRef={inputDescriptionRef} id="add-task" label='New Task' variant="standard" style={{ display: 'flex' }}></TextField>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton onClick={handleSubmit}>
                                <AddCircleOutlineIcon></AddCircleOutlineIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
                <TasksList tasks={tasks}/>
                </Paper>
            </Grid>
        </div>
    )
}
