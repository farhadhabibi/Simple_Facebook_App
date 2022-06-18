import React, { useContext, useState } from 'react';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { NavbarContext } from './contexts/NavbarContext';
import styles from './styles/MobileSideNavbarStyle';

function MobileNavbarPopover(props) {
    const classes = styles();
    // const { anchorEl, isMenuOpen, handleMenuClose, handleProfileMenuOpen } = useContext(NavbarContext);
    const { handleProfileMenuOpen } = useContext(NavbarContext);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(false);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const mobilePopover = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(mobileMoreAnchorEl)}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge overlap="rectangular" badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge overlap="rectangular" badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )
    return (
        <div className={classes.sectionMobile}>
            <IconButton
                aria-label="show more"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
            {mobilePopover}
        </div>
    );
}

export default MobileNavbarPopover;