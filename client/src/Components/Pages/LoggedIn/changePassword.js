import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, CircularProgress
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../../Context/GlobalContext';





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function Change() {

    const classes = useStyles();

    const { user, fetchingUser } = useGlobalContext();

// null - true return
// null - false, redirect login
// !null - false, re

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
                            Change Password
                        </Typography>


                        <Divider sx={{ pt: 1, borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '35%' }} />

                        <Box sx={{ mt: 2 }} />

                    <Box sx={{ mr: 11 }}>
                        <Typography>
                           Please enter your new password.
                        </Typography>
                        </Box>

                        {/* <Box sx={{ mt: 2 }} /> */}

                        <TextField required id="outlined-newpassword-input" type='password' label="New Password" size='small' color='primary' style={{ width: 350 }} sx={{ mt: 1 }} />

                        <Box sx={{ mt: 4 }} />

                        <Box sx={{ mr: 1.9 }}>
                        <Typography>
                           Please confirm your new password below.
                        </Typography>
                        </Box>

                        <TextField required id="outlined-confirmnewpassword-input" type='password' label="Confirm Password" size='small' color='primary' style={{ width: 350 }} sx={{ mt: 1 }} />


                        <Button variant="outlined" size='large'
                            // style={{ backgroundColor: '#1C75BC' }} 
                            sx={{ mt: 4 }}>Change Password</Button>



                    </Grid>
        </Box>

    )
} 

export default Change;