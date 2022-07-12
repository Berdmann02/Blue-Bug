import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, severity, time) {
  return { name, severity, time };
}

const rows = [
  createData('Create View Ticket Page', 'Critical', '42m'),
  createData('Create Login Page', 'Medium', '1hr'),
  createData('Debug Created Pages', 'Low', '2d'),
];

function dashTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: '500', fontStyle: 'italic' }}>Ticket Name</TableCell>
            <TableCell align="right" style={{ fontWeight: '500', fontStyle: 'italic' }}>Severity</TableCell>
            <TableCell align="right" style={{ fontWeight: '500', fontStyle: 'italic' }}>Time Since Posting</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              hover
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.severity}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default dashTable;
