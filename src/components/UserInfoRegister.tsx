import React, { useState, useEffect } from "react";

import { Avatar, MenuItem, Select, TextField, Button, FormControl, Typography } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ICountry } from "../interfaces/countries.interface";


export const UserInfoRegister = () => {
    const gender: string[] = ["Male", "Female", "Binary", "Other", "Does not specify"]
    const [countries, setCountries] = useState<ICountry []>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all");
                const data = await res.json();
                setCountries(data);
            } catch (error) {
                console.error("Error fetch countries", error);
            }
        }
        fetchCountries();
    }, [])

    countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

    return(
        <>
            <Avatar alt="newUser" 
            sx={{
                width: 100,
                height: 100,
                backgroundColor: "white",
                border: "2px solid",
                borderColor: "#757575",
                boxShadow: 3,
                justifyContent: "center",
                marginTop: 3
            }}>
                <PersonAddIcon color="action"
                sx={{
                    width: 80,
                    height: 80,
                    marginRight: 0.8,
                }}/>
            </Avatar>

            <h1 className="title-userinfo">Add You User Info!</h1>

            <FormControl>
                <Typography variant="h6">Name User</Typography>
                <TextField variant="outlined" size="small" 
                sx={{
                    marginBottom: 1.5,
                }}></TextField>

                <Typography variant="h6">Country</Typography>
                <Select size="small"
                sx={{
                    marginBottom: 1.5,
                }}>
                    {countries.map((country) => (
                        <MenuItem key={country.cca3} value={country.name.common}>
                            {country.name.common}
                        </MenuItem>
                    ))}
                </Select>

                <Typography variant="h6">Date of Birth</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker  
                    slotProps={{
                        textField: {size: 'small'}
                    }}/>
                </LocalizationProvider>

                <Typography variant="h6" sx={{marginTop: 1.5}}>Gender</Typography>
                <Select size="small"
                sx={{
                    marginBottom: 4,
                }}>
                    {gender.map((gen) => (
                        <MenuItem key={gen} value={gen}>
                            {gen}
                        </MenuItem>
                    ))}
                </Select>

                <Button variant="contained" sx={{width: 200, mx: "auto"}}>Click for Register!</Button>
            </FormControl>
        </>
    )
}