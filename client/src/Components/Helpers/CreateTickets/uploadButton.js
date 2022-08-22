import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';


export default function CircularIntegration({ files, setFiles }) {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const Input = styled('input')({
        display: 'none',
    });

    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = (e) => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
        if (e) {
            setFiles(e.target.value);
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{position: 'relative', mt: 2 }}>
            {/* <Box sx={{ mt: 2 }}> */}

                <label htmlFor="icon-button-file">
                    <Input value={files} accept="image/*" id="icon-button-file" type="file" multiple onChange={handleButtonClick} />
                    {success ?
                        <Box sx={{ mr: 1}}>
                            <Button variant="contained" sx={buttonSx} disabled={loading} aria-label="upload picture" component="span" size='small' endIcon={<PhotoCameraIcon />}>
                                <CheckIcon />
                            </Button>
                        </Box>
                        :
                        <Button variant="contained" sx={buttonSx} disabled={loading} aria-label="upload picture" component="span" size='small' endIcon={<PhotoCameraIcon />}>
                            Upload
                        </Button>
                    }

                </label>
                {loading && (
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
                )}
            </Box>
        </Box>
    );
}
