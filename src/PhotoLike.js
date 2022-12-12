import React, { useState, useContext } from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

import FacebookEmoji from "react-facebook-emoji";

import { AllMethodsContext } from './contexts/AllMethodsContext';

import styles from './styles/PhotoLikeStyle'

function PhotoLike(props) {
    const { handlePopoverOpen, handlePopoverClose, handleLikeReaction } = useContext(AllMethodsContext);
    const { file } = props;
    const classes = styles();

    const [defaultLikeToggle, setDefaultLikeToggle] = useState(true);

    return (
        <div data-id={file.id} onMouseLeave={(event) => console.log('event', event)}>
            <div data-id={file.id} onMouseEnter={(event) => {
                !file.displayLikePopover && handlePopoverOpen(event, file);
            }}>
                {defaultLikeToggle && file.displayLikePopover &&
                    <Paper variant='oulined' className={classes.likeReactionContainer}>
                        <Box className={classes.likeReaction} data-name='like' onClick={(event) => handleLikeReaction(event, file)}>
                            <Tooltip title="Like" placement="top">
                                <span><FacebookEmoji type='like' size='sm' /></span>
                            </Tooltip>
                        </Box>
                        <Box className={classes.likeReaction} data-name='love' onClick={(event) => handleLikeReaction(event, file)}>
                            <Tooltip title="Love" placement="top">
                                <span> <FacebookEmoji type='love' size='sm' /></span>
                            </Tooltip>
                        </Box>
                        <Box className={classes.likeReaction} data-name='yay' onClick={(event) => handleLikeReaction(event, file)}>
                            <Tooltip title="Care" placement="top">
                                <span> <FacebookEmoji type='yay' size='sm' /></span>
                            </Tooltip>
                        </Box>
                        <Box className={classes.likeReaction} data-name='haha' onClick={(event) => handleLikeReaction(event, file)}>
                            <Tooltip title="Haha" placement="top">
                                <span> <FacebookEmoji type='haha' size='sm' /></span>
                            </Tooltip>
                        </Box>
                        <Box className={classes.likeReaction} data-name='wow' onClick={(event) => handleLikeReaction(event, file)}>
                            <Tooltip title="Wow" placement="top">
                                <span> <FacebookEmoji type='wow' size='sm' /></span>
                            </Tooltip>
                        </Box>
                        <Box className={classes.likeReaction} data-name='sad' onClick={(event) => handleLikeReaction(event, file)}>
                            <Tooltip title="Sad" placement="top">
                                <span> <FacebookEmoji type='sad' size='sm' /></span>
                            </Tooltip>
                        </Box>
                        <Box className={classes.likeReaction} data-name='angry' onClick={(event) => handleLikeReaction(event, file)}>
                            <Tooltip title="Angry" placement="top">
                                <span> <FacebookEmoji type='angry' size='sm' /></span>
                            </Tooltip>
                        </Box>
                    </Paper>
                }
                <IconButton data-name='like' data-id={file.id} onClick={(event) => handleLikeReaction(event, file, true)}>
                    <div className={classes.userActionsButton}>
                        {
                            (function showElement() {
                                let keep = [];
                                for (let like of file.likes) {
                                    if (like.title === 'like' && like.isTrue) {
                                        keep.push(<div key={like.id} className={classes.iconText} >
                                            <FacebookEmoji type='like' size='xs' />
                                            <Typography color='primary' variant='span'>
                                                &nbsp;{like.title}
                                            </Typography> </div>)
                                    } else if (like.title === 'love' && like.isTrue) {
                                        keep.push(<div key={like.id} className={classes.iconText} >
                                            <FacebookEmoji type='love' size='xs' />
                                            <Typography color='red' variant='span'>
                                                &nbsp;{like.title}
                                            </Typography> </div>)
                                    } else if (like.title === 'yay' && like.isTrue) {
                                        keep.push(<div key={like.id} className={classes.iconText} >
                                            <FacebookEmoji type='yay' size='xs' />
                                            <Typography color='orange' variant='span'>
                                                &nbsp;{like.title}
                                            </Typography> </div>)
                                    } else if (like.title === 'haha' && like.isTrue) {
                                        keep.push(<div key={like.id} className={classes.iconText} >
                                            <FacebookEmoji type='haha' size='xs' />
                                            <Typography color='orange' variant='span'>
                                                &nbsp;{like.title}
                                            </Typography> </div>)
                                    } else if (like.title === 'wow' && like.isTrue) {
                                        keep.push(<div key={like.id} className={classes.iconText} >
                                            <FacebookEmoji type='wow' size='xs' />
                                            <Typography color='orange' variant='span'>
                                                &nbsp;{like.title}
                                            </Typography> </div>)
                                    } else if (like.title === 'sad' && like.isTrue) {
                                        keep.push(<div key={like.id} className={classes.iconText} >
                                            <FacebookEmoji type='sad' size='xs' />
                                            <Typography color='orange' variant='span'>
                                                &nbsp;{like.title}
                                            </Typography> </div>)
                                    } else if (like.title === 'angry' && like.isTrue) {
                                        keep.push(<div key={like.id} className={classes.iconText} >
                                            <FacebookEmoji type='angry' size='xs' />
                                            <Typography color='#ff784e' variant='span'>
                                                &nbsp;{like.title}
                                            </Typography> </div>)
                                    }
                                }
                                if (keep.length === 0) {
                                    keep.push(<div key={file.id} className={classes.iconText}><ThumbUpOutlinedIcon />
                                        <Typography variant='span'>&nbsp;Like</Typography></div>)

                                }
                                return keep;
                            }())
                        }
                    </div>
                </IconButton>
            </div>
        </div>
    )
}
export default PhotoLike; 