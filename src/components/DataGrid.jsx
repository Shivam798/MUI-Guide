import { Box, Grid , Typography} from '@mui/material'

import React from 'react'

const DataGrid = () => {
    
  return (
    <Box sx={{ flexGrow: 1 }}> 
        <Grid container   gridRow={1} columnGap={1}>
            <Grid xs={7} sx={{color:'blue' ,backgroundColor:'lightblue'}}>
                <Typography textAlign='center'>Shivam</Typography>
            </Grid>
            <Grid xs={4} sx={{color:'red' ,backgroundColor:'pink' }}>
            <Typography textAlign='center'>Baghel</Typography>
            </Grid>
            <Grid xs={7} sx={{color:'blue' ,backgroundColor:'lightblue' }}>
                <Typography textAlign='center'>Shivam</Typography>
            </Grid>
            <Grid xs={4} sx={{color:'red' ,backgroundColor:'pink' }}>
            <Typography textAlign='center'>Baghel</Typography>
            </Grid>
            
        </Grid> 
    </Box>
  )
}

export default DataGrid