import * as React from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid, CircularProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Chart from '../../Helpers/Dashboard/chart';
import Table from '../../Helpers/Dashboard/dashTable';
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../../Context/GlobalContext';
import TicketCard from '../TicketCard'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}));

function Dashboard() {

  const classes = useStyles();

  const { user, fetchingUser, incompleteTickets } = useGlobalContext();

  if (!user && fetchingUser === false) {
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
    <Box sx={{ pt: 10, pl: 32 }} className={classes.root}>

      <Box component="span" sx={{ display: 'block' }}>

        <Box component="span" sx={{ display: 'block', width: 395 }}>
          {/* <Card sx={{ backgroundColor: '#1c4dbc' }}> */}
          {/* <Card variant='outlined' sx={{ borderColor: '#429be3' }}> */}
          {/* <Card> */}
          <Card>
            <CardContent>
              <Typography variant='h3' style={{ fontWeight: '700' }} sx={{ fontSize: 30 }}>
                Hello
              </Typography>

              <Typography variant='h1' style={{ fontWeight: '700' }} sx={{ fontSize: 50, color: '#1C75BC' }}>
                {user.firstName},
              </Typography>

              <Typography variant='h6' sx={{ mt: 3 }} noWrap>
                There are {incompleteTickets.length} tickets waiting for you!
              </Typography>

            </CardContent>
          </Card>
        </Box>


        <Box sx={{ pt: 5, width: 500 }}>
          <Table />
          <Typography variant="caption" style={{ fontStyle: 'italic' }} display="block" gutterBottom align='right' sx={{ color: '#808080', fontSize: 9, pr: 1 }}>
            most recent tickets
          </Typography>
        </Box>

      </Box>


      <Box sx={{ pl: 3 }}>
        <Chart />

        <Typography variant="caption" style={{ fontStyle: 'italic' }} display="block" gutterBottom align='right' sx={{ color: '#808080', fontSize: 9, pr: 1 }}>
          updated weekly
        </Typography>

      </Box>

      {/* {incompleteTickets.countDocuments()} */}

      {/* <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
      {incompleteTickets.map((tickets) => (
        // <Typography key={tickets._id}>{tickets.content}</Typography>
          <TicketCard tickets={tickets} key={tickets._id} />
      ))}

      <Typography style={{ fontWeight: '700', fontSize: '15' }}>Complete Tickets</Typography>

      {completeTickets.length > 0 && (
        <Box>
          {completeTickets.map(tickets => (
            // <Typography key={tickets._id}>{tickets.content}</Typography>
            <TicketCard tickets={tickets} key={tickets._id} />
          ))}
        </Box>
      )}
      </Grid> */}

{/* {incompleteTickets.sort().slice(0,3).map(tickets => (
            <Typography key={tickets._id}>{tickets.name}</Typography>
          ))} */}

{/* {incompleteTickets.filter(tickets => tickets._id)} */}


    </Box>
  )
};

export default Dashboard