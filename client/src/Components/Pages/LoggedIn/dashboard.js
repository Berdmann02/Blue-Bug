import * as React from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid, CircularProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Chart from '../../Helpers/Dashboard/chart';
import Table from '../../Helpers/Dashboard/dashTable';
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../../Context/GlobalContext';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}));

function Dashboard() {

  const classes = useStyles();

  const { user, fetchingUser, incompleteTickets } = useGlobalContext();
  // const [zero, setZero] = React.useState(false);
  // const [one, setOne] = React.useState(false);
  // const [more, setMore] = React.useState(false);

  // function checkTickets () {
  //   if(incompleteTickets.filter(ticket => ticket.assign.includes(user.firstName + ' ' + user.lastName.substring(0, 1) + '.')).length === 0) {
  //     return (
  //       <Typography variant='h6' sx={{ mt: 3 }} noWrap>
  //               You do not have any tickets assigned to you!
  //               </Typography> 
  //     )
  //   } 

  //   if(incompleteTickets.filter(ticket => ticket.assign.includes(user.firstName + ' ' + user.lastName.substring(0, 1) + '.')).length === 1) {
  //     return (
  //       <Typography variant='h6' sx={{ mt: 3 }} noWrap>
  //               There is 1 ticket waiting for you!
  //               </Typography> 
  //     )
  //   }
  // }

    //  if(incompleteTickets.filter(ticket => ticket.assign.includes(user.firstName + ' ' + user.lastName.substring(0, 1) + '.')).length === 0) {
    //   setZero(true);
    // } 

    // if(incompleteTickets.filter(ticket => ticket.assign.includes(user.firstName + ' ' + user.lastName.substring(0, 1) + '.')).length === 1) {
    //   setOne(true);
    // } 

    // if(zero && one === false) {
    //   setMore(true);
    // }


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


            {/* {zero ? <Typography variant='h6' sx={{ mt: 3 }} noWrap>
                 You do not have any tickets assigned to you!
                 </Typography> : null }

            {one ? <Typography variant='h6' sx={{ mt: 3 }} noWrap>
                 There is 1 ticket waiting for you!
                 </Typography> : null}

            {more ? <Typography variant='h6' sx={{ mt: 3 }} noWrap>There are { incompleteTickets.filter(ticket => ticket.assign.includes(user.firstName + ' ' + user.lastName.substring(0, 1) + '.')).length} tickets waiting for you! </Typography> 
            : null} */}




              {incompleteTickets.filter(ticket => ticket.assign.includes(user._id)).length === 1 ? 
                <Typography variant='h6' sx={{ mt: 3 }} noWrap>
                There is 1 ticket waiting for you!
                </Typography> :
              <Typography variant='h6' sx={{ mt: 3 }} noWrap>
                 {/* There are {incompleteTickets.length} tickets waiting for you! */}
                There are { incompleteTickets.filter(ticket => ticket.assign.includes(user._id)).length} tickets waiting for you!
                {/* {incompleteTickets.filter(ticket => ticket.assign === (user.firstName + ' ' + user.lastName.substring(0,1) + '.')).length} */}
             </Typography>
                } 

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


      <Box sx={{ pl: 13 }}>
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