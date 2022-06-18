import React from 'react';
import NavbarSideElements from './NavbarSideElements';
import NavbarMiddleElements from './NavbarMiddleElements';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavbarContext } from './contexts/NavbarContext';
import styles from './styles/NavbarStyles';

function Navbar(props) {
    const classes = styles();

    return (
        <div className={classes.dev}>
            <AppBar className={classes.root} position="static" color="transparent">
                <Toolbar className={classes.grow}>
                    <div className={classes.container}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* <Typography className={classes.title} variant="h6" noWrap>
                            Material-UI
                        </Typography> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </div>
                    {<NavbarMiddleElements />}
                    {<NavbarSideElements />}
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default Navbar;
