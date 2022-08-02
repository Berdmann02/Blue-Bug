import * as React from 'react'
import { makeStyles } from '@mui/styles'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, Link, CircularProgress
} from '@mui/material'
import { useGlobalContext } from '../../Context/GlobalContext';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function Login({ value }) {

    const { fetchingUser } = useGlobalContext();

    const classes = useStyles();

    return fetchingUser ? (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {/* <h1>Loading...</h1> */}
            <CircularProgress color="primary" sx={{ mt: 30 }} thickness='5' />
        </Grid>
    ) : (
        // <Box sx={{ ml: 28 }} className={classes.root}>
        <Box>


            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Box sx={{ ml: 30 }}
                // display='flex' flexGrow={1}
                >
                    {value === 'dark' ?
                        <img src='BlueBugLogoLogin.svg' alt="BlueBugLogo"
                            style={{
                                height: 450, width: 450,
                                position: 'relative'
                            }} />
                        : <img src='BlueBugLogoLightMode.svg' alt="BlueBugLogo"
                            style={{
                                height: 450, width: 450,
                                position: 'relative'
                            }} />
                    }

                    {/* <Box>
                        <TextField id="outlined-password-input" label="Email" size='small' margin="normal" color='primary' multiline style={{ width: 350 }} />
                    </Box> */}

                    {/* <Box>
                        <TextField id="outlined-password-input" label="Password" size='small' margin="normal" color='primary' multiline style={{ width: 350 }} />
                    </Box> */}
                </Box>


                <Grid style={{ position: 'absolute' }} container justifyContent="flex-start" direction="column" alignItems="center">

                    <Box sx={{ mt: 35, ml: 40 }}>
                        <Box>
                            <TextField id="outlined-password-input" label="Email" size='small' margin="normal" color='primary' multiline style={{ width: 350 }} />
                        </Box>


                        <Box>
                            <TextField id="outlined-password-input" label="Password" type="password" size='small' margin="normal" color='primary' style={{ width: 350 }} />
                        </Box>
                    </Box>


                    <Grid
                        container
                        direction="row"
                    >
                        <Box sx={{ ml: 87.5, mt: 1 }}>
                            <Button variant="outlined" size='large' color='primary' href='/register'>Create Account</Button>
                        </Box>

                        <Box sx={{ ml: 1.5, mt: 1 }}>
                            <Button variant="contained" size='large' style={{ backgroundColor: '#1C75BC' }}>Login</Button>
                        </Box>


                    </Grid>

                    <Box>
                        <Typography sx={{ ml: 68.5, mt: 1, fontSize: 14.25 }}>
                            <Link href="/forgot" underline="hover">
                                {'Forgot password?'}
                            </Link>
                        </Typography>
                    </Box>

                </Grid>


            </Grid>
        </Box>
    )
};

export default Login