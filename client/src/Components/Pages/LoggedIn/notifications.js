import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, Paper, IconButton, Avatar,
    Stack, Tooltip, Alert, AlertTitle
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import EditIcon from '@mui/icons-material/Edit';
import UploadIcon from '@mui/icons-material/Upload';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../../Context/GlobalContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function ProfilePage() {

    const classes = useStyles();

    const hovertip = <IconButton size='small'>
        <EditIcon sx={{ width: 20, height: 20 }} />
    </IconButton>

    const upload = <UploadIcon size='small' />

    const { user } = useGlobalContext();

  if(!user){
    return <Navigate to="/login" />;
  }

    return (
        <Box sx={{ pt: 10, pl: 30 }} className={classes.root}>
            <Grid container justifyContent="center" direction="column" alignItems="center">
                <Paper sx={{ width: 975, height: 900 }}>
                    <Box sx={{ mt: 1 }} />

                    <Typography align='center' sx={{ fontSize: 30, fontWeight: 500 }}>
                        Notifications
                    </Typography>

                    <Grid container justifyContent="center">
                        <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '15%' }} />
                    </Grid>

                    <Box sx={{ mt: 3 }} />

                            {/* <Box sx={{ mt: 3, ml: 10 }}>
                                <Typography>
                                    Today
                                </Typography>
                            </Box>


                            <Box sx={{ mt: 10, ml: 10 }}>
                                <Typography>
                                    More to come...
                                </Typography>
                            </Box> */}

                            <Alert icon={<DeleteOutlineIcon fontSize="inherit" />} severity="error" sx={{ width: 800, ml: 11.5 }}>
                                <AlertTitle>Deleted</AlertTitle>
                                Fede deleted a ticket!
                            </Alert>

                            <Box sx={{ mt: 1 }} />

                            <Alert severity="warning" sx={{ width: 800, ml: 11.5 }}>
                                <AlertTitle>Deadline Coming</AlertTitle>
                                "Create Login Page" Ticket should be finished soon!
                            </Alert>

                            <Box sx={{ mt: 1 }} />

                            <Alert icon={<AddOutlinedIcon fontSize="inherit" />} severity="info" sx={{ width: 800, ml: 11.5 }}>
                                <AlertTitle>Ticket Added</AlertTitle>
                                Ben added a new ticket!
                            </Alert>

                            <Box sx={{ mt: 1 }} />

                            <Alert severity="success" sx={{ width: 800, ml: 11.5 }}>
                                <AlertTitle>Completion</AlertTitle>
                                Zacky completed a ticket!
                            </Alert>


                </Paper>
            </Grid>
        </Box>
    )
}

export default ProfilePage;