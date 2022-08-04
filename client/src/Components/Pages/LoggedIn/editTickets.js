import * as React from 'react'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import EditSeverity from '../../Helpers/EditTickets/editSeverity'
import UploadButton from '../../Helpers/CreateTickets/uploadButton'
import EditSelect from '../../Helpers/EditTickets/editSelect'




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function EditTickets() {
    const [upload, setUpload] = React.useState('');

    const classes = useStyles();

    return (
        <Box sx={{ pt: 10, pl: 32 }} className={classes.root}>

            {/* <Box component="span" sx={{ display: 'block' }}> */}

            <Grid container justifyContent="center" direction="column" alignItems="center">


                <Typography variant='h4' sx={{ fontSize: 30, fontWeight: 500 }} align='center'>
                    Edit Ticket
                </Typography>


                <Divider sx={{ pt: 1, borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '35%' }} />

                <Box sx={{ mt: 1 }}>

                </Box>

                <TextField
                    id="outlined-helperText"
                    label="Ticket Name"
                    defaultValue="Create Login Page"
                    sx={{ ml: 5 }}
                    style={{ width: 350 }}
                    size='small'
                    margin='normal'
                    color='primary'
                />

                <TextField
                    id="outlined-helperText"
                    label="Steps To Reproduce Bug"
                    defaultValue="Go to login page and try to sign in"
                    sx={{ ml: 5 }}
                    style={{ width: 350 }}
                    size='small'
                    margin='normal'
                    color='primary'
                    multiline
                    rows={3}
                />

                <TextField
                    id="outlined-helperText"
                    label="Expected Result"
                    defaultValue="Should sign in"
                    sx={{ ml: 5 }}
                    style={{ width: 350 }}
                    size='small'
                    margin='normal'
                    color='primary'
                    multiline
                    rows={2}
                />

                <TextField
                    id="outlined-helperText"
                    label="Actual Result"
                    defaultValue="Reloads the page"
                    sx={{ ml: 5 }}
                    style={{ width: 350 }}
                    size='small'
                    margin='normal'
                    color='primary'
                    multiline
                    rows={2}
                />


                <Typography sx={{ mt: 2 }}>
                    Upload Pictures/Videos of the Bug
                </Typography>


                <UploadButton />

                <Box sx={{ mt: 1 }} />

                <Typography>Pictures here...</Typography>

                <Box sx={{ mt: 1 }}>
                    <EditSeverity />
                </Box>

                <Box sx={{ mt: 3 }}>
                    <EditSelect />
                </Box>


                <Button variant="contained" size='large' style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 5 }}>Save Ticket</Button>

                <Box sx={{ mt: 15 }}>

                </Box>


            </Grid>

            {/* </Box> */}
        </Box>

    )
};

export default EditTickets;