import React from "react";
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


export const TasksList = () => {
    const data = [
        {
            task: 'Correr',
            description: 'Salir a correr a las 18hrs',
            checkBox: 'check',
            delete: 'delete',
        },
        {
            task: 'Correr1',
            description: 'Salir a correr a las 18hrs',
            checkBox: 'check',
            delete: 'delete',
        },
        {
            task: 'Correr2',
            description: 'Salir a correr a las 18hrs',
            checkBox: 'check',
            delete: 'delete',
        }
    ]

    return(
        <div className="TasksList">
            <Box 
            sx={{
                border: 1,
                borderColor: 'gray',
                height: '600px',
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: ''}}>Tasks</TableCell>
                            <TableCell style={{width: ''}}>Description</TableCell>
                            <TableCell align="right" style={{width: '1px'}}>a</TableCell>
                            <TableCell align="right" style={{width: '1px'}}>a</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.task}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell align="right" style={{width: '1px'}}>{item.checkBox}</TableCell>
                                    <TableCell align="right" style={{width: '1px'}}>{item.delete}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Box>
        </div>
    )
}