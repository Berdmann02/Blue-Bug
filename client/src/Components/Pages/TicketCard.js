import * as React from 'react'
import { makeStyles } from '@mui/styles'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, Link, CircularProgress
} from '@mui/material'
// import axios from 'axios'
// import { useGlobalContext } from '../../../Context/GlobalContext';
// import { useNavigate, Navigate } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

const TicketCard = ({tickets}) => {

    const classes = useStyles();

    return (
        <Box>
            {tickets.content}
        </Box>
    )
};

export default TicketCard