import * as React from 'react';
import {
    Box, TextField, Typography, Grid, Divider, Input, Button,
    FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardContent, CardActions, Paper, IconButton, Avatar
} from '@mui/material'
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function CircularIntegration() {

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ position: 'relative', mt: 2 }}>



                    <IconButton aria-label="upload picture" component="span" 
                    // style={{ color: '#FFFFFF'}}
                    >
                        <Avatar sx={{ 
                            // bgcolor: '#FFFFFF',
                             width: 130, height: 130 }}
                        // src='https://www.w3schools.com/howto/img_avatar.png'
                         alt={<AccountCircleIcon />} />
                    </IconButton>

            </Box>
        </Box>
    );
}