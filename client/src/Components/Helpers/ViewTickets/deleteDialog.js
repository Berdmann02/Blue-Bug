import * as React from 'react';
import {
    Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TablePagination,
    TableRow, Box, IconButton, Collapse, Grid,
    Card, Divider, CardContent, Typography,
    tableCellClasses, Dialog, DialogTitle,
    DialogContent, Button, DialogActions,
    Checkbox, Tooltip, DialogContentText
} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Delete Ticket">
                        <IconButton onClick={handleClickOpen}>
                            <DeleteForeverIcon style={{ color: '#f44336' }} display='flex' flexGrow={1} />
                        </IconButton>
                    </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to permanently delete this ticket?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This ticket will not be able to be viewed or recovered again.  
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Recover</Button>
          <Button style={{ color: '#f44336' }} onClick={handleClose} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

