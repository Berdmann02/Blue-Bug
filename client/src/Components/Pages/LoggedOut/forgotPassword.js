import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, CircularProgress
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useGlobalContext } from '../../../Context/GlobalContext';
import { Navigate } from "react-router-dom"




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function Forgot() {

    const classes = useStyles();

    const { user } = useGlobalContext();

    const { fetchingUser } = useGlobalContext();

    if(user){
        return <Navigate to ='/' />
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
        <Box sx={{ pt: 8 }}
            className={classes.root}>

                    <Grid container justifyContent="center" direction="column" alignItems="center">


                        <Typography variant='h4' sx={{ fontSize: 30, fontWeight: 500 }} align='center'>
                            Reset Password
                        </Typography>


                        <Divider sx={{ pt: 1, borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '35%' }} />

                        <Box sx={{ mt: 2 }} />

                        <Typography>
                            Forgot your password? Please enter your email address
                        </Typography>

                        <Typography>
                            in the box below. A link to reset your password will be sent there!
                        </Typography>

                        <Box sx={{ mt: 2 }} />

                        <TextField required id="outlined-password-input" label="Email" size='small' margin="normal" color='primary' style={{ width: 350 }} />


                        <Button variant="outlined" size='large'
                            // style={{ backgroundColor: '#1C75BC' }} 
                            sx={{ mt: 2 }}>Reset Password</Button>



                    </Grid>
        </Box>

    )
};

export default Forgot;