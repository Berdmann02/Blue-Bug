import * as React from 'react'
import {
    Box, Typography, Grid, Divider, IconButton,
    Tooltip, Paper, Button, TextField, Link,
    CircularProgress
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useGlobalContext } from '../../../Context/GlobalContext';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function NameChange() {

    const classes = useStyles();

    const { user, fetchingUser } = useGlobalContext();

    const [firstName, setFirstName] = React.useState(user.firstName);
    const [lastName, setLastName] = React.useState(user.lastName);
    const [email, setEmail] = React.useState(user.email);
    const [editing, setEditing] = React.useState(false);
    const input = React.useRef(null);

    const onEdit = (e) => {
        e.preventDefault();
        setEditing(true);
    }

    const stopEditing = (e) => {
        if(e) {
            e.preventDefault();
        }

        setEditing(false);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        window.location.reload(false);
    }

    return (
        <Box className={classes.root}>
            
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            sx={{ mt: 3 }}
                        >


                            <TextField
                                id="outlined-helperText"
                                label="First Name"
                                defaultValue={firstName}
                                sx={{ ml: 5 }}
                                InputProps={{
                                    readOnly: !editing,
                                }}
                                ref={input}
                                onChange={e => setFirstName(e.target.value)}
                            />

                            <Box sx={{ mt: 3 }} />

                            <TextField
                                id="outlined-helperText"
                                label="Last Name"
                                defaultValue={lastName}
                                sx={{ ml: 5 }}
                                InputProps={{
                                    readOnly: !editing,
                                }}
                                ref={input}
                                onChange={e => setLastName(e.target.value)}
                            />

                            <Box sx={{ mt: 3 }} />

                            <TextField
                                id="outlined-helperText"
                                label="Email"
                                defaultValue={email}
                                sx={{ ml: 5, width: 350 }}
                                InputProps={{
                                    readOnly: !editing,
                                }}
                                ref={input}
                                onChange={e => setEmail(e.target.value)}
                            />


                            <Typography sx={{ ml: 31.5, mt: 1, fontSize: 14.25 }}>
                                <Link href="/change" underline="none" id='transfer'>
                                    {'Change password?'}
                                </Link>
                            </Typography>

                            {!editing ? 
                                <Box sx={{ ml: 41 }}>
                                <Button onClick={onEdit} variant="contained" size='medium' style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 1 }}>Edit</Button>
                            </Box>
                            :
                            <Grid container row>
                            <Box sx={{ ml: 29 }}>
                                <Button onClick={stopEditing} variant="outlined" size='medium' sx={{ mt: 1 }}>Cancel</Button>
                            </Box>


                            <Box sx={{ ml: 1 }}>
                                <Button variant="contained" size='medium' style={{ backgroundColor: '#1C75BC' }} sx={{ mt: 1 }}>Save</Button>
                            </Box>
                            </Grid>
                            }

                    </Grid>      
        </Box>
    )
}

export default NameChange;