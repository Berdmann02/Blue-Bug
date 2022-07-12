import * as React from 'react'
import { Box, Typography, Grid, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ViewChart from '../Helpers/ViewTickets/viewChart'


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

                <Typography variant='h4' sx={{ fontSize: 30, fontWeight: 500 }} align='center'>
                    View Tickets
                </Typography>

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