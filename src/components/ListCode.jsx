import React ,{useState} from 'react'
import {  Collapse, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";

const ListCode = () => {
    const arr=["first",'second','third' ,'four'] 
    const [open, setOpen] = useState(false)
    return (
    <Box >
        <List >
          
            <ListItem divider>
              <ListItemButton onClick={()=>setOpen(true)}>
                <ListItemText primary="Expend">

                </ListItemText>
              </ListItemButton>
            </ListItem>
          
          
        </List>
        <Collapse in={open}>
            <List style={{width:300}}>
              {arr.map((item)=>(
                <ListItem divider>
                  <ListItemButton onClick={()=>setOpen(false)}>
                    <ListItemText primary={item}>

                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}

            </List>
        
        </Collapse>


      </Box>
  )
}

export default ListCode