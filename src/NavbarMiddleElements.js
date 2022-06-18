import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import GroupsIcon from '@mui/icons-material/Groups';
import GamesIcon from '@mui/icons-material/Games';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddToQueueTwoToneIcon from '@mui/icons-material/AddToQueueTwoTone';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import Avatar from '@mui/material/Avatar';
import style from './styles/NavbarMiddleElementsStyle';

function NavbarMiddleElement() {
    const classes = style();
    const [isActive, setIsActive] = useState(null);

    const updateIcon = (id) => {
        setIsActive(id)
    }

    return (
        <div>
            <NavLink className={classes.nav} to='/'>
                <IconButton onClick={() => updateIcon(0)} className={classes.IconContainer} aria-label="show 4 new mails">
                    {
                        isActive === 0 ? <HomeIcon className={classes.active} fontSize="large" />
                            : <div className={classes.icon}><HomeOutlinedIcon fontSize="large" /></div>

                    }
                </IconButton>
            </NavLink>
            <NavLink className={classes.nav} to='/watch/ref=tab'>
                <IconButton onClick={() => updateIcon(1)} className={classes.IconContainer} aria-label="show 4 new mails">
                    {
                        isActive === 1 ? < AddToQueueTwoToneIcon style={{ background: 'transparent' }} className={classes.active} fontSize="large" />
                            : <div className={classes.icon}><AddToQueueOutlinedIcon color="action" fontSize="large" /></div>
                    }
                </IconButton>
            </NavLink>
            <NavLink className={classes.nav} to='/groups/feed/'>
                <IconButton onClick={(e) => updateIcon(2)} className={classes.IconContainer} aria-label="show 4 new mails">
                    {
                        isActive === 2 ? <GroupsIcon className={classes.active} fontSize="large" />
                            : <div className={classes.icon}><GroupsIcon color="action" fontSize="large" /></div>
                    }
                </IconButton>
            </NavLink>
            <NavLink className={classes.nav} to='/gaming/feed/'>
                <IconButton onClick={() => updateIcon(3)} className={classes.IconContainer} aria-label="show 4 new mails">
                    {
                        isActive === 3 ? <GamesIcon className={classes.active} fontSize="large" />
                            : <div className={classes.icon}><GamesOutlinedIcon color="action" fontSize="large" /></div>
                    }
                </IconButton>
            </NavLink>
        </div >
    )
}

export default NavbarMiddleElement;