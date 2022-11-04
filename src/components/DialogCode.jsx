import { Button, Box,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React,{useState} from 'react'

const DialogCode = () => {
    const [open, setOpen] = useState(false)
    const handleOpen =()=>{
        setOpen(!open)
    }
    
  return (

    <div>
        <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Button onClick={handleOpen}>Open Dialog</Button>
        </Box>
        <Dialog open={open} onClose={handleOpen}>
            <DialogTitle>This is my Dialog</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    A dialog Content is used
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleOpen}>Cancel</Button>
                <Button>Agree</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default DialogCode