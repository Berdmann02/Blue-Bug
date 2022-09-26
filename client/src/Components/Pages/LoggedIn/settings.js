import * as React from 'react'
import {
    Box, Typography, Grid, Divider, IconButton,
    Tooltip, Paper, Button, TextField, Link,
    CircularProgress
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import MyChart from '../../Helpers/ViewTickets/myChart'
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import SourceIcon from '@mui/icons-material/Source';
// import { Link } from "react-router-dom"
import ThemeSwitch from '../../Helpers/Settings/themeSwitch'
import PasswordIcon from '@mui/icons-material/Password';
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../Context/GlobalContext';
import NameChange from '../../Helpers/Settings/nameChange'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function Settings({ parentCallback, value }) {

    const classes = useStyles();

    const { user, fetchingUser } = useGlobalContext();

    if (!user && fetchingUser === false) {
        return <Navigate to="/login" />
    }
    return fetchingUser ? 
     (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress color="primary" sx={{ mt: 30 }} thickness='5' />
        </Grid>
    ) : 
    (
        <Box sx={{ pt: 10, pl: 32 }} className={classes.root}>
            <Grid container justifyContent="center" direction="column" alignItems="center">
                <Paper sx={{ width: 975, height: 900 }}>

                    <Box sx={{ mt: 1 }} />

                    <Typography align='center' sx={{ fontSize: 30, fontWeight: 500 }}>
                        Settings
                    </Typography>

                    <Grid container justifyContent="center">
                        <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '15%' }} />
                    </Grid>

                    <Box sx={{ mt: 5 }} />
                    <Grid container justifyContent="flex-start">
                        <Box sx={{ ml: 3 }} />

                        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                            General
                        </Typography>

                        <Grid container justifyContent="flex-start">
                            <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC', ml: 2 }} style={{ width: '10%' }} />
                        </Grid>

                        <Typography sx={{ mt: 2, ml: 5 }}>
                            Theme :
                        </Typography>

                        {/* <Typography sx={{ ml: 3, mt: 2 }}>
                            Light Mode 
                        </Typography> */}

                        <Box sx={{ ml: .8 }} />

                        <ThemeSwitch sx={{ mt: .4 }} parentCallback={parentCallback} value={value} />

                        {/* <Typography sx={{ mr: 6, mt: 2 }}>
                            Dark Mode 
                        </Typography> */}

                    </Grid>
                    <Box sx={{ mt: 5 }} />
                    <Grid container justifyContent="flex-start">

                        <Box sx={{ ml: 3 }} />

                        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                            Security
                        </Typography>

                        <Grid container justifyContent="flex-start">
                            <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC', ml: 2 }} style={{ width: '10%' }} />
                        </Grid>

                        <NameChange/>

                        {/* <Grid container column sx={{ mt: 2 }}> */}
                        {/* <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            sx={{ mt: 3 }}
                        >

                            {/* <Box sx={{ mt: 2 }} /> */}


                            {/* <TextField
                                id="outlined-helperText"
                                label="First Name"
                                defaultValue={user.firstName}
                                sx={{ ml: 5 }}
                                InputProps={{
                                    readOnly: !editing,
                                }}
                                ref={input}
                                onChange={e => setFirstName(e.target.value)}
                            />

                            <Box sx={{ mt: 3 }} />

                            <TextField
                                id="outlined-helperText"
                                label="Last Name"
                                defaultValue='bye'
                                // {lastName}
                                sx={{ ml: 5 }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            <Box sx={{ mt: 3 }} />

                            <TextField
                                id="outlined-helperText"
                                label="Email"
                                defaultValue='email here...'
                                // {email}
                                sx={{ ml: 5, width: 350 }}
                                InputProps={{
                                    readOnly: true,
                                }}
                            /> */}


                            {/* <Typography sx={{ ml: 31.5, mt: 2, fontSize: 14.25 }}>
                                <Link href="/change" underline="hover">
                                    {'Change Password?'}
                                </Link>
                            </Typography> */}


                            {/* <Typography sx={{ ml: 31.5, mt: 1, fontSize: 14.25 }}>
                                <Link href="/change" underline="none" id='transfer'>
                                    {'Change password?'}
                                </Link>
                            </Typography>

                            {!editing ? 
                                <Box sx={{ ml: 41 }}>
                                <Button onClick={onEdit} variant="contained" size='medium' style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 1 }}>Edit</Button>
                            </Box>
                            :
                            <Grid container row>
                            <Box sx={{ ml: 29 }}>
                                <Button onClick={stopEditing} variant="outlined" size='medium' sx={{ mt: 1 }}>Cancel</Button>
                            </Box>


                            <Box sx={{ ml: 1 }}>
                                <Button variant="contained" size='medium' style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 1 }}>Save</Button>
                            </Box>
                            </Grid>
                            }  */}


                            {/* <Typography sx={{ mt: 2, ml: 5 }}>
                                Change First Name :
                            </Typography>



                            <Typography sx={{ mt: 5, ml: 5 }}>
                                Change Last Name :
                            </Typography>


                            <Typography sx={{ mt: 5, ml: 5 }}>
                                Change Email :
                            </Typography>


                            <Typography sx={{ mt: 5, ml: 5 }}>
                                Change Password :
                            </Typography> */}

                        {/* </Grid> */}
                    </Grid>

                </Paper>
            </Grid>
        </Box>
    )
}

export default Settings;