import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, MenuItem, Select, InputLabel,
    NativeSelect, CircularProgress
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../../Context/GlobalContext';





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function NewUsers() {

    const classes = useStyles();

    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const { user, fetchingUser } = useGlobalContext();

    if(!user && fetchingUser === false){
        return <Navigate to="/login" />
      }

  return fetchingUser ? (
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        <CircularProgress color="primary" sx={{ mt: 30 }} thickness='5' />
    </Grid>
) : (
        <Box sx={{ pt: 11, pl: 25 }}
            className={classes.root}>

            <Grid container justifyContent="center" direction="column" alignItems="center">


                <Typography variant='h4' sx={{ fontSize: 30, fontWeight: 500 }} align='center'>
                    Create A New Account
                </Typography>


                <Divider sx={{ pt: 1, borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '35%' }} />

                <Box sx={{ mt: 2 }} />

                <TextField required id="outlined-password-input" label="First Name" size='small' margin="normal" color='primary' style={{ width: 350 }} />

                <TextField required id="outlined-password-input" label="Last Name" size='small' margin="normal" color='primary' style={{ width: 350 }} />

                <Box sx={{ mt: 3 }} />

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >

                    <InputLabel id="demo-simple-select-label">Role:</InputLabel>

                    <Box sx={{ ml: 3 }} />

                    <Select
                        size='small'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Project Manager</MenuItem>
                        <MenuItem value={2}>Team Manager</MenuItem>
                        <MenuItem value={3}>Editor</MenuItem>
                        <MenuItem value={4}>Author</MenuItem>
                    </Select>


                    {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Role:
                    </InputLabel>
                    <Box sx={{ ml: 3 }} />
                    <NativeSelect
                    // defaultValue={1}
                    // inputProps={{
                    //     name: 'role',
                    //     id: 'uncontrolled-native',
                    // }}
                    >
                        <option value={1}>Project Manager</option>
                        <option value={2}>Team Manager</option>
                        <option value={3}>Editor</option>
                        <option value={4}>Author</option>
                    </NativeSelect> */}

                </Grid>

                <Box sx={{ mt: 3 }} />

                <TextField required id="outlined-password-input" label="Email" size='small' margin="normal" color='primary' style={{ width: 350 }} />

                <TextField id="outlined-password-input" label="Password" type="password" size='small' margin="normal" color='primary' style={{ width: 350 }} />


                <Button variant="contained" size='large' style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 3 }}>Create Account</Button>

                <Box sx={{ mt: 3 }} />

            </Grid>
        </Box>

    )
};

export default NewUsers;