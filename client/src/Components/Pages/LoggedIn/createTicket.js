import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, CircularProgress
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import SelectUser from '../../Helpers/CreateTickets/selectUser'
import Severity from '../../Helpers/CreateTickets/severity'
import UploadButton from '../../Helpers/CreateTickets/uploadButton'
import { Navigate } from "react-router-dom"
import { useGlobalContext } from '../../../Context/GlobalContext';
import axios from 'axios'



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function CreateTicket() {


    const { addTicket, user, fetchingUser } = useGlobalContext();
    const [name, setName] = React.useState('');
    const [steps, setSteps] = React.useState('');
    const [expected, setExpected] = React.useState('');
    const [actual, setActual] = React.useState('');
    const [files, setFiles] = React.useState('');
    const [severity, setSeverity] = React.useState('');
    const [assign, setAssign] = React.useState([]);

    console.log(assign);

    // console.log(files);
    // const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        // setLoading(true);

        let data = {};

        data = {
            name,
            steps,
            expected,
            actual,
            files,
            severity,
            assign,
        };

        axios.post("/api/tickets/new", data).then((res) => {
            setName('');
            setSteps('');
            setExpected('');
            setActual('');
            setFiles('');
            setSeverity('');
            setAssign([]);

            addTicket(res.data);
        }).catch(err => {
            // setLoading(false);

            if (err?.response?.data) {
                setErrors(err.response.data);
            }
        })

        // window.location.reload(false);
    };


    const classes = useStyles();

    // const { user, fetchingUser } = useGlobalContext();

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

            {/* <Box component="span" sx={{ display: 'block' }}> */}

            <Grid container justifyContent="center" direction="column" alignItems="center">


                <Typography variant='h4' sx={{ fontSize: 30, fontWeight: 500 }} align='center'>
                    Create A New Ticket
                </Typography>


                <Divider sx={{ pt: 1, borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '35%' }} />

                <Box sx={{ mt: 1 }} />

                <form onSubmit={onSubmit}>
                    <Grid container justifyContent="center" direction="column" alignItems="center">

                        <TextField value={name} onChange={(e) => setName(e.target.value)}
                        //  required 
                         id="outlined-password-input" label="Ticket Name" size='small' 
                         margin="normal" color='primary' multiline style={{ width: 350 }} />

                        <TextField value={steps} onChange={(e) => setSteps(e.target.value)} 
                        id="outlined-multiline-static" label="Steps To Reproduce Bug" 
                        multiline rows={3} color='primary' margin='normal' defaultValue='' 
                        style={{ width: 350 }} />

                        <TextField value={expected} onChange={(e) => setExpected(e.target.value)} 
                        id="outlined-multiline-static" label="Expected Result" multiline 
                        rows={2} color='primary' margin='normal' defaultValue='' 
                        style={{ width: 350 }} />

                        <TextField value={actual} onChange={(e) => setActual(e.target.value)} 
                        id="outlined-multiline-static" label="Actual Result" multiline rows={2} 
                        color='primary' margin='normal' defaultValue='' 
                        style={{ width: 350 }} />


                        <Typography sx={{ mt: 2 }}>
                            Upload Pictures/Videos of the Bug
                        </Typography>

                        {/* <UploadButton files={files} setFiles={setFiles} /> */}


                        <Box sx={{ mt: 1 }}>
                            <Severity severity={severity} setSeverity={setSeverity} />
                        </Box>


                        <Box sx={{ mt: 3 }}>
                            <SelectUser assign={assign} setAssign={setAssign} />
                        </Box>


                        <Button type='submit' variant="contained" size='large' 
                        style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 3 }}>
                            Create Ticket
                            </Button>

                    </Grid>
                </form>

                <Box sx={{ mt: 15 }} />

            </Grid>

            {/* </Box> */}
        </Box>

    )
};

export default CreateTicket;