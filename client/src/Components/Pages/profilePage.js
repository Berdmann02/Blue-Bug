import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, Paper, IconButton, Avatar,
    Stack, Tooltip
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Picture from '../Helpers/ProfilePage/uploadAvatar'
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function ProfilePage() {

    const classes = useStyles();

    // const [hover, setHover] = React.useState(false);

    // const hovertip = <EditIcon />

    // mouseEnter = () => {
    //     setHover(true);
    // }

    // mouseLeave = () => {
    //     setHover(false);
    // }

    // {hover ? <Tooltip title={hovertip} />
    // :null}

    // if(hover){
    //     <Tooltip title={hovertip} />
    // }

    return (
        <Box sx={{ pt: 10, pl: 30 }} className={classes.root}>
            <Grid container justifyContent="center" direction="column" alignItems="center">
                <Paper sx={{ width: 975, height: 900 }}>
                    <Box sx={{ mt: 1 }} />

                    <Typography align='center' sx={{ fontSize: 25, fontWeight: 500 }}>
                        Profile
                    </Typography>

                    <Grid container justifyContent="center">
                        <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '15%' }} />
                    </Grid>

                    <Box sx={{ mt: 3 }} />

                    <Grid container justifyContent="flex-start">

                        <Box sx={{ ml: 17 }} />

                        <Picture />

                        <Stack
                            direction="column"
                        // justifyContent="center"
                        // alignItems="flex-start"
                        // spacing={2}
                        >
                            <Typography
                                sx={{ mt: 5, ml: 5, fontSize: 22, fontWeight: 500, color: '#1C75BC' }}>
                                Benjamin Erdmann
                            </Typography>

                            <Typography sx={{ ml: 5.2 }} variant='subtitle1'>
                                Admin
                            </Typography>

                        </Stack>


                    </Grid>
                </Paper>
            </Grid>
        </Box>
    )
}

export default ProfilePage;