import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, Paper, IconButton, Avatar,
    Stack, Tooltip, CircularProgress
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Picture from '../../Helpers/ProfilePage/uploadAvatar'
import LightPicture from '../../Helpers/ProfilePage/uploadAvatarLight'
import EditIcon from '@mui/icons-material/Edit';
import UploadIcon from '@mui/icons-material/Upload';
import AddIcon from '@mui/icons-material/Add';
import UserChart from '../../Helpers/ProfilePage/userChart'
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../../Context/GlobalContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function ProfilePage({ value }) {

    const classes = useStyles();

    const hovertip = <IconButton size='small'>
        <EditIcon sx={{ width: 20, height: 20 }} />
    </IconButton>

    const upload = <UploadIcon size='small' />

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
        <Box sx={{ pt: 10, pl: 30 }} className={classes.root}>
            <Grid container justifyContent="center" direction="column" alignItems="center">
                <Paper sx={{ width: 975, height: 900 }}>
                    <Box sx={{ mt: 1 }} />

                    <Typography align='center' sx={{ fontSize: 30, fontWeight: 500 }}>
                        Profile
                    </Typography>

                    <Grid container justifyContent="center">
                        <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '15%' }} />
                    </Grid>

                    <Box sx={{ mt: 5 }} />

                    {value === 'dark' ?
                        <Card variant="outlined" sx={{ width: 500, ml: 2, height: 185, borderRadius: 5 }}>
                            <Grid container justifyContent="flex-start">

                                {/* <Box sx={{ ml: 17 }} /> */}

                                <Box sx={{ ml: 5 }} />

                                {/* <Tooltip title={upload} placement="bottom" arrow>
                            <Box> */}
                                <Picture />
                                {/* </Box>
                        </Tooltip> */}

                                <Stack
                                    direction="column"
                                >

                                    <Typography sx={{ mt: 5, ml: 5, fontSize: 22, fontWeight: 500, color: '#1C75BC' }}>
                                        Benjamin Erdmann
                                    </Typography>

                                    <Typography sx={{ ml: 5.2 }} variant='subtitle1'>
                                        Admin
                                    </Typography>

                                </Stack>
                            </Grid>
                        </Card>
                        :
                        <Card variant="outlined" sx={{ width: 500, ml: 2, height: 185, borderRadius: 5, bgcolor: '#1C75BC' }}>
                            <Grid container justifyContent="flex-start">

                                <Box sx={{ ml: 5 }} />

                                {/* <Tooltip title={upload} placement="bottom" arrow>
                            <Box> */}
                                <LightPicture />
                                {/* </Box>
                        </Tooltip> */}

                                <Stack
                                    direction="column"
                                >

                                    <Typography sx={{ mt: 5, ml: 5, fontSize: 22, fontWeight: 500, color: '#FFFFFF' }}>
                                        Benjamin Erdmann
                                    </Typography>

                                    <Typography sx={{ ml: 5.2 }} variant='subtitle1'>
                                        Admin
                                    </Typography>

                                </Stack>
                            </Grid>
                        </Card>
                    }

                    <Box sx={{ ml: 95 }}>
                        <Button component={Link} to="/newuser" startIcon={<AddIcon />} variant="contained" size='medium' style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 2 }}>Create New User</Button>
                    </Box>

                    <Box sx={{ mt: 2 }} />

                <UserChart />

                </Paper>
            </Grid>
        </Box>
    )
}

export default ProfilePage;