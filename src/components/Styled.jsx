import { Box,styled, Typography } from '@mui/material'
import React from 'react'
const CustTyp=styled(Typography)`
color:#F9E79F;

:hover{
    color:#F1C40F;
    transform: scale(1.009);
  

}
`;
const Styled = () => {
  return (
    <Box>
        <CustTyp>Hello</CustTyp>
    </Box>
  )
}

export default Styled