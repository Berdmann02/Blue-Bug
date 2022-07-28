import * as React from 'react'
import {
    Box, Typography, Grid, Divider, IconButton,
    Tooltip, Paper, Button
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import MyChart from '../Helpers/ViewTickets/myChart'
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import SourceIcon from '@mui/icons-material/Source';
import { Link } from "react-router-dom"
import ThemeSwitch from '../Helpers/Settings/themeSwitch'
import PasswordIcon from '@mui/icons-material/Password';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function ViewTickets({ parentCallback, value }) {

    const classes = useStyles();

    return (
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

                    <Box sx={{mt: 5}} />
                    <Grid container justifyContent="flex-start">
                    <Box sx={{ml: 3}} />
                        
                        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                        General
                        </Typography>

                        <Grid container justifyContent="flex-start">
                        <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC', ml: 2 }} style={{ width: '10%' }} />
                        </Grid>

                        <Typography sx={{mt: 2, ml: 5}}>
                            Theme : 
                        </Typography>

                        {/* <Typography sx={{ ml: 3, mt: 2 }}>
                            Light Mode 
                        </Typography> */}

                        <Box sx={{ml: .8}} />

                        <ThemeSwitch sx={{mt: .4}} parentCallback={parentCallback} value={value}/>

                        {/* <Typography sx={{ mr: 6, mt: 2 }}>
                            Dark Mode 
                        </Typography> */}

                    </Grid>
                    <Box sx={{mt:5}} />
                    <Grid container justifyContent="flex-start">

                    <Box sx={{ ml: 3}} />

                        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                        Security
                        </Typography>

                        <Grid container justifyContent="flex-start">
                        <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC', ml: 2 }} style={{ width: '10%' }} />
                        </Grid>

                    <Grid column>
                        <Typography sx={{mt: 2, ml: 5}}>
                            Change Email : 
                        </Typography>

            

                        <Typography sx={{mt: 5, ml: 5}}>
                            Change Password : 
                        </Typography>



                        </Grid>
                        </Grid>

                </Paper>
            </Grid>
        </Box>
    )
}

export default ViewTickets;