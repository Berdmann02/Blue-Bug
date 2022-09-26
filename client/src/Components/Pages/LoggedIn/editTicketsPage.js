import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, CircularProgress, Checkbox
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import EditSeverity from '../../Helpers/EditTickets/editSeverity'
// import UploadButton from '../../Helpers/CreateTickets/uploadButton'
import EditSelect from '../../Helpers/EditTickets/editSelect'
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../../Context/GlobalContext';
import axios from 'axios'
import EditTickets from './editTickets'




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));


function EditTicketsPage() {

    const ticketId = window.location.pathname.split('/').pop()

    const { user, fetchingUser, allTickets, completeTickets } = useGlobalContext();

    // const [checked, setChecked] = React.useState(false);
    // console.log(checked);

    const Tickets = allTickets.allTickets || []

    const TicketName = Tickets.filter(Ticket => Ticket._id === ticketId).map(ticket => ticket.name).toString('')

    const TicketSteps = Tickets.filter(Ticket => Ticket._id === ticketId).map(ticket => ticket.steps).toString('')

    const TicketExpected = Tickets.filter(Ticket => Ticket._id === ticketId).map(ticket => ticket.expected).toString('')

    const TicketActual = Tickets.filter(Ticket => Ticket._id === ticketId).map(ticket => ticket.actual).toString('')

    const TicketFiles = Tickets.filter(Ticket => Ticket._id === ticketId).map(ticket => ticket.files).toString('')

    const TicketSeverity = Tickets.filter(Ticket => Ticket._id === ticketId).map(ticket => ticket.severity).toString('')

    const TicketAssign = Tickets.filter(Ticket => Ticket._id === ticketId).map(ticket => ticket.assign)

    const CompleteChecker = completeTickets.some((ticket) => ticket._id === ticketId)

    const classes = useStyles();

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
        <EditTickets ticketId={ticketId} TicketName={TicketName} TicketSteps={TicketSteps} TicketExpected={TicketExpected}
        TicketActual={TicketActual} TicketFiles={TicketFiles} TicketSeverity={TicketSeverity} TicketAssign={TicketAssign[0]}
        CompleteChecker={CompleteChecker}/>
    )
};

export default EditTicketsPage;