import React,{useState} from 'react'
import { Box } from '@mui/system'
import { Button, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
const DrawerCode = () => {
    const arr=["Profile","Balance","Logout"]
    const [open, setOpen] = useState(false)
    const CloseDrawer = () =>{
        setOpen(!open)
    } 
  return (
    <Box>
        <Button onClick={CloseDrawer}>Open Drawer</Button>
        <Drawer anchor='right' open={open} onClose={CloseDrawer}>
            <List>
                {arr.map((item)=>(
                    <ListItemButton onClick={CloseDrawer}>
                        <ListItemText primary={item}/>
                    </ListItemButton>  
                ))}
                
            </List>  
        </Drawer>
    </Box>
  )
}

export default DrawerCode