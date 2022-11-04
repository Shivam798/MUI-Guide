import { Snackbar } from '@mui/material'
import { Box } from '@mui/system'
import React ,{useState}from 'react'

const SnackBarCode = () => {
    const [open, setOpen] = useState(true)
  return (
    <Box>
        <Snackbar 
            onClose={()=>setOpen(false)}
            open={open} 
            autoHideDuration={2000}
            message="This is message"
        />
    </Box>
  )
}

export default SnackBarCode