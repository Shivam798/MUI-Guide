import React from 'react'
import { Box } from '@mui/system'
import { Autocomplete, TextField } from '@mui/material'


const AutoCompleteCode = () => {
    const state = ["Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"]
    return (
        <Box>
            <Autocomplete 
                sx={{ width: 300 }} 
                options={state} 
                renderInput={(params) => 
                    <TextField {...params} label="List of States" />}>

            </Autocomplete>
        </Box>
    )
}

export default AutoCompleteCode