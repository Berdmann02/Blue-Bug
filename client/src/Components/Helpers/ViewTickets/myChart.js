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
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../../Context/GlobalContext'
import moment from 'moment';
import Info from './myinfo'

const StyledTableCell = styled(TableCell)({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1C75BC'
    }
});

export default function MyChart() {
  
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleClose = () => setOpen(false);

    const handleClickOpen = (_id) => {
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

const { incompleteTickets, user, users } = useGlobalContext();

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
        {incompleteTickets.filter(ticket => ticket.assign.includes(user._id)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((tickets) => (
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
                {/* {tickets.assign.join(', ')} */}
                {tickets.assign.map((item) => {
                    return USERS.filter(({_id}) => _id === item).map((person) => (
                      (person.firstName + ' ' + person.lastName.substring(0, 1) + '.')
                    ))
                }).join(', ')}
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
      count={incompleteTickets.filter(ticket => ticket.assign.includes(user._id)).length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
   );
}