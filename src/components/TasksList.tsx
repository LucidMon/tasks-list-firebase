import React from "react";
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import Checkbox from '@mui/material/Checkbox';

import { ITask } from "../interfaces/task.interface";


export const TasksList = ({ tasks }: { tasks: ITask[] }) => {
    return(
        <div className="TasksList">
            <Box 
            sx={{
                border: 1,
                borderColor: 'gray',
                height: '550px',
            }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={1} style={{width: '', fontWeight: 'bold'}}>Task</TableCell>
                            <TableCell colSpan={3} style={{width: '', fontWeight: 'bold'}}>Description</TableCell>
                            <TableCell colSpan={1} align="right" style={{width: '1px'}}></TableCell>
                            <TableCell colSpan={1} align="right" style={{width: '1px'}}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                        sx={{
                            "& .MuiTableCell-root": {
                              paddingY: "0.1px", 
                            },
                          }}>
                            {
                                tasks.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell colSpan={1}>{item.title}</TableCell>
                                        <TableCell colSpan={3}>{item.description}</TableCell>
                                        <TableCell colSpan={1} align="right" style={{width: '1px'}}><Checkbox checked={item.checkbox}/></TableCell>
                                        <TableCell colSpan={1} align="right" style={{width: '1px'}}>{}</TableCell>
                                    </TableRow>
                                ))
                            }
                    </TableBody>
                </Table>
            </Box>
        </div>
    )
}