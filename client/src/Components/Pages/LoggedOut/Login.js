import * as React from 'react'
import { makeStyles } from '@mui/styles'
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, Link, CircularProgress
} from '@mui/material'
import axios from 'axios'
import { useGlobalContext } from '../../Context/GlobalContext';
import { useNavigate, Navigate } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }
}));

function Login({ value, register }) {

    const { getCurrentUser, user } = useGlobalContext();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const Guest = (e) => {
        setEmail('guest@gmail.com');
        setPassword('123456');
    }

    React.useEffect(() => {
        if(user && navigate) {
            navigate('/')
        }
        if (sessionStorage.getItem('hasLoadedBefore') !== 'false') {
            sessionStorage.setItem('hasLoadedBefore', 'false');
          }
    }, [user, navigate])

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        let data = {};

        if (!register) {
            data = {
                email,
                password,
            };
        };

        axios.post("/api/auth/login", data).then(() => {
            getCurrentUser();
        }).catch(err => {
            setLoading(false);

            if (err?.response?.data) {
                setErrors(err.response.data);
            }
        })
    };

    const { fetchingUser } = useGlobalContext();

    const classes = useStyles();

    if(user){
        return <Navigate to ='/' />
    }

    // if(user && fetchingUser === false){
    //     return <Navigate to="/" />
    //   }
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
                </Box>


                <Grid style={{ position: 'absolute' }} container
                    justifyContent="flex-start" direction="column" alignItems="center">

                    <form onSubmit={onSubmit}>
                        <Box>
                            <Box sx={{ mt: 33, ml: 35 }}>
                                <Box>
                                    <TextField value={email} onChange={e => setEmail(e.target.value)}
                                        id="outlined-emaillogin-input" label="Email" size='small'
                                        margin="normal" color='primary' multiline style={{ width: 350 }} />
                                </Box>

                                {errors.email && (
                            <Typography sx={{ fontSize: 12, fontWeight: 500 }} color='#f44336' align='center'>{errors.email}</Typography>
                        )}


                                <Box>
                                    <TextField value={password} onChange={e => setPassword(e.target.value)}
                                        id="outlined-passwordlogin-input" label="Password" type="password" size='small'
                                        margin="normal" color='primary' style={{ width: 350 }} />
                                </Box>
                            </Box>

                            {errors.password && (
                            <Typography sx={{ fontSize: 12, fontWeight: 500 }} color='#f44336' align='center'>{errors.password}</Typography>
                        )}

                            {Object.keys(errors).length > 0 && (
                                <Typography sx={{ fontSize: 15, fontWeight: 500, ml: 35, mt: 1, mb: 1 }} color='#f44336'
                                >
                                    {errors.error}
                                </Typography>
                            )}


                            <Grid
                                container
                                direction="row"
                            >
                                <Box sx={{ ml: 43.9, mt: 1 }}>
                                    <Button variant="outlined" size='large' color='primary'
                                        href='/register'>
                                        Create Account
                                    </Button>
                                </Box>

                                <Box sx={{ ml: 1.5, mt: 1 }}>
                                    <Button type='submit' disabled={loading} variant="contained" 
                                    size='large' style={{ backgroundColor: '#1C75BC' }}
                                    >Login
                                    </Button>
                                </Box>

                </Grid>
                </Box>
                    </form>


                <Box>
                    <Typography sx={{ ml: 63.5, mt: 1, fontSize: 14.25 }}>
                        <Link underline="none" id='transfer' onClick={Guest}>
                            {'Sign In As Guest?'}
                        </Link>
                    </Typography>
                </Box>


                {/* <Box>
                    <Typography sx={{ ml: 63.5, mt: 1, fontSize: 14.25 }}>
                        <Link href="/forgot" underline="none" id='transfer'>
                            {'Forgot password?'}
                        </Link>
                    </Typography>
                </Box> */}

                {/* <Grid container row sx={{ mt: 1 }}>
                        <Box>
                            <Typography sx={{
                                fontSize: 12, fontWeight: 500, ml: 93.2
                                // ml: 10.5 
                            }}
                                align='center'>
                                Don't have an account?
                            </Typography>
                        </Box>

                        <Box>
                            <Link sx={{
                                fontSize: 12, fontWeight: 500, ml: 1
                                //  ml: .5 
                            }}
                                href="/register" underline='none' align='center'
                                style={{ position: 'absolute' }} id='transfer'>
                                {'Register now!'}
                            </Link>
                        </Box>

                    </Grid> */}

            </Grid>



        </Grid>
        </Box >
    )
};

export default Login