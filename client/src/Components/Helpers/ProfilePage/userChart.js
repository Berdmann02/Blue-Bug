import * as React from 'react';
// import PropTypes from 'prop-types';
import { Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TablePagination,
    TableRow, Box, IconButton, Collapse, Grid,
    Card, Divider, CardContent, Typography, 
    tableCellClasses, Dialog, DialogTitle, 
    DialogContent, Button, DialogActions,
    Checkbox, Tooltip, Modal
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles'
import { Link } from "react-router-dom"
import { useGlobalContext } from '../../../Context/GlobalContext'
import moment from 'moment';
import Info from './userInfo'

const StyledTableCell = styled(TableCell)({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1C75BC'
    }
});

export default function UserChart() {

  const { users, user, fetchingUsers } = useGlobalContext();

  const USERS = users.users || []
  
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // console.log( USERS.filter(person => person._id === id).map((people) => people.role))

  const UserRole = USERS.filter(people => people._id === id).map((person) => person.role).toString('')

  const [role, setRole] = React.useState(UserRole);

    const handleClose = () => setOpen(false);

    const handleClickOpen = (_id) => {
    // setOpen(true);
    setId(id);
    setOpen(true);


    };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

// const { incompleteTickets } = useGlobalContext();


// const USERS = users.users || [];

if(!fetchingUsers) {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table" >
        <TableHead>
          <TableRow>
          <StyledTableCell width={100} />
          <StyledTableCell width={170} align="center" style={{ fontWeight: '500', fontStyle: 'italic' }}>Account Name</StyledTableCell>
            <StyledTableCell width={200} align="center" style={{ fontWeight: '500', fontStyle: 'italic' }}>Role</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <Info open={open} setOpen={setOpen} UserId={id} UserRole={UserRole} role={role} setRole={setRole}/>
        {USERS.filter(people => people._id != user._id)
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((person) => (
            <TableRow
              hover
              key={person._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
              <Tooltip title='Ticket Info'>
                <IconButton size='small' variant="outlined" onClick={() => {
                  setId(person._id);
                  setOpen(true);
                }}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
                
              </TableCell>
              <TableCell component="th" scope="row" align='center'>
                {person.firstName + ' ' + person.lastName}
              </TableCell>
              <TableCell component="th" scope="row" align='center'>
                {person.role}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={USERS.filter(people => people._id != user._id).length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
   );
  }
}
    
































// import * as React from 'react';
// // import PropTypes from 'prop-types';
// import {
//     Paper, Table, TableBody, TableCell,
//     TableContainer, TableHead, TablePagination,
//     TableRow, Box, IconButton, Collapse, Grid,
//     Card, Divider, CardContent, Typography,
//     tableCellClasses, Dialog, DialogTitle,
//     DialogContent, Button, DialogActions,
//     Checkbox, Tooltip, DialogContentText, 
//     InputLabel, NativeSelect
// } from '@mui/material'
// import InfoIcon from '@mui/icons-material/Info';
// import CloseIcon from '@mui/icons-material/Close';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { styled } from '@mui/material/styles'
// import Delete from './deleteUsers'
// import { useGlobalContext } from '../../../Context/GlobalContext';

// const StyledTableCell = styled(TableCell)({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: '#1C75BC'
//     }
// });

// function createData(info, user, role) {
//     return { info, user, role };
// }

// export default function UserChart() {

//     const { user } = useGlobalContext();


//     const [open, setOpen] = React.useState(false);
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(10);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };

//     const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//         '& .MuiDialogContent-root': {
//             padding: theme.spacing(2),
//         },
//         '& .MuiDialogActions-root': {
//             padding: theme.spacing(1),
//         },
//     }));

//     const BootstrapDialogTitle = (props) => {
//         const { children, onClose, ...other } = props;

//         // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//         return (
//             <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//                 {children}
//                 {onClose ? (
//                     <IconButton
//                         aria-label="close"
//                         onClick={onClose}
//                         sx={{
//                             position: 'absolute',
//                             right: 8,
//                             top: 8,
//                             color: (theme) => theme.palette.grey[500],
//                         }}
//                     >
//                         <CloseIcon />
//                     </IconButton>
//                 ) : null}
//             </DialogTitle>
//         );
//     };

//     // BootstrapDialogTitle.propTypes = {
//     //     children: PropTypes.node,
//     //     onClose: PropTypes.func.isRequired,
//     // };

//     const info = <div>
//         <Tooltip title='Account Info'>
//             <IconButton size='small' variant="outlined" onClick={handleClickOpen}>
//                 <InfoIcon />
//             </IconButton>
//         </Tooltip>
//         <BootstrapDialog
//             onClose={handleClose}
//             aria-labelledby="customized-dialog-title"
//             open={open}
//         >
//             <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
//                 Account Information
//             </BootstrapDialogTitle>
//             <DialogContent dividers sx={{ minWidth: 500 }}>
//                 <Box component="div" sx={{ display: 'inline' }}>
//                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
//                         Fede Poi
//                     </Typography>
//                     <Box sx={{ mt: 1 }} />
//                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                         <InputLabel variant="standard" htmlFor="uncontrolled-native">
//                             Role
//                         </InputLabel>
//                         <NativeSelect
//                             defaultValue={1}
//                             inputProps={{
//                                 name: 'role',
//                                 id: 'uncontrolled-native',
//                             }}
//                         >
//                             <option value={1}>Project Manager</option>
//                             <option value={2}>Team Manager</option>
//                             <option value={3}>Editor</option>
//                             {/* <option value={4}>Author</option> */}
//                         </NativeSelect>
//                         {/* <Typography>
//                         Project Manager
//                     </Typography> */}
//                     </Grid>
//                 </Box>

//                 <Box sx={{ mt: 2 }} />



//                 <Box sx={{ mt: 2 }} />

//             </DialogContent>
//             <DialogActions>
//                 <Grid
//                     container
//                     direction="row"
//                     justifyContent="flex-start"
//                     alignItems="center"
//                 >
//                     <Delete />

//                 </Grid>
//                 <Button autoFocus onClick={handleClose}>
//                     Save
//                 </Button>
//             </DialogActions>
//         </BootstrapDialog>
//     </div>

//     const rows = [
//         createData(info, 'Fede Poi', 'Project Manager'),
//         createData(info, 'Zacky Viriot', 'Project Manager'),
//         createData(info, 'Steve Johnson', 'Team Manager'),
//         createData(info, 'John Isner', 'Team Manager'),
//         createData(info, 'Roger Federer', 'Editor'),
//         createData(info, 'Novak Djokovic', 'Editor'),
//         createData(info, 'Nick Kyrgios', 'Editor'),
//         createData(info, 'Andy Murray', 'Author'),
//         createData(info, 'Juan Martin Del Potro', 'Author'),
//     ];

//     const columns = [
//         {
//             id: 'info', label: ''
//             // , minWidth: 100
//         },
//         {
//             id: 'user', label: 'Account Name', align: 'center',
//             minWidth: 170
//         },
//         //   { id: 'user', label: 'User', 
//         //   minWidth: 100, align: 'right'
//         // },
//         {
//             id: 'role',
//             label: 'Role',
//             minWidth: 170,
//             align: 'center'
//             // align: 'right'
//         },
//     ]

//     return (
//         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//             <TableContainer sx={{ maxHeight: 440 }}>
//                 <Table stickyHeader aria-label="sticky table" >
//                     <TableHead>
//                         <TableRow>
//                             {columns.map((column) => (
//                                 <StyledTableCell
//                                     key={column.id}
//                                     align={column.align}
//                                     style={{ minWidth: column.minWidth }}
//                                 >
//                                     {column.label}
//                                 </StyledTableCell>
//                             ))}
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows
//                             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                             .map((row) => {
//                                 return (
//                                     <TableRow hover role="checkbox" tabIndex={-1}>
//                                         {columns.map((column) => {
//                                             const value = row[column.id];
//                                             return (
//                                                 <TableCell key={column.id} align={column.align}>
//                                                     {column.format && typeof value === 'number'
//                                                         ? column.format(value)
//                                                         : value}
//                                                 </TableCell>
//                                             );
//                                         })}
//                                     </TableRow>
//                                 );
//                             })}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <TablePagination
//                 rowsPerPageOptions={[5, 10, 25]}
//                 component="div"
//                 count={rows.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//         </Paper>
//     );
// }