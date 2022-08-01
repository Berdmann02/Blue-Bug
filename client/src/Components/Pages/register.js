import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions
} from '@mui/material'
import { makeStyles } from '@mui/styles'





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function Register() {

    const classes = useStyles();

    return (
        <Box sx={{ pt: 8 }}
         className={classes.root}>

            <Grid container justifyContent="center" direction="column" alignItems="center">


                <Typography variant='h4' sx={{ fontSize: 30, fontWeight: 500 }} align='center'>
                    Create A New Account
                </Typography>


                <Divider sx={{ pt: 1, borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '35%' }} />

                <Box sx={{ mt: 2 }} />

                <TextField required id="outlined-password-input" label="First Name" size='small' margin="normal" color='primary' style={{ width: 350 }} />

                <TextField required id="outlined-password-input" label="Last Name" size='small' margin="normal" color='primary' style={{ width: 350 }} />

                <TextField required id="outlined-password-input" label="Email" size='small' margin="normal" color='primary' style={{ width: 350 }} />

                <TextField id="outlined-password-input" label="Password" type="password" size='small' margin="normal" color='primary' style={{ width: 350 }} />


                <Button variant="contained" size='large' style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 3 }}>Create Account</Button>



            </Grid>
        </Box>

    )
};

export default Register;