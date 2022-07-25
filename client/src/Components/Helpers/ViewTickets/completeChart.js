import * as React from 'react';
import PropTypes from 'prop-types';
import { Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TablePagination,
    TableRow, Box, IconButton, Collapse, Grid,
    Card, Divider, CardContent, Typography, 
    tableCellClasses, Dialog, DialogTitle, 
    DialogContent, Button, DialogActions,
    Checkbox, Tooltip
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles'
import Delete from './deleteDialog'

const StyledTableCell = styled(TableCell)({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1C75BC'
    }
});

function createData(info, name, severity, steps, expected, actual, visuals) {
  return { info, name, severity, steps, expected, actual, visuals };
}

export default function StickyHeadTable() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const info = <div>
  <Tooltip title='Ticket Info'>
<IconButton size='small' variant="outlined" onClick={handleClickOpen}>
  <InfoIcon />
</IconButton>
</Tooltip>
<BootstrapDialog
 onClose={handleClose}
 aria-labelledby="customized-dialog-title"
 open={open}
>
 <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
   Ticket Information
 </BootstrapDialogTitle>
 <DialogContent dividers>
              <Box component="div" sx={{ display: 'inline' }}>
                  <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
                      Steps To Reproduce :
                  </Typography>
                  <Box sx={{mt: 1}} />
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
                  Expected Result :
              </Typography>
              <Box sx={{mt: 1}} />
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
                  Actual Result :
              </Typography>
              <Box sx={{mt: 1}} />
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
                  Pictures/Videos :
              </Typography>
              <Box sx={{mt: 1}} />
              <Grid container direction="row" justifyContent="space-around" alignItems="center">
              <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
                  <CardContent>
                      <Typography>
                          Shows images here...
                      </Typography>
                  </CardContent>
              </Card>
              </Grid>

              <Box sx={{ mt: 2}} />

              <Grid container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center">
              <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
                Complete Ticket :
              </Typography>

              <Checkbox {...{inputProps: { 'aria-label': 'Checkbox demo' }}} />

              </Grid>

              <Box sx={{ mt: 2}} />

 </DialogContent>
 <DialogActions>
 <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Delete />
    
                </Grid>
 <Button autoFocus onClick={handleClose}>
     Edit
   </Button>
   <Button autoFocus onClick={handleClose}>
     Save
   </Button>
 </DialogActions>
</BootstrapDialog>
</div>

  const rows = [
    createData( info, 'Create View Ticket Page', 'Critical'),
    createData( info, 'Create Login Page', 'Medium'),
    createData( info, 'Debug Created Pages', 'Low'),
    createData( info, 'Create View Ticket Page', 'Critical'),
    createData( info, 'Create Login Page', 'Medium'),
    createData( info, 'Debug Created Pages', 'Low'),
    createData( info, 'Create View Ticket Page', 'Critical'),
    createData( info, 'Create Login Page', 'Medium'),
    createData( info, 'Debug Created Pages', 'Low'),
    createData( info, 'Link Pages', 'High'),
    createData( info, 'Work on Settings', 'Medium'),
    createData( info, 'Create Profile Page', 'Low'),
    createData( info, 'Create View Ticket Page', 'Critical'),
    createData( info, 'Create Login Page', 'Medium'),
    createData( info, 'Debug Created Pages', 'Low'),
];

  const columns = [
    { id: 'info', label: ''
    , minWidth: 100},
  { id: 'name', label: 'Ticket Name', 
  minWidth: 170
},
//   { id: 'user', label: 'User', 
//   minWidth: 100, align: 'right'
// },
  {
    id: 'severity',
    label: 'Severity',
    minWidth: 170,
    align: 'right'
  },
//   {
//     id: 'time',
//     label: 'Time Since Posting',
//     minWidth: 170,
//     align: 'right'
//   },
]

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
         {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}