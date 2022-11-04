import { Box,Typography,useTheme } from '@mui/material'
import React from 'react'

const Theme = () => {
    const theme = useTheme();
    console.log(theme);
    
  return (
    <Box>
        <Typography variant='h1' color='primary'>Hello</Typography>
    </Box>
  )
}

export default Theme