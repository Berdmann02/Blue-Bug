import * as React from 'react';
import { Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TablePagination,
    TableRow, Box, IconButton, Collapse, Grid,
    Card, Divider, CardContent, Typography, 
    tableCellClasses
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    // const [opened, setOpened] = React.useState(false);

    // const opened = open

    // function Open(){
    // const [open, setOpen] = React.useState(false);
    // const [opened, setOpened] = React.useState(false);
    // }

    // if (open){
    //     const opened = true
    //   }
  
    //   if (!open){
    //     const opened = false
    //   }

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        // onClick={Open}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        {/* {{Open} ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6"component="div">
                                Ticket Information
                            </Typography>

                            <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '20%' }} />

                            <Box sx={{ mt: 3}} />

                                    <Box component="div" sx={{ display: 'inline' }}>
                                        <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
                                            Steps To Reproduce:
                                        </Typography>
                                        <Grid container direction="row" justifyContent="space-around" alignItems="center">
                                        <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
                                            <CardContent>
                                                <Typography variant="body1" >
                                                    Go to login page and try to sign in
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                        </Grid>
                                        </Box>


                                    <Box sx={{ mt: 3}} />

                                    

                                    <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
                                        Expected Result:
                                    </Typography>
                                    <Grid container direction="row" justifyContent="space-around" alignItems="center">
                                    <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
                                        <CardContent>
                                            <Typography>
                                                Should sign in
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>

                                    <Box sx={{ mt: 3}} />



                                    <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
                                        Actual Result:
                                    </Typography>
                                    <Grid container direction="row" justifyContent="space-around" alignItems="center">
                                    <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
                                        <CardContent>
                                            <Typography>
                                                Reloads the page
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>

                                    <Box sx={{ mt: 3}} />




                                    <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
                                        Pictures/Videos:
                                    </Typography>
                                    <Grid container direction="row" justifyContent="space-around" alignItems="center">
                                    <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
                                        <CardContent>
                                            <Typography>
                                                Shows images here...
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Grid>

                                    <Box sx={{ mt: 5}} />

                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}