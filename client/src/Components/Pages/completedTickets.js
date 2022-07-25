import * as React from 'react'
import { Box, Typography, Grid, Divider, IconButton, Tooltip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CompleteChart from '../Helpers/ViewTickets/completeChart'
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import SourceIcon from '@mui/icons-material/Source';
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function ViewTickets() {

    const classes = useStyles();

    return (
        <Box sx={{ pt: 10, pl: 32 }} className={classes.root}>

            <Grid container justifyContent="center" direction="column" alignItems="center">

                <Box style={{ display: 'inline-flex' }}>

                    <Box sx={{ml: 34}} />

                <Typography variant='h4' sx={{ fontSize: 30, fontWeight: 500}} align='center'>
                    Completed Tickets
                </Typography>

                <Box sx={{ml: 30.4}} />

                <Tooltip title="My Tickets">
                <IconButton size='small' component={Link} to="/mytickets">
                <SourceIcon />
                </IconButton>
                </Tooltip>

                </Box>
                
                {/* <Box sx={{ mr: 5 }} /> */}

                <Divider sx={{ pt: 1, borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '35%' }} />

                <Box sx={{ mt: 3 }} />

                <Box sx={{ width: 1000, mr: 3 }}>
                <CompleteChart />
                </Box>

                <Box sx={{ mt: 10 }} />

            </Grid>


        </Box>
    )
}

export default ViewTickets;