import React, { useState, useEffect } from "react";

import { Avatar, MenuItem, Select, TextField } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ICountry } from "../interfaces/countries.interface";

export const UserInfoRegister = () => {
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
                marginTop: 5
            }}>
                <PersonAddIcon color="action"
                sx={{
                    width: 80,
                    height: 80,
                    marginRight: 0.8,
                }}/>
            </Avatar>

            <h1 className="title-userinfo">Add You User Info!</h1>

            <TextField></TextField>
            <Select>
                {countries.map((country) => (
                    <MenuItem key={country.cca3} value={country.name.common}>
                        {country.name.common}
                    </MenuItem>
                ))}
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>
        </>
    )
}