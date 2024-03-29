import * as React from 'react';
import {
  Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TablePagination,
  TableRow, Box, IconButton, Collapse, Grid,
  Card, Divider, CardContent, Typography,
  tableCellClasses, Dialog, DialogTitle,
  DialogContent, Button, DialogActions,
  Checkbox, Tooltip
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles'
import Delete from './completeDeleteDialog'
import { Link } from "react-router-dom"
import { useGlobalContext } from '../../Context/GlobalContext'


function Info(props) {

  const { completeTickets, users } = useGlobalContext();

  const USERS = users.users || []


  const handleClose = () => {
    props.setOpen(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  return (
    <div>
      {completeTickets.filter(ticket => ticket._id === props.ticketId).map((tickets) => (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={props.open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Ticket Information
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Box component="div" sx={{ display: 'inline' }}>
              <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
                User(s) :
              </Typography>
              <Box sx={{ mt: 1 }} />
              <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
                  <CardContent>
                    <Typography variant="body1" >
                      {/* {tickets.assign.join(', ')} */}
                      {tickets.assign.map((item) => {
                        return USERS.filter(({ _id }) => _id === item).map((person) => (
                          (person.firstName + ' ' + person.lastName.substring(0, 1) + '.')
                        ))
                      }).join(', ')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Box>


            <Box sx={{ mt: 3 }} />





            <Box component="div" sx={{ display: 'inline' }}>
              <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
                Steps To Reproduce :
              </Typography>
              <Box sx={{ mt: 1 }} />
              <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
                  <CardContent>
                    <Typography variant="body1" >
                      {tickets.steps}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Box>


            <Box sx={{ mt: 3 }} />



            <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
              Expected Result :
            </Typography>
            <Box sx={{ mt: 1 }} />
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
              <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
                <CardContent>
                  <Typography>
                    {tickets.expected}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Box sx={{ mt: 3 }} />



            <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
              Actual Result :
            </Typography>
            <Box sx={{ mt: 1 }} />
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
              <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
                <CardContent>
                  <Typography>
                    {tickets.actual}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Box sx={{ mt: 3 }} />




            <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
              Pictures/Videos :
            </Typography>
            <Box sx={{ mt: 1 }} />
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
              <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
                <CardContent>
                  {/* {tickets.files} */}
                  {/* <Typography>
                    No files loaded...
                  </Typography> */}

                  {!tickets.files ?
                    <Typography>
                      No files loaded...
                    </Typography>
                    :
                    <img src={`data:image;base64,${tickets.files}`} width={370} />
                  }
                </CardContent>
              </Card>
            </Grid>

            <Box sx={{ mt: 2 }} />

            {/* <Grid container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">
                <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
                  Complete Ticket :
                </Typography>
  
                <Checkbox {...{inputProps: { 'aria-label': 'Checkbox demo' }}} defaultChecked />
  
                </Grid> */}

            <Box sx={{ mt: 2 }} />

          </DialogContent>
          <DialogActions>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Delete ticket={tickets} />

            </Grid>
            <Button component={Link} to={`/edit/${tickets._id}`} autoFocus onClick={handleClose}>
              Edit
            </Button>
            {/* <Button autoFocus onClick={handleClose}>
       Save
     </Button> */}
          </DialogActions>
        </BootstrapDialog>
      ))}
    </div>
  )
}

export default Info;