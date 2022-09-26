import * as React from 'react';
import {
  Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TablePagination,
  TableRow, Box, IconButton, Collapse, Grid,
  Card, Divider, CardContent, Typography,
  tableCellClasses, Dialog, DialogTitle,
  DialogContent, Button, DialogActions,
  Checkbox, Tooltip, InputLabel, NativeSelect,
  MenuItem, Select, FormControl
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles'
import Delete from './deleteUsers'
import { Link } from "react-router-dom"
import { useGlobalContext } from '../../Context/GlobalContext'
import axios from 'axios'


function UserInfo(props, {role, setRole}) {

  const { users, user, updateUser } = useGlobalContext();

  const USERS = users.users || []

  // const [role, setRole] = React.useState(props.UserRole);
  // const [role, setRole] = React.useState(10);

  // console.log(role);

  const handleClose = () => {
    props.setOpen(false);
    // window.location.reload(false);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setRole(e.target.value)
  };

  const handleSave = (e) => {
    e.preventDefault();


    axios.put(`/api/auth/current/${props.UserId}`, { role }).then(res => {
      updateUser(res.data);

  })

    window.location.reload(false);
    props.setOpen(false);
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

  return (

    <div>
      {USERS.filter(person => person._id === props.UserId).map((people) => (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={props.open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Account Information
          </BootstrapDialogTitle>

          <DialogContent dividers sx={{ minWidth: 500 }}>
            <Box component="div" sx={{ display: 'inline' }}>
              <Typography style={{ fontWeight: '700', fontStyle: 'italic' }} noWrap>
                {people.firstName + ' ' + people.lastName}
              </Typography>
              <Box sx={{ mt: 2 }} />
              <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // defaultValue={people.role}
                    value={role}
                    label="Role"
                    onChange={handleChange}
                  >
                    <MenuItem value={'Admin'}>Admin</MenuItem>
                    <MenuItem value={'Project Manager'}>Project Manager</MenuItem>
                    <MenuItem value={'Editor'}>Editor</MenuItem>
                    <MenuItem value={'Updater'}>Updater</MenuItem>
                  </Select>
                </FormControl>






                {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Role
                        </InputLabel>
                        <NativeSelect
                            defaultValue={role}
                            inputProps={{
                                name: 'role',
                                id: 'uncontrolled-native',
                            }}
                            // value={role}
                            onChange={handleChange}
                        >
                          <option value={'Admin'}>Admin</option>
                            <option value={'Project Manager'}>Project Manager</option>
                            {/* <option value={2}>Team Manager</option> */}
                           {/* <option value={'Editor'}>Editor</option>
                            <option value={'Updater'}>Updater</option>
                        </NativeSelect>  */}
                {/* <Typography>
                        Project Manager
                    </Typography> */}
              </Grid>
            </Box>

            <Box sx={{ mt: 2 }} />



            <Box sx={{ mt: 2 }} />

          </DialogContent>


          <DialogActions>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Delete people={people} />

            </Grid>
            <Button autoFocus onClick={handleSave}>
              Save
            </Button>
          </DialogActions>
        </BootstrapDialog>
      ))
      }
    </div >
  )
}

export default UserInfo;