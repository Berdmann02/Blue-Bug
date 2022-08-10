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




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function CreateTicket() {
    const [upload, setUpload] = React.useState('');

    const classes = useStyles();

    const { user, fetchingUser } = useGlobalContext();

if(!user && fetchingUser === false){
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

                <Box sx={{ mt: 1 }}/>

                <form>
                <Grid container justifyContent="center" direction="column" alignItems="center">

                <TextField required id="outlined-password-input" label="Ticket Name" size='small' margin="normal" color='primary' multiline style={{ width: 350 }} />

                <TextField id="outlined-multiline-static" label="Steps To Reproduce Bug" multiline rows={3} color='primary' margin='normal' defaultValue='' style={{ width: 350 }} />

                <TextField id="outlined-multiline-static" label="Expected Result" multiline rows={2} color='primary' margin='normal' defaultValue='' style={{ width: 350 }} />

                <TextField id="outlined-multiline-static" label="Actual Result" multiline rows={2} color='primary' margin='normal' defaultValue='' style={{ width: 350 }} />



                {/* <Card sx={{ width: 350, mt: 2, height: 168 }} variant="outlined"> */}
                    {/* <CardContent> */}
                        {/* <Typography sx={{ mt: 2, ml: 3 }}> */}

                            <Typography sx={{ mt: 2 }}>
                            Upload Pictures/Videos of the Bug
                        </Typography>

                    {/* </CardContent>
                    <CardActions> */}

                        <UploadButton />
                        
                    {/* </CardActions>
                </Card> */}

                <Box sx={{ mt: 1 }}>
                <Severity />
                </Box>

                <Box sx={{ mt: 3 }}>
                    <SelectUser />
                </Box>


                <Button variant="contained" size='large' style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 3 }}>Create Ticket</Button>

                </Grid>
                </form>

                <Box sx={{ mt: 15 }}/>

            </Grid>

            {/* </Box> */}
        </Box>

    )
};

export default CreateTicket;