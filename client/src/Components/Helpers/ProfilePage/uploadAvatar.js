import * as React from 'react';
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, Paper, IconButton, Avatar
} from '@mui/material'
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function CircularIntegration() {
    // const [loading, setLoading] = React.useState(false);
    // const [success, setSuccess] = React.useState(false);
    // const timer = React.useRef();

    // const Input = styled('input')({
    //     display: 'none',
    // });

    // const buttonSx = {
    //     ...(success && {
    //         bgcolor: green[500],
    //         '&:hover': {
    //             bgcolor: green[700],
    //         },
    //     }),
    // };

    // React.useEffect(() => {
    //     return () => {
    //         clearTimeout(timer.current);
    //     };
    // }, []);

    // const handleButtonClick = () => {
    //     if (!loading) {
    //         setSuccess(false);
    //         setLoading(true);
    //         timer.current = window.setTimeout(() => {
    //             setSuccess(true);
    //             setLoading(false);
    //         }, 2000);
    //     }
    // };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ position: 'relative', mt: 2 }}>

                <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} />
                    {/* {success ?
                        <Box sx={{ mr: 1}}>
                            <Button variant="contained" sx={buttonSx} disabled={loading} aria-label="upload picture" component="span" size='small' endIcon={<PhotoCameraIcon />}>
                                <CheckIcon />
                            </Button>
                        </Box>
                        :
                        <Button variant="contained" sx={buttonSx} disabled={loading} aria-label="upload picture" component="span" size='small' endIcon={<PhotoCameraIcon />}>
                            Upload
                        </Button>
                    } */}

                    <IconButton aria-label="upload picture" component="span" style={{ color: '#FFFFFF'}}>
                        <Avatar sx={{ bgcolor: '#FFFFFF', width: 130, height: 130 }}
                        // src='https://www.w3schools.com/howto/img_avatar.png'
                         alt={<AccountCircleIcon />} />
                    </IconButton>

                </label>
                {/* {loading && (
                    <CircularProgress
                        size={24}
                        sx={{
                            color: green[500],
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                )} */}
            </Box>
        </Box>
    );
}