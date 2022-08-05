import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, Link
} from '@mui/material'
import { makeStyles } from '@mui/styles'
// import { Link } from "react-router-dom"
import axios from 'axios'
import { useGlobalContext } from '../../../Context/GlobalContext';
import { Navigate } from "react-router-dom"





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function Register({ register }) {

    const { getCurrentUser, user } = useGlobalContext();
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        let data = {};

        if (register) {
            data = {
                firstName,
                lastName,
                email,
                password,
                confirmPassword
            };
        }

        axios.post("/api/auth/register", data).then(() => {
            getCurrentUser();
        }).catch(err => {
            setLoading(false);

            if (err?.response?.data) {
                setErrors(err.response.data);
            }
        })
    };


    const classes = useStyles();

    if(user){
        return <Navigate to ='/' />
    }

    return (
        <Box sx={{ pt: 8 }}
            className={classes.root}>

            <Grid container justifyContent="center" direction="column" alignItems="center">


                <Typography variant='h4' sx={{ fontSize: 30, fontWeight: 500 }} align='center'>
                    Create Account
                </Typography>


                <Divider sx={{ pt: 1, borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '35%' }} />

                <Box sx={{ mt: 2 }} />
                <form onSubmit={onSubmit}>
                    <Grid container justifyContent="center" direction="column" alignItems="center">


                        <TextField
                            // required
                            value={firstName} onChange={e => setFirstName(e.target.value)}
                            id="outlined-firstname-input" label="First Name" size='small'
                            margin="normal" color='primary' style={{ width: 350 }} />

                        {errors.firstName && (
                            <Typography sx={{ fontSize: 12, fontWeight: 500 }} color='#f44336' align='center'>{errors.firstName}</Typography>
                        )}


                        <TextField
                            //  required 
                            value={lastName} onChange={e => setLastName(e.target.value)}
                            id="outlined-lastname-input" label="Last Name" size='small'
                            margin="normal" color='primary' style={{ width: 350 }} />

                        {errors.lastName && (
                            <Typography sx={{ fontSize: 12, fontWeight: 500 }} color='#f44336' align='center'>{errors.lastName}</Typography>
                        )}


                        <TextField
                            // required 
                            value={email} onChange={e => setEmail(e.target.value)}
                            id="outlined-email-input" label="Email" size='small'
                            margin="normal" color='primary' style={{ width: 350 }} />

                        {errors.email && (
                            <Typography sx={{ fontSize: 12, fontWeight: 500 }} color='#f44336' align='center'>{errors.email}</Typography>
                        )}



                        <TextField
                            // required 
                            value={password} onChange={e => setPassword(e.target.value)}
                            id="outlined-password-input" label="Password" type="password"
                            size='small' margin="normal" color='primary' style={{ width: 350 }} />

                        {errors.password && (
                            <Typography sx={{ fontSize: 12, fontWeight: 500 }} color='#f44336' align='center'>{errors.password}</Typography>
                        )}



                        <TextField
                            // required 
                            value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                            id="outlined-confirmpassword-input" label="Confirm Password" type="password"
                            size='small' margin="normal" color='primary' style={{ width: 350 }} />

                        {errors.confirmPassword && (
                            <Typography sx={{ fontSize: 12, fontWeight: 500 }} color='#f44336' align='center'>{errors.confirmPassword}</Typography>
                        )}


                        {Object.keys(errors).length > 0 && (
                            <Typography sx={{ fontSize: 16, fontWeight: 500, mt: 2 }} color='#f44336'
                            align='center'>
                                You have some validation errors
                            </Typography>
                        )}
                        {/* <Typography sx={{ fontSize: 16, fontWeight: 500, mt: 2 }} color='#f44336'
                            align='center'>
                            Something went wrong!
                        </Typography> */}


                        <Button variant="contained" size='large' type='submit' disabled={loading}
                            style={{ backgroundColor: '#1C75BC', position: 'relative' }} sx={{ mt: 1 }}>
                            Create Account
                        </Button>

                        <Grid container row sx={{ mt: 1 }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 500, ml: 10.5 }}
                                align='center'>
                                Have an account?
                            </Typography>


                                    <Link sx={{ fontSize: 12, fontWeight: 500, ml: 25 }} 
                                    href="/login" underline='none' align='center' 
                                    style={{ position: 'absolute' }} id='transfer'>
                                        {'Login now!'}
                                    </Link>

                        </Grid>

                        <Box sx={{ mt: 7 }} />

                    </Grid>
                </form>

            </Grid>
        </Box>

    )
};

export default Register;