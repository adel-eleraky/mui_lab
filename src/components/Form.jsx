import { Visibility, VisibilityOff } from '@mui/icons-material'
import { TextField, FormControl, FormLabel, InputLabel, OutlinedInput, InputAdornment, IconButton, MenuItem, Box, FormControlLabel, FormGroup, Checkbox, RadioGroup, Radio, Button, Container, Grid } from '@mui/material'
import React, { useState } from 'react'

function Form() {

    const [formData, setFormData] = useState({ username: "", email: "", password: "", country: "", skills: [], gender: "" })
    const [country, setCountry] = useState("")
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };


    const handleSelect = (event, value) => {
        // setCountry(event.target.value)
        setFormData({ ...formData, country: event.target.value })
    }

    const handleForm = (event) => {
        let key = event.target.name
        let value = event.target.value
        setFormData({ ...formData, [key]: value })
    }

    
    console.log(formData)
    return (
        <>
            
            <Box component={"form"} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '50%', margin: '50px auto' }}>
                <Grid container justifyContent={"space-between"} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField variant='outlined' label="username" name="username" sx={{ width: "100%" }} onChange={handleForm}></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField variant='outlined' label="email" name="email" sx={{ width: "100%" }} onChange={handleForm}></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="outlined" sx={{ width: "100%" }}>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                onChange={handleForm}
                                name="password"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select"
                            defaultValue="EUR"
                            helperText="Please select your currency"
                            value={formData.country} onChange={handleSelect}
                            sx={{ width: "100%" }}
                        >
                            <MenuItem value="Egypt">Egypt</MenuItem>
                            <MenuItem value="London">London</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormGroup>
                            <FormLabel>Skills</FormLabel>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4} md={3}>
                                    <FormControlLabel onChange={handleCheckbox} checked={formData.skills.includes("HTML")} control={<Checkbox />} label="HTML" />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3}>
                                    <FormControlLabel onChange={handleCheckbox} checked={formData.skills.includes("CSS")} control={<Checkbox />} label="CSS" />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3}>
                                    <FormControlLabel onChange={handleCheckbox} checked={formData.skills.includes("JAVASCRIPT")} control={<Checkbox />} label="JAVASCRIPT" />
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormGroup>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup>
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <FormControlLabel control={<Radio value={"male"} />} label="Male" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControlLabel control={<Radio value={"female"} />} label="female" />
                                    </Grid>
                                </Grid>
                            </RadioGroup>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" sx={{ width: "100%" }}>submit</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="outlined" color="error" sx={{ width: "100%" }}>reset</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Form
