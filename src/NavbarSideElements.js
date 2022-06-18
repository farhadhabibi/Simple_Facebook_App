import React, { useContext } from 'react';
import MobileNavbarPopover from './MobileNavbarPopover'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavbarContext } from './contexts/NavbarContext';
import style from './styles/NavbarSideElementStyle';

function NavbarSideElements(props) {
    const classes = style();
    const { anchor, handleMenuClose, handleProfileMenuOpen } = useContext(NavbarContext);

    const NavbarPopover = (
        <Menu
            anchorEl={anchor}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            // keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchor)}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <>
            <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge overlap="rectangular" badgeContent={5} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge overlap="rectangular" badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                {NavbarPopover}
            </div>
            {<MobileNavbarPopover />}
        </>
    )
}

export default NavbarSideElements;
