import { Accordion, AccordionDetails, AccordionSummary,Box, Typography } from '@mui/material'
import React ,{useState}from 'react'

const AccordianCode = () => {
    const [accor, setaccor] = useState("")
  return (
    <Box>
        <Accordion expanded={accor==="test1"} onChange={()=>setaccor("test1")}>
            <AccordionSummary expandIcon={">"}>
                <Typography>My Detail</Typography>
            </AccordionSummary> 
            <AccordionDetails>
                <Typography>My name is SHivam Baghel</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={accor==="test2"} onChange={()=>setaccor("test2")}>
            <AccordionSummary expandIcon={">"}>
                <Typography>My Detail</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>My name is SHivam Baghel</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={accor==="test3"} onChange={()=>setaccor("test3")}>
            <AccordionSummary expandIcon={">"}>
                <Typography>My Detail</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>My name is SHivam Baghel</Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default AccordianCode