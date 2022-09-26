import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, MenuItem, Select, InputLabel,
    NativeSelect, CircularProgress
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../Context/GlobalContext';
import axios from 'axios'





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function NewUsers() {

    const classes = useStyles();

    const { getCurrentUser, user, fetchingUser } = useGlobalContext();
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [role, setRole] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const [submit, setSubmit] = React.useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        // setLoading(true);

        let data = {};

            data = {
                firstName,
                lastName,
                role,
                email,
                password,
                confirmPassword
            };

        axios.post("/api/auth/newuser", data).then(() => {
            setFirstName('');
            setLastName('');
            setRole('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');


            // getCurrentUser();
        }).catch(err => {
            setLoading(false);

            if (err?.response?.data) {
                setErrors(err.response.data);
            }
        })

        setSubmit(true);
    };

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    if(!user && fetchingUser === false){
        return <Navigate to="/login" />
      }

      if(submit){
        return <Navigate to='/current' />
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

                <form onSubmit={onSubmit}>
                <Grid container justifyContent="center" direction="column" alignItems="center">

                <TextField value={firstName} onChange={e => setFirstName(e.target.value)} 
                required id="new-user-first-name" label="First Name" size='small' 
                margin="normal" color='primary' style={{ width: 350 }} />

                <TextField value={lastName} onChange={e => setLastName(e.target.value)} 
                required id="new-user-last-name" label="Last Name" size='small' 
                margin="normal" color='primary' style={{ width: 350 }} />

                <Box sx={{ mt: 3 }} />

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >

                    <InputLabel id="new-user-select-label">Role:</InputLabel>

                    <Box sx={{ ml: 3 }} />

                    <Select
                        size='small'
                        labelId="new-user-select-label"
                        id="new-user-select"
                        value={role}
                        onChange={handleChange}
                    >
                        {user.role.includes('Admin') ? <MenuItem value={'Admin'}>Admin</MenuItem> : null}
                        <MenuItem value={'Project Manager'}>Project Manager</MenuItem>
                        <MenuItem value={'Editor'}>Editor</MenuItem>
                        <MenuItem value={'Updater'}>Updater</MenuItem>
                    </Select>

                </Grid>

                <Box sx={{ mt: 3 }} />

                <TextField value={email} onChange={e => setEmail(e.target.value)} 
                required id="new-user-email" label="Email" size='small' 
                margin="normal" color='primary' style={{ width: 350 }} />

                <TextField value={password} onChange={e => setPassword(e.target.value)} 
                id="new-user-password" label="Password" type="password" size='small' 
                margin="normal" color='primary' style={{ width: 350 }} />

<TextField value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} 
                id="new-user-confirm-password" label="Confirm Password" type="password" size='small' 
                margin="normal" color='primary' style={{ width: 350 }} />


                <Button disabled={loading} type='submit' variant="contained" size='large' 
                style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 3 }}>
                    Create Account
                    </Button>

                </Grid>
                </form>

                <Box sx={{ mt: 3 }} />

            </Grid>
        </Box>

    )
};

export default NewUsers;