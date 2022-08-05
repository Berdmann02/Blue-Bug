import * as React from 'react'
import { Box, Typography, Grid, Divider, IconButton, Tooltip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ViewChart from '../../Helpers/ViewTickets/Admin/viewChart'
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import SourceIcon from '@mui/icons-material/Source';
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../../Context/GlobalContext';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function ViewTickets() {

    const classes = useStyles();

    const { user } = useGlobalContext();

  if(!user){
    return <Navigate to="/login" />;
  }

    return (
        <Box sx={{ pt: 10, pl: 32 }} className={classes.root}>

            <Grid container justifyContent="center" direction="column" alignItems="center">

                <Box style={{ display: 'inline-flex' }}>

                    <Box sx={{ml: 48}} />

                <Typography variant='h4' sx={{ fontSize: 30, fontWeight: 500}} align='center'>
                    View Tickets
                </Typography>

                <Box sx={{ml: 36}} />

                <Tooltip title="My Tickets">
                <IconButton size='small' component={Link} to="/mytickets">
                <SourceIcon />
                </IconButton>
                </Tooltip>

                <Box sx={{mr: 3}} />

                <Tooltip title="Completed Tickets">
                <IconButton size='small' component={Link} to="/completed">
                <CloudDoneIcon />
                </IconButton>
                </Tooltip>

                </Box>
                
                {/* <Box sx={{ mr: 5 }} /> */}

                <Divider sx={{ pt: 1, borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '35%' }} />

                <Box sx={{ mt: 3 }} />

                <Box sx={{ width: 1000, mr: 3 }}>
                <ViewChart />
                </Box>

                <Box sx={{ mt: 10 }} />

            </Grid>


        </Box>
    )
}

export default ViewTickets;