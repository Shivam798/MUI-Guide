import React, { useState } from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import Test from './Test'

const Header = () => {
    const [value, setvalue] = useState(0)
    return (
        <div>
            <AppBar>
            <Toolbar>
                <Typography>Logo</Typography>
                <Tabs indicatorColor='primary'  textColor='inherit' sx={{ marginLeft: 'auto' }} value={value} onChange={(e, val) => setvalue(val)}>
                    <Tab value="0" label='Home'></Tab>
                    <Tab value="1" label='Contact'></Tab>
                    <Tab value="2" label='About Us'></Tab>

                </Tabs>
                
                <Button variant='contained' sx={{ marginLeft: 'auto' }} color='warning'>Hello</Button>
            </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Header