import React, { useEffect } from 'react';
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
import Delete from '../deleteDialog'
import { Link } from "react-router-dom"
import { useGlobalContext, getUsersFunc } from '../../../Context/GlobalContext'
import moment from 'moment';
import Info from './info'

const StyledTableCell = styled(TableCell)({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1C75BC'
    }
});

// function createData(info, name, user, severity, time, steps, expected, actual, visuals) {
//   return { info, name, user, severity, time, steps, expected, actual, visuals };
// }

export default function ViewChart() {

//   useEffect(() => {
//     console.log(getUsersFunc());
// }, []);
  
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

const { incompleteTickets, users } = useGlobalContext();

const USERS = users.users || []

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table" >
        <TableHead>
          <TableRow>
          <StyledTableCell width={100} />
          <StyledTableCell width={170} align="center" style={{ fontWeight: '500', fontStyle: 'italic' }}>Ticket Name</StyledTableCell>
            <StyledTableCell width={200} align="right" style={{ fontWeight: '500', fontStyle: 'italic' }}>User(s)</StyledTableCell>
            <StyledTableCell width={170} align="right" style={{ fontWeight: '500', fontStyle: 'italic' }}>Severity</StyledTableCell>
            <StyledTableCell width={170} align="right" style={{ fontWeight: '500', fontStyle: 'italic' }}>Time Since Posting</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <Info open={open} setOpen={setOpen} ticketId={id}/>
        {incompleteTickets.sort().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((tickets) => (
            <TableRow
              hover
              key={tickets._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
              <Tooltip title='Ticket Info'>
                <IconButton size='small' variant="outlined" onClick={() => {
                  setId(tickets._id);
                  setOpen(true);
                }}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
                
              </TableCell>
              <TableCell component="th" scope="row" align='center'>
                {tickets.name}
              </TableCell>
              <TableCell align='right'>
                <Box>
                {/* {USERS.filter(people => people._id === tickets.assign).map((person) => person.firstName + ' ' + person.lastName.substring(0, 1) + '.'
                )} */}
                {/* {tickets.assign.join(', ')} */}
                {tickets.assign.map((item) => {
                    return USERS.filter(({_id}) => _id === item).map((person) => (
                      (person.firstName + ' ' + person.lastName.substring(0, 1) + '.')
                    ))
                }).join(', ')}
                 {/* (ticket) => {
                  // <Box>
                    {ticket.join('!')}
                  // </Box>
                    
                })} */}
                </Box> 
                {/* {tickets.assign.map((item) => {
                return <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                  <Typography>
                    {item}, 
                  </Typography>
                  </Grid>
              })} */}
              </TableCell>
              <TableCell align="right">{tickets.severity}</TableCell>
              <TableCell align="right">{moment.utc(tickets.createdAt).local().startOf('seconds').fromNow()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={incompleteTickets.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
   );
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    //   <TableContainer sx={{ maxHeight: 440 }}>
    //     <Table stickyHeader aria-label="sticky table" >
    //       <TableHead>
    //         <TableRow>
    //           {columns.map((column) => (
    //             <StyledTableCell
    //               key={column.id}
    //               align={column.align}
    //               style={{ minWidth: column.minWidth }}
    //             >
    //               {column.label}
    //             </StyledTableCell>
    //           ))}
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //      {rows
    //       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //       .map((row) => {
    //         return (
    //           <TableRow hover role="checkbox" tabIndex={-1}>
    //             {columns.map((column) => {
    //               const value = row[column.id];
    //               return (
    //                 <TableCell key={column.id} align={column.align}>
    //                   {column.format && typeof value === 'number'
    //                     ? column.format(value)
    //                     : value}
    //                 </TableCell>
    //               );
    //             })}
    //           </TableRow>
    //         );
    //       })}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    //   <TablePagination
    //     rowsPerPageOptions={[5, 10, 25]}
    //     component="div"
    //     count={rows.length}
    //     rowsPerPage={rowsPerPage}
    //     page={page}
    //     onPageChange={handleChangePage}
    //     onRowsPerPageChange={handleChangeRowsPerPage}
    //   />
    // </Paper>
 






























// import * as React from 'react';
// import { Paper, Table, TableBody, TableCell, 
//     TableContainer, TableHead, TablePagination,
//     TableRow, Box, IconButton, Collapse, Grid,
//     Card, Divider, CardContent, Typography, 
//     tableCellClasses
// } from '@mui/material'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { styled } from '@mui/material/styles'
// import CollapseTable from './collapse';

// const StyledTableCell = styled(TableCell)({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: '#1C75BC'
//     }
// });

// // const columns = [
// //     { id: 'collapse', label: 
// //     <IconButton
// //                         aria-label="expand row"
// //                         size="small"
// //                         onClick={() => setOpen(!open)}
// //                         // onClick={Open}
// //                     >
// //                         {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
// //                         {/* {{Open} ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
// //                     </IconButton>
// //     , minWidth: 100},
// //   { id: 'name', label: 'Title', 
// //   minWidth: 170
// // },
// //   { id: 'user', label: 'User', 
// //   minWidth: 100, align: 'right'
// // },
// //   {
// //     id: 'severity',
// //     label: 'Severity',
// //     minWidth: 170,
// //     align: 'right'
// //   },
// //   {
// //     id: 'time',
// //     label: 'Time',
// //     minWidth: 170,
// //     align: 'right'
// //   },
// // ];

// function createData(collapse, name, user, severity, time, steps, expected, actual, visuals) {
//   return { collapse, name, user, severity, time, steps, expected, actual, visuals };
// }

// // function Open() {
// //   const [open, setOpen] = React.useState(false);
// //   return (
// //     <div></div>
// //   )
// // }

// // function Row(props) {
// //     const { row } = props;
// //     const [open, setOpen] = React.useState(false);

// //     return (
// //         <React.Fragment>
// //             <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
// //                 <TableCell>
// //                     <IconButton
// //                         aria-label="expand row"
// //                         size="small"
// //                         onClick={() => setOpen(!open)}
// //                     >
// //                         {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
// //                     </IconButton>
// //                 </TableCell>
// //                 {/* <TableCell component="th" scope="row">
// //                     {row.name}
// //                 </TableCell>
// //                 <TableCell align="right">{row.user}</TableCell>
// //                 <TableCell align="right">{row.severity}</TableCell>
// //                 <TableCell align="right">{row.time}</TableCell> */}
// //             </TableRow>
// //             <TableRow>
// //                 <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
// //                     <Collapse in={open} timeout="auto" unmountOnExit>
// //                         <Box sx={{ margin: 1 }}>
// //                             <Typography variant="h6"component="div">
// //                                 Ticket Information
// //                             </Typography>

// //                             <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '20%' }} />

// //                             <Box sx={{ mt: 3}} />

// //                                     <Box component="div" sx={{ display: 'inline' }}>
// //                                         <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
// //                                             Steps To Reproduce:
// //                                         </Typography>
// //                                         <Grid container direction="row" justifyContent="space-around" alignItems="center">
// //                                         <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
// //                                             <CardContent>
// //                                                 <Typography variant="body1" >
// //                                                     Go to login page and try to sign in
// //                                                     </Typography>
// //                                             </CardContent>
// //                                         </Card>
// //                                         </Grid>
// //                                         </Box>


// //                                     <Box sx={{ mt: 3}} />

                                    

// //                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
// //                                         Expected Result:
// //                                     </Typography>
// //                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
// //                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
// //                                         <CardContent>
// //                                             <Typography>
// //                                                 Should sign in
// //                                             </Typography>
// //                                         </CardContent>
// //                                     </Card>
// //                                     </Grid>

// //                                     <Box sx={{ mt: 3}} />



// //                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
// //                                         Actual Result:
// //                                     </Typography>
// //                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
// //                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
// //                                         <CardContent>
// //                                             <Typography>
// //                                                 Reloads the page
// //                                             </Typography>
// //                                         </CardContent>
// //                                     </Card>
// //                                     </Grid>

// //                                     <Box sx={{ mt: 3}} />




// //                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
// //                                         Pictures/Videos:
// //                                     </Typography>
// //                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
// //                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
// //                                         <CardContent>
// //                                             <Typography>
// //                                                 Shows images here...
// //                                             </Typography>
// //                                         </CardContent>
// //                                     </Card>
// //                                     </Grid>

// //                                     <Box sx={{ mt: 5}} />

// //                         </Box>
// //                     </Collapse>
// //                 </TableCell>
// //             </TableRow>
// //         </React.Fragment>
// //     );
// // }

// // if (props.open){
//   // if (Open(open)){
// // const rows = [
// //     createData(<CollapseTable/>),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Link Pages', 'Ben', 'High', '42m'),
// //     createData('Work on Settings', 'Fede', 'Medium', '23hr'),
// //     createData('Create Profile Page', 'Zacky', 'Low', '1m'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// // ];
// // }

// // if (props.open=false){
//   // if(Open(!open)){
// //   const rows = [
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Link Pages', 'Ben', 'High', '42m'),
// //     createData('Work on Settings', 'Fede', 'Medium', '23hr'),
// //     createData('Create Profile Page', 'Zacky', 'Low', '1m'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// // ];
// // }

// export default function StickyHeadTable() {
//   const [open, setOpen] = React.useState(false);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const collapse = <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>  <KeyboardArrowDownIcon /> </IconButton>

//   const info = <React.Fragment>
//   <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//       <TableCell>
//           <IconButton
//               aria-label="expand row"
//               size="small"
//               onClick={() => setOpen(!open)}
//           >
//               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//       </TableCell>
//   </TableRow>
//   <TableRow>
//       <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//               <Box sx={{ margin: 1 }}>
//                   <Typography variant="h6"component="div">
//                       Ticket Information
//                   </Typography>

//                   <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '48%' }} />

//                   <Box sx={{ mt: 3}} />

//                           <Box component="div" sx={{ display: 'inline' }}>
//                               <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
//                                   Steps To Reproduce:
//                               </Typography>
//                               <Box sx={{mt: 1}} />
//                               <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                               <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                                   <CardContent>
//                                       <Typography variant="body1" >
//                                           Go to login page and try to sign in
//                                           </Typography>
//                                   </CardContent>
//                               </Card>
//                               </Grid>
//                               </Box>


//                           <Box sx={{ mt: 3}} />

                          

//                           <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                               Expected Result:
//                           </Typography>
//                           <Box sx={{mt: 1}} />
//                           <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                           <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                               <CardContent>
//                                   <Typography>
//                                       Should sign in
//                                   </Typography>
//                               </CardContent>
//                           </Card>
//                           </Grid>

//                           <Box sx={{ mt: 3}} />



//                           <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                               Actual Result:
//                           </Typography>
//                           <Box sx={{mt: 1}} />
//                           <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                           <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                               <CardContent>
//                                   <Typography>
//                                       Reloads the page
//                                   </Typography>
//                               </CardContent>
//                           </Card>
//                           </Grid>

//                           <Box sx={{ mt: 3}} />




//                           <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                               Pictures/Videos:
//                           </Typography>
//                           <Box sx={{mt: 1}} />
//                           <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                           <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                               <CardContent>
//                                   <Typography>
//                                       Shows images here...
//                                   </Typography>
//                               </CardContent>
//                           </Card>
//                           </Grid>

//                           <Box sx={{ mt: 5}} />

//               </Box>
//           </Collapse>
//       </TableCell>
//   </TableRow>
// </React.Fragment>

// const rows = open ? 
//     [createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
// ] : 
//     [createData( collapse, 'Create View Ticket Page', 'Ben', 'Critical', '42m'),
//       createData( collapse, 'Create Login Page', 'Fede', 'Medium', '1hr'),
//       createData( collapse, 'Debug Created Pages', 'Zacky', 'Low', '2d'),
//       createData( collapse, 'Create View Ticket Page', 'Ben', 'Critical', '42m'),
//       createData( collapse, 'Create Login Page', 'Fede', 'Medium', '1hr'),
//       createData( collapse, 'Debug Created Pages', 'Zacky', 'Low', '2d'),
//       createData( collapse, 'Create View Ticket Page', 'Ben', 'Critical', '42m'),
//       createData( collapse, 'Create Login Page', 'Fede', 'Medium', '1hr'),
//       createData( collapse, 'Debug Created Pages', 'Zacky', 'Low', '2d'),
//       createData( collapse, 'Link Pages', 'Ben', 'High', '42m'),
//       createData( collapse, 'Work on Settings', 'Fede', 'Medium', '23hr'),
//       createData( collapse, 'Create Profile Page', 'Zacky', 'Low', '1m'),
//       createData( collapse, 'Create View Ticket Page', 'Ben', 'Critical', '42m'),
//       createData( collapse, 'Create Login Page', 'Fede', 'Medium', '1hr'),
//       createData( collapse, 'Debug Created Pages', 'Zacky', 'Low', '2d'),
//   ];

//   const columns = [
//     { id: 'collapse', label: ''
//     , minWidth: 100},
//   { id: 'name', label: 'Title', 
//   minWidth: 170
// },
//   { id: 'user', label: 'User', 
//   minWidth: 100, align: 'right'
// },
//   {
//     id: 'severity',
//     label: 'Severity',
//     minWidth: 170,
//     align: 'right'
//   },
//   {
//     id: 'time',
//     label: 'Time',
//     minWidth: 170,
//     align: 'right'
//   },
// ]
  


//   // const map1 = new Map ([[<TableBody>
//   //   {rows.map((row) => (
//   //                  <Row key={row.name} row={row} />
//   //              ))}
//   //     </TableBody>]])

//     // const map2 = new Map ([[<TableBody>
//     //     {rows
//     //       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     //       .map((row) => {
//     //         return (
//     //           <TableRow hover role="checkbox" tabIndex={-1}>
//     //             {columns.map((column) => {
//     //               const value = row[column.id];
//     //               return (
//     //                 <TableCell key={column.id} align={column.align}>
//     //                   {column.format && typeof value === 'number'
//     //                     ? column.format(value)
//     //                     : value}
//     //                 </TableCell>
//     //               );
//     //             })}
//     //           </TableRow>
//     //         );
//     //       })}
//     //   </TableBody>]])

// // const map3 = new Map([...map1, ...map2]);

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table" >
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <StyledTableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </StyledTableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//          {rows
//           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//           .map((row) => {
//             return (
//               <TableRow hover role="checkbox" tabIndex={-1}>
//                 {columns.map((column) => {
//                   const value = row[column.id];
//                   return (
//                     <TableCell key={column.id} align={column.align}>
//                       {column.format && typeof value === 'number'
//                         ? column.format(value)
//                         : value}
//                     </TableCell>
//                   );
//                 })}
//               </TableRow>
//             );
//           })}
//           {/* {rows
//           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//           .map((row) => {
//             return (
//               <Row key={row.name} row={row} hover role="checkbox" tabIndex={-1}/>
//                 // {columns.map((column) => {
//                 //   const value = row[column.id];
//                   // return (
//                   //   <TableCell key={column.id} align={column.align}>
//                   //     {column.format && typeof value === 'number'
//                   //       ? column.format(value)
//                   //       : value}
//                   //   </TableCell>
//                   // );
//                 // })}
//               // </Row>
//             );
//           })} */}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }


























// import React from "react";
// // import PropTypes from "prop-types";
// // import { makeStyles } from "@material-ui/core/styles";
// import { Paper, Table, TableBody, TableCell, 
//     TableContainer, TableHead, TablePagination,
//     TableRow, Box, IconButton, Collapse, Grid,
//     Card, Divider, CardContent, Typography, 
//     tableCellClasses
// } from '@mui/material'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { styled } from '@mui/material/styles'

// const StyledTableCell = styled(TableCell)({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: '#1C75BC'
//     }
// });

// function createData( title, user, severity, time) {
//   return { title, user, severity, time};
// }

// // function createData(name, age, history) {
// //   return { name, age, history };
// // }

// // const rows = [createData("james", 15, [{ date: "2020-01-01" }])];

//   const rows = [
//     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
//     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
//     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
//     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
//     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
//     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
//     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
//     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
//     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
//     createData('Link Pages', 'Ben', 'High', '42m'),
//     createData('Work on Settings', 'Fede', 'Medium', '23hr'),
//     createData('Create Profile Page', 'Zacky', 'Low', '1m'),
//     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
//     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
//     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// ];


// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   return (
//     <React.Fragment>
//       <TableRow>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.title}
//         </TableCell>
//         <TableCell>{row.user}</TableCell>
//         <TableCell>{row.severity}</TableCell>
//         <TableCell>{row.time}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box margin={1}>

//             <Typography variant="h6"component="div">
//                                 Ticket Information
//                             </Typography>

//                             <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '20%' }} />

//                             <Box sx={{ mt: 3}} />

//                                     <Box component="div" sx={{ display: 'inline' }}>
//                                         <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
//                                             Steps To Reproduce:
//                                         </Typography>
//                                         <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                                         <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                                             <CardContent>
//                                                 <Typography variant="body1" >
//                                                     Go to login page and try to sign in
//                                                     </Typography>
//                                             </CardContent>
//                                         </Card>
//                                         </Grid>
//                                         </Box>


//                                     <Box sx={{ mt: 3}} />

                                    

//                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                                         Expected Result:
//                                     </Typography>
//                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                                         <CardContent>
//                                             <Typography>
//                                                 Should sign in
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                     </Grid>

//                                     <Box sx={{ mt: 3}} />



//                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                                         Actual Result:
//                                     </Typography>
//                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                                         <CardContent>
//                                             <Typography>
//                                                 Reloads the page
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                     </Grid>

//                                     <Box sx={{ mt: 3}} />




//                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                                         Pictures/Videos:
//                                     </Typography>
//                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                                         <CardContent>
//                                             <Typography>
//                                                 Shows images here...
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                     </Grid>

//                                     <Box sx={{ mt: 5}} />


//               {/* <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map(historyRow => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table> */}
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }
// export default function viewChart() {
//   return (
//     <TableContainer component={Paper}>
//       <Table stickyHeader>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell />
//             <StyledTableCell>Title</StyledTableCell>
//             <StyledTableCell>User</StyledTableCell>
//             <StyledTableCell>Severity</StyledTableCell>
//             <StyledTableCell>Time</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <Row key={row.title} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }













// import * as React from 'react';
// import { Paper, Table, TableBody, TableCell, 
//     TableContainer, TableHead, TablePagination,
//     TableRow, Box, IconButton, Collapse, Grid,
//     Card, Divider, CardContent, Typography, 
//     tableCellClasses
// } from '@mui/material'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { styled } from '@mui/material/styles'
// import CollapseTable from './collapse';

// const StyledTableCell = styled(TableCell)({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: '#1C75BC'
//     }
// });

// // const columns = [
// //     { id: 'collapse', label: 
// //     <IconButton
// //                         aria-label="expand row"
// //                         size="small"
// //                         onClick={() => setOpen(!open)}
// //                         // onClick={Open}
// //                     >
// //                         {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
// //                         {/* {{Open} ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
// //                     </IconButton>
// //     , minWidth: 100},
// //   { id: 'name', label: 'Title', 
// //   minWidth: 170
// // },
// //   { id: 'user', label: 'User', 
// //   minWidth: 100, align: 'right'
// // },
// //   {
// //     id: 'severity',
// //     label: 'Severity',
// //     minWidth: 170,
// //     align: 'right'
// //   },
// //   {
// //     id: 'time',
// //     label: 'Time',
// //     minWidth: 170,
// //     align: 'right'
// //   },
// // ];

// function createData(collapse, name, user, severity, time, steps, expected, actual, visuals) {
//   return { collapse, name, user, severity, time, steps, expected, actual, visuals };
// }

// // function Open() {
// //   const [open, setOpen] = React.useState(false);
// //   return (
// //     <div></div>
// //   )
// // }

// // function Row(props) {
// //     const { row } = props;
// //     const [open, setOpen] = React.useState(false);

// //     return (
// //         <React.Fragment>
// //             <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
// //                 <TableCell>
// //                     <IconButton
// //                         aria-label="expand row"
// //                         size="small"
// //                         onClick={() => setOpen(!open)}
// //                     >
// //                         {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
// //                     </IconButton>
// //                 </TableCell>
// //                 {/* <TableCell component="th" scope="row">
// //                     {row.name}
// //                 </TableCell>
// //                 <TableCell align="right">{row.user}</TableCell>
// //                 <TableCell align="right">{row.severity}</TableCell>
// //                 <TableCell align="right">{row.time}</TableCell> */}
// //             </TableRow>
// //             <TableRow>
// //                 <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
// //                     <Collapse in={open} timeout="auto" unmountOnExit>
// //                         <Box sx={{ margin: 1 }}>
// //                             <Typography variant="h6"component="div">
// //                                 Ticket Information
// //                             </Typography>

// //                             <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '20%' }} />

// //                             <Box sx={{ mt: 3}} />

// //                                     <Box component="div" sx={{ display: 'inline' }}>
// //                                         <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
// //                                             Steps To Reproduce:
// //                                         </Typography>
// //                                         <Grid container direction="row" justifyContent="space-around" alignItems="center">
// //                                         <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
// //                                             <CardContent>
// //                                                 <Typography variant="body1" >
// //                                                     Go to login page and try to sign in
// //                                                     </Typography>
// //                                             </CardContent>
// //                                         </Card>
// //                                         </Grid>
// //                                         </Box>


// //                                     <Box sx={{ mt: 3}} />

                                    

// //                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
// //                                         Expected Result:
// //                                     </Typography>
// //                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
// //                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
// //                                         <CardContent>
// //                                             <Typography>
// //                                                 Should sign in
// //                                             </Typography>
// //                                         </CardContent>
// //                                     </Card>
// //                                     </Grid>

// //                                     <Box sx={{ mt: 3}} />



// //                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
// //                                         Actual Result:
// //                                     </Typography>
// //                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
// //                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
// //                                         <CardContent>
// //                                             <Typography>
// //                                                 Reloads the page
// //                                             </Typography>
// //                                         </CardContent>
// //                                     </Card>
// //                                     </Grid>

// //                                     <Box sx={{ mt: 3}} />




// //                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
// //                                         Pictures/Videos:
// //                                     </Typography>
// //                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
// //                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
// //                                         <CardContent>
// //                                             <Typography>
// //                                                 Shows images here...
// //                                             </Typography>
// //                                         </CardContent>
// //                                     </Card>
// //                                     </Grid>

// //                                     <Box sx={{ mt: 5}} />

// //                         </Box>
// //                     </Collapse>
// //                 </TableCell>
// //             </TableRow>
// //         </React.Fragment>
// //     );
// // }

// // if (props.open){
//   // if (Open(open)){
// // const rows = [
// //     createData(<CollapseTable/>),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Link Pages', 'Ben', 'High', '42m'),
// //     createData('Work on Settings', 'Fede', 'Medium', '23hr'),
// //     createData('Create Profile Page', 'Zacky', 'Low', '1m'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// // ];
// // }

// // if (props.open=false){
//   // if(Open(!open)){
// //   const rows = [
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// //     createData('Link Pages', 'Ben', 'High', '42m'),
// //     createData('Work on Settings', 'Fede', 'Medium', '23hr'),
// //     createData('Create Profile Page', 'Zacky', 'Low', '1m'),
// //     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
// //     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
// //     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// // ];
// // }

// export default function StickyHeadTable() {
//   const [open, setOpen] = React.useState(false);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const collapse = <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>  <KeyboardArrowDownIcon /> </IconButton>

//   const info = <React.Fragment>
//   <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//       <TableCell>
//           <IconButton
//               aria-label="expand row"
//               size="small"
//               onClick={() => setOpen(!open)}
//           >
//               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//       </TableCell>
//   </TableRow>
//   <TableRow>
//       <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//               <Box sx={{ margin: 1 }}>
//                   <Typography variant="h6"component="div">
//                       Ticket Information
//                   </Typography>

//                   <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '48%' }} />

//                   <Box sx={{ mt: 3}} />

//                           <Box component="div" sx={{ display: 'inline' }}>
//                               <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
//                                   Steps To Reproduce:
//                               </Typography>
//                               <Box sx={{mt: 1}} />
//                               <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                               <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                                   <CardContent>
//                                       <Typography variant="body1" >
//                                           Go to login page and try to sign in
//                                           </Typography>
//                                   </CardContent>
//                               </Card>
//                               </Grid>
//                               </Box>


//                           <Box sx={{ mt: 3}} />

                          

//                           <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                               Expected Result:
//                           </Typography>
//                           <Box sx={{mt: 1}} />
//                           <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                           <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                               <CardContent>
//                                   <Typography>
//                                       Should sign in
//                                   </Typography>
//                               </CardContent>
//                           </Card>
//                           </Grid>

//                           <Box sx={{ mt: 3}} />



//                           <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                               Actual Result:
//                           </Typography>
//                           <Box sx={{mt: 1}} />
//                           <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                           <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                               <CardContent>
//                                   <Typography>
//                                       Reloads the page
//                                   </Typography>
//                               </CardContent>
//                           </Card>
//                           </Grid>

//                           <Box sx={{ mt: 3}} />




//                           <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                               Pictures/Videos:
//                           </Typography>
//                           <Box sx={{mt: 1}} />
//                           <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                           <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                               <CardContent>
//                                   <Typography>
//                                       Shows images here...
//                                   </Typography>
//                               </CardContent>
//                           </Card>
//                           </Grid>

//                           <Box sx={{ mt: 5}} />

//               </Box>
//           </Collapse>
//       </TableCell>
//   </TableRow>
// </React.Fragment>

// const rows = open ? 
//     [createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
//     createData( info ),
// ] : 
//     [createData( collapse, 'Create View Ticket Page', 'Ben', 'Critical', '42m'),
//       createData( collapse, 'Create Login Page', 'Fede', 'Medium', '1hr'),
//       createData( collapse, 'Debug Created Pages', 'Zacky', 'Low', '2d'),
//       createData( collapse, 'Create View Ticket Page', 'Ben', 'Critical', '42m'),
//       createData( collapse, 'Create Login Page', 'Fede', 'Medium', '1hr'),
//       createData( collapse, 'Debug Created Pages', 'Zacky', 'Low', '2d'),
//       createData( collapse, 'Create View Ticket Page', 'Ben', 'Critical', '42m'),
//       createData( collapse, 'Create Login Page', 'Fede', 'Medium', '1hr'),
//       createData( collapse, 'Debug Created Pages', 'Zacky', 'Low', '2d'),
//       createData( collapse, 'Link Pages', 'Ben', 'High', '42m'),
//       createData( collapse, 'Work on Settings', 'Fede', 'Medium', '23hr'),
//       createData( collapse, 'Create Profile Page', 'Zacky', 'Low', '1m'),
//       createData( collapse, 'Create View Ticket Page', 'Ben', 'Critical', '42m'),
//       createData( collapse, 'Create Login Page', 'Fede', 'Medium', '1hr'),
//       createData( collapse, 'Debug Created Pages', 'Zacky', 'Low', '2d'),
//   ];

//   const columns = [
//     { id: 'collapse', label: ''
//     , minWidth: 100},
//   { id: 'name', label: 'Title', 
//   minWidth: 170
// },
//   { id: 'user', label: 'User', 
//   minWidth: 100, align: 'right'
// },
//   {
//     id: 'severity',
//     label: 'Severity',
//     minWidth: 170,
//     align: 'right'
//   },
//   {
//     id: 'time',
//     label: 'Time',
//     minWidth: 170,
//     align: 'right'
//   },
// ]
  


//   // const map1 = new Map ([[<TableBody>
//   //   {rows.map((row) => (
//   //                  <Row key={row.name} row={row} />
//   //              ))}
//   //     </TableBody>]])

//     // const map2 = new Map ([[<TableBody>
//     //     {rows
//     //       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     //       .map((row) => {
//     //         return (
//     //           <TableRow hover role="checkbox" tabIndex={-1}>
//     //             {columns.map((column) => {
//     //               const value = row[column.id];
//     //               return (
//     //                 <TableCell key={column.id} align={column.align}>
//     //                   {column.format && typeof value === 'number'
//     //                     ? column.format(value)
//     //                     : value}
//     //                 </TableCell>
//     //               );
//     //             })}
//     //           </TableRow>
//     //         );
//     //       })}
//     //   </TableBody>]])

// // const map3 = new Map([...map1, ...map2]);

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table" >
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <StyledTableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </StyledTableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//          {rows
//           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//           .map((row) => {
//             return (
//               <TableRow hover role="checkbox" tabIndex={-1}>
//                 {columns.map((column) => {
//                   const value = row[column.id];
//                   return (
//                     <TableCell key={column.id} align={column.align}>
//                       {column.format && typeof value === 'number'
//                         ? column.format(value)
//                         : value}
//                     </TableCell>
//                   );
//                 })}
//               </TableRow>
//             );
//           })}
//           {/* {rows
//           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//           .map((row) => {
//             return (
//               <Row key={row.name} row={row} hover role="checkbox" tabIndex={-1}/>
//                 // {columns.map((column) => {
//                 //   const value = row[column.id];
//                   // return (
//                   //   <TableCell key={column.id} align={column.align}>
//                   //     {column.format && typeof value === 'number'
//                   //       ? column.format(value)
//                   //       : value}
//                   //   </TableCell>
//                   // );
//                 // })}
//               // </Row>
//             );
//           })} */}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }






















// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
// import { Divider } from '@mui/material'

// const StyledTableCell = styled(TableCell)({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: '#1C75BC'
//     }
// });

// function createData(name, user, severity, time, steps, expected, actual, visuals) {
//     return {
//         name,
//         user,
//         severity,
//         time,
//         steps,
//         expected,
//         actual,
//         visuals,
//     };
// }

// function Row(props) {
//     const { row } = props;
//     const [open, setOpen] = React.useState(false);

//     return (
//         <React.Fragment>
//             <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//                 <TableCell>
//                     <IconButton
//                         aria-label="expand row"
//                         size="small"
//                         onClick={() => setOpen(!open)}
//                     >
//                         {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                     </IconButton>
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                     {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.user}</TableCell>
//                 <TableCell align="right">{row.severity}</TableCell>
//                 <TableCell align="right">{row.time}</TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//                     <Collapse in={open} timeout="auto" unmountOnExit>
//                         <Box sx={{ margin: 1 }}>
//                             <Typography variant="h6"component="div">
//                                 Ticket Information
//                             </Typography>

//                             <Divider sx={{ borderBottomWidth: 2, borderColor: '#1C75BC' }} style={{ width: '20%' }} />

//                             <Box sx={{ mt: 3}} />

//                                     <Box component="div" sx={{ display: 'inline' }}>
//                                         <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
//                                             Steps To Reproduce:
//                                         </Typography>
//                                         <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                                         <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                                             <CardContent>
//                                                 <Typography variant="body1" >
//                                                     Go to login page and try to sign in
//                                                     </Typography>
//                                             </CardContent>
//                                         </Card>
//                                         </Grid>
//                                         </Box>


//                                     <Box sx={{ mt: 3}} />

                                    

//                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                                         Expected Result:
//                                     </Typography>
//                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                                         <CardContent>
//                                             <Typography>
//                                                 Should sign in
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                     </Grid>

//                                     <Box sx={{ mt: 3}} />



//                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                                         Actual Result:
//                                     </Typography>
//                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                                         <CardContent>
//                                             <Typography>
//                                                 Reloads the page
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                     </Grid>

//                                     <Box sx={{ mt: 3}} />




//                                     <Typography style={{ fontWeight: '700', fontStyle: 'italic' }}>
//                                         Pictures/Videos:
//                                     </Typography>
//                                     <Grid container direction="row" justifyContent="space-around" alignItems="center">
//                                     <Card sx={{ width: 400, backgroundColor: '#1C75BC' }}>
//                                         <CardContent>
//                                             <Typography>
//                                                 Shows images here...
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                     </Grid>

//                                     <Box sx={{ mt: 5}} />











//                             {/* <Table size="small" aria-label="purchases">
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Steps To Reproduce Bug</TableCell>
//                                         <TableCell>Expected Result</TableCell>
//                                         <TableCell align="right">Actual Result</TableCell>
//                                         <TableCell align="right">Visual</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {row.history.map((historyRow) => (
//                                         <TableRow key={historyRow.date}>
//                                             <TableCell component="th" scope="row">
//                                                 {historyRow.date}
//                                             </TableCell>
//                                             <TableCell>{historyRow.customerId}</TableCell>
//                                             <TableCell align="right">{historyRow.amount}</TableCell>
//                                             <TableCell align="right">
//                                                 {Math.round(historyRow.amount * row.price * 100) / 100}
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table> */}
//                         </Box>
//                     </Collapse>
//                 </TableCell>
//             </TableRow>
//         </React.Fragment>
//     );
// }

// // Row.propTypes = {
// //     row: PropTypes.shape({
// //         calories: PropTypes.number.isRequired,
// //         carbs: PropTypes.number.isRequired,
// //         fat: PropTypes.number.isRequired,
// //         history: PropTypes.arrayOf(
// //             PropTypes.shape({
// //                 amount: PropTypes.number.isRequired,
// //                 customerId: PropTypes.string.isRequired,
// //                 date: PropTypes.string.isRequired,
// //             }),
// //         ).isRequired,
// //         name: PropTypes.string.isRequired,
// //         price: PropTypes.number.isRequired,
// //         protein: PropTypes.number.isRequired,
// //     }).isRequired,
// // };

// const rows = [
//     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
//     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
//     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
//     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
//     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
//     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
//     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
//     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
//     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
//     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
//     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
//     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
//     createData('Create View Ticket Page', 'Ben', 'Critical', '42m'),
//     createData('Create Login Page', 'Fede', 'Medium', '1hr'),
//     createData('Debug Created Pages', 'Zacky', 'Low', '2d'),
// ];

// export default function CollapsibleTable() {
//     return (
//         <TableContainer component={Paper}>
//             <Table
//             aria-label="collapsible table"
//             >
//                 <TableHead>
//                     <TableRow>
//                         <StyledTableCell />
//                         <StyledTableCell>Title</StyledTableCell>
//                         <StyledTableCell align="right">User</StyledTableCell>
//                         <StyledTableCell align="right">Severity</StyledTableCell>
//                         <StyledTableCell align="right">Time Since Posting</StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <Row key={row.name} row={row} />
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }


