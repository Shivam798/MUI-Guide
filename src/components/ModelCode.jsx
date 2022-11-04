import { Button ,Box, Modal, Typography} from '@mui/material'
import React,{useState} from 'react'

const ModelCode = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <Button  onClick={()=>setOpen(true)}>
            Open Model
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box position="absolute" top="50%" left="50%">
                <Typography>I am Model</Typography>
            </Box>
            
        </Modal>
        
    </div>
  )
}

export default ModelCode