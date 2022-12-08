import React, { useRef, useEffect, useContext } from 'react';

import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import InputEmoji from 'react-input-emoji';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import EditCommentForm from './EditCommentForm';

import { AllMethodsContext } from './contexts/AllMethodsContext';

import styles from './styles/PhotoCommentStyle';

function PhotoComment(props) {
    const { addComment, displayCommentOptions, open, anchorEl, closeCommentOptions,
        editComment, toggleEdit, deleteComment } = useContext(AllMethodsContext);
    const { file } = props;

    const emojiRef = useRef();
    const classes = styles();

    useEffect(() => {
        if (!emojiRef.current) return;
        emojiRef.current.focus();
    }, [file.displayComment])

    return (
        <div>
            {
                file.displayComment && (
                    <div className={classes.displayComment}>
                        <Divider />
                        <CardContent>
                            <Box className={classes.emojiContainer}>
                                <Avatar alt="Farhad" src="/static/images/avatar/1.jpg" />
                                <InputEmoji
                                    ref={emojiRef}
                                    placeholder="Type a message..."
                                    theme="auto"
                                    cleanOnEnter
                                    onEnter={(event) => addComment(event, file.id)}
                                />
                            </Box>
                            {
                                file.comments.map((comment, index) => {
                                    return (
                                        <div key={index}>
                                            {
                                                !comment.isEditable ? (
                                                    <Box className={classes.commentContainer}>
                                                        <Avatar alt="Farhad" src="/static/images/avatar/1.jpg" />
                                                        <Box className={classes.commentSubContainer}>
                                                            {comment.text}
                                                        </Box>
                                                        <IconButton aria-label="settings" onClick={(event) => displayCommentOptions(event, comment.id)}>
                                                            <MoreHorizIcon />
                                                        </IconButton>
                                                    </Box>

                                                ) : (
                                                        <Box className={classes.emojiContainer}>
                                                            <Avatar alt="Farhad" src="/static/images/avatar/1.jpg" />
                                                            <EditCommentForm
                                                                comment={comment}
                                                                editComment={editComment}
                                                            />
                                                        </Box>
                                                    )
                                            }

                                            <Popover
                                                open={open}
                                                anchorEl={anchorEl}
                                                onClose={closeCommentOptions}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'center',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'center',
                                                }}
                                            >
                                                <List sx={{ padding: 0.5, width: '22rem', fontWeight: 'bold' }}>
                                                    <ListItem sx={{ padding: 0 }} >
                                                        <ListItemButton onClick={toggleEdit}>
                                                            <ListItemText primary="Edit" />
                                                        </ListItemButton>
                                                    </ListItem>
                                                    <ListItem sx={{ padding: 0 }}>
                                                        <ListItemButton onClick={deleteComment}>
                                                            <ListItemText primary='Delete' />
                                                        </ListItemButton>
                                                    </ListItem>
                                                </List>
                                            </Popover>

                                        </div>

                                    )
                                })
                            }
                        </CardContent>
                    </div>
                )
            }
        </div>
    )
}
export default PhotoComment;