import { Button, TextField, FormGroup, FormControlLabel, Checkbox, FormControl, InputLabel, ScopedCssBaseline, Select, MenuItem ,FormLabel,Radio,RadioGroup} from '@mui/material'
import React, { useState } from 'react'


const Test = () => {
    // const [objarr, setObjArr] = useState([])
    const [input, setInput] = useState({
        name: "",
        pass: "",
        conpass: "",
        subs: false,
        age: 0,
        gender:'',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setObjArr([...objarr, input])
        // console.log(objarr)
        console.log(input);


    }
    const handlechange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <div>
            <form style={{ display: "flex", flexDirection: 'column' }} onSubmit={(e) => { handleSubmit(e) }}>

                <TextField name='name' value={input.name} onChange={handlechange} placeholder='name' sx={{ margin: '3px' }} />
                <TextField name='pass' value={input.pass} onChange={handlechange} placeholder='pass' sx={{ margin: '3px' }} />
                <TextField name='conpass' value={input.conpass} onChange={handlechange} placeholder='last name' sx={{ margin: '3px' }} />
                <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={() => setInput((prev) => ({ ...prev, subs: !input.subs }))} />} label="Label" />
                </FormGroup>

                <FormControl fullWidth>
                    <InputLabel >Age</InputLabel>
                    <Select
                        value={input.age}
                        name='age'
                        label="Age"
                        onChange={handlechange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                
                    <FormLabel >Gender</FormLabel>
                    <RadioGroup
                        onChange={handlechange}
                        defaultValue="female"
                        name="gender"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <Button sx={{ width: 200, position: 'relative' }} type='submit' variant='contained'> Submit</Button>


            </form>

        </div>


    )
}

export default Test