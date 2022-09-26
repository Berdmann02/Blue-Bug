import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, CircularProgress, Checkbox,
    Chip
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import EditSeverity from '../../Helpers/EditTickets/editSeverity'
// import UploadButton from '../../Helpers/CreateTickets/uploadButton'
import EditSelect from '../../Helpers/EditTickets/editSelect'
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../Context/GlobalContext';
import axios from 'axios'
import EditUploadButton from '../../Helpers/EditTickets/editUploadButton'




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));


function EditTickets({ ticketId, TicketName, TicketSteps, TicketExpected, TicketActual, TicketFiles, TicketSeverity, TicketAssign, CompleteChecker }) {

    const { user, allTickets, ticketComplete, ticketIncomplete, updateTicket, users, completeTickets} = useGlobalContext();

    const Tickets = allTickets.allTickets || []

    const USERS = users.users || []

    const [upload, setUpload] = React.useState('');
    const [checked, setChecked] = React.useState(CompleteChecker ? true : false);
    const [submit, setSubmit] = React.useState(false);

    const [name, setName] = React.useState(TicketName);
    const [steps, setSteps] = React.useState(TicketSteps);
    const [expected, setExpected] = React.useState(TicketExpected);
    const [actual, setActual] = React.useState(TicketActual);
    const [files, setFiles] = React.useState(TicketFiles);
    const [severity, setSeverity] = React.useState(TicketSeverity);
    const [assign, setAssign] = React.useState(TicketAssign);
    // const [editing, setEditing] = React.useState(true);
    const input = React.useRef(null);

    const assignList = assign.map((item) => item);

    const handleChecked = (e) => {
        e.preventDefault();
        setChecked(!checked);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setFiles('');
    }

    const handleSave = (e) => {
        e.preventDefault();

            {checked ?
                  axios.put(`/api/tickets/${ticketId}/complete`).then(res => {
          ticketComplete(res.data);
        }) :
        axios.put(`/api/tickets/${ticketId}/incomplete`).then((res) => {
            ticketIncomplete(res.data);
          });
            }

        axios.put(`/api/tickets/${ticketId}`, { name, steps, expected, actual, files, severity, assign }).then(res => {
            updateTicket(res.data);
            // window.location.reload(false);

        })
        
        setSubmit(true);
    }

    const classes = useStyles();

    if(submit){
        if(user.role.includes('Admin')){
          return <Navigate to="/view" />
        } else {
          return <Navigate to="/mytickets" />
        }
      }

    return (
        <Box sx={{ pt: 10, pl: 32 }} className={classes.root}>

            {/* <Box component="span" sx={{ display: 'block' }}> */}

            {/* {Tickets.filter(Ticket => Ticket._id === ticketId).map((ticket) => { */}


            <Grid container justifyContent="center" direction="column" alignItems="center">


                <Typography variant='h4' sx={{ fontSize: 30, fontWeight: 500 }} align='center'>
                    Edit Ticket
                </Typography>


                <Divider sx={{ pt: 1, borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '35%' }} />

                <Box sx={{ mt: 1 }} />




                <TextField
                    id="outlined-helperText"
                    label="Ticket Name"
                    // defaultValue={Tickets.filter(Ticket => Ticket._id === ticketId).map(ticket => ticket.name)}
                    defaultValue={name}
                    sx={{ ml: 5 }}
                    style={{ width: 350 }}
                    size='small'
                    margin='normal'
                    color='primary'
                    ref={input}
                    onChange={e => setName(e.target.value)}
                />



                <TextField
                    id="outlined-helperText"
                    label="Steps To Reproduce Bug"
                    defaultValue={steps}
                    sx={{ ml: 5 }}
                    style={{ width: 350 }}
                    size='small'
                    margin='normal'
                    color='primary'
                    multiline
                    rows={3}
                    ref={input}
                    onChange={e => setSteps(e.target.value)}
                />

                <TextField
                    id="outlined-helperText"
                    label="Expected Result"
                    defaultValue={expected}
                    sx={{ ml: 5 }}
                    style={{ width: 350 }}
                    size='small'
                    margin='normal'
                    color='primary'
                    multiline
                    rows={2}
                    ref={input}
                    onChange={e => setExpected(e.target.value)}
                />

                <TextField
                    id="outlined-helperText"
                    label="Actual Result"
                    defaultValue={actual}
                    sx={{ ml: 5 }}
                    style={{ width: 350 }}
                    size='small'
                    margin='normal'
                    color='primary'
                    multiline
                    rows={2}
                    ref={input}
                    onChange={e => setActual(e.target.value)}
                />


                <Typography sx={{ mt: 2 }}>
                    Upload Pictures/Videos of the Bug
                </Typography>


                {/* <UploadButton /> */}

                <Box sx={{ mt: 1 }} />

                {/* <Typography>{Tickets.filter(Ticket => Ticket._id === ticketId).map(ticket => ticket.files)}</Typography> */}


                {!files ?
                    <Box>
                        <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>No files loaded...</Typography>
                        <EditUploadButton files={files} setFiles={setFiles} />
                    </Box>

                    :
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box sx={{ml: 4 }}>
                        <img src={`data:image;base64,${files}`} width={370} />
                        </Box>

                        <Chip label="Delete Picture" color="error" onDelete={handleDelete} sx={{ mt: 1 }}/>
                    </Grid>
                }

                        <Box sx={{ mt: 1 }}>
                            <EditSeverity severity={severity} setSeverity={setSeverity} />
                        </Box>

                        <Box sx={{ mt: 3 }}>
                            <EditSelect setAssign={setAssign} assignList={assignList}
                            //  assign={assign} 
                             />
                        </Box>

                        <Box sx={{ mt: 2 }} />

                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
                                Complete Ticket :
                            </Typography>

                            <Checkbox
                                //  {...{ inputProps: { 'aria-label': 'Checkbox demo' } }}
                                inputProps={{ 'aria-label': 'controlled' }}
                                onClick={handleChecked} checked={checked}
                            />

                        </Grid>


                        <Button onClick={handleSave} type='submit' variant="contained" size='large' style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 5 }}>Save Ticket</Button>

                        <Box sx={{ mt: 15 }} />


                    </Grid>
                      {/* })} */}

                {/* </Box> */}
        </Box>

    )
};

export default EditTickets;