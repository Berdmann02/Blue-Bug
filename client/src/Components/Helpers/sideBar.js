import * as React from 'react'
import {
    Drawer, Typography, Box, AppBar,
    Toolbar, Divider, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Button, IconButton,
    Menu, MenuItem, Badge, Grid, Tooltip
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { CssBaseline } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import TaskIcon from '@mui/icons-material/Task';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom"

const drawerWidth = 240;

const useStyles = makeStyles({
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: {
        backgroundColor: '#ffa526',
    },
});


function SideBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (
        <Grid container>
        <Box>
            <Box>
                <CssBaseline />
                <AppBar
                    style={{ zIndex: 1251 }}
                    position="fixed">
                    <Toolbar>
                        <Box display='flex' flexGrow={1}>
                            <img src='BlueBugLogo6.svg' alt="BlueBugLogo" height='50'
                                width='205' />
                        </Box>

                        <Tooltip title='Notifications'>
                        <IconButton size="large">
                            <Badge badgeContent={2} color='primary'>
                            <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        </Tooltip>

                        <IconButton size="large" color="inherit"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <AccountCircleIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose} component={Link} to="/current">
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                Profile
                                </MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/settings">
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                Settings
                                </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                Logout
                                </MenuItem>
                        </Menu>

                        {/* <Button color="inherit" size="large">
                            Logout
                        </Button> */}

                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <Drawer
                    className={classes.drawer}
                    variant='permanent'
                    anchor='left'
                    classes={{ paper: classes.drawerPaper }}
                    sx={{
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            scrollMargin: 80,
                            height: 1400
                        },
                    }}>
                    <Toolbar />
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <Typography style={{ fontWeight: 400, fontStyle: 'italic' }}>
                                        Dashboard
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/new">
                                <ListItemIcon>
                                    <AddCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <Typography style={{ fontWeight: 400, fontStyle: 'italic' }}>
                                        Create Ticket
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/view">
                                <ListItemIcon>
                                    <ArticleIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <Typography style={{ fontWeight: 400, fontStyle: 'italic' }}>
                                        View Tickets
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    {/* <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TaskIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <Typography style={{ fontWeight: 400, fontStyle: 'italic' }}>
                                        Completed Tickets
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DeleteIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    <Typography style={{ fontWeight: 400, fontStyle: 'italic' }}>
                                        Deleted Tickets
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List> */}
                </Drawer>
            </Box>
        </Box>
        </Grid>
    )
}

export default SideBar
