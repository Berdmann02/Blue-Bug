import * as React from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Chart from '../Helpers/Dashboard/chart';
import Table from '../Helpers/Dashboard/dashTable'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}));

function Dashboard() {

  const classes = useStyles();

  return (
    <Box sx={{ pt: 10, pl: 32 }} className={classes.root}>

      <Box component="span" sx={{ display: 'block' }}>

        <Box component="span" sx={{ display: 'block', width: 385 }}>
          {/* <Card sx={{ backgroundColor: '#1c4dbc' }}> */}
          {/* <Card variant='outlined' sx={{ borderColor: '#429be3' }}> */}
          {/* <Card> */}
          <Card>
            <CardContent>
              <Typography variant='h3' style={{ fontWeight: '700' }} sx={{ fontSize: 30 }}>
                Hello
              </Typography>

              <Typography variant='h1' style={{ fontWeight: '700' }} sx={{ fontSize: 50, color: '#1C75BC' }}>
                Benjamin,
              </Typography>

              <Typography variant='h6' sx={{ mt: 3 }} noWrap>
                There are 6 tickets waiting for you!
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


      <Box sx={{ pl: 10 }}>
        <Chart />

        <Typography variant="caption" style={{ fontStyle: 'italic' }} display="block" gutterBottom align='right' sx={{ color: '#808080', fontSize: 9, pr: 1 }}>
          updated weekly
        </Typography>

      </Box>

    </Box>
  )
};

export default Dashboard