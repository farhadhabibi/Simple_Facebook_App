import React, { useState, useEffect, useCallback, useLayoutEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';

import uselocalStorageState from './hooks/useLocalStorageState';
import FacebookEmoji from "react-facebook-emoji";
import { v4 as uuidv4 } from 'uuid';
import UploadPhotoDialog from './UploadPhotoDialog';
import UploadPhotoOptions from './UploadPhotoOptions';
import GetTimeAndDate from './GetTimeAndDate';
import PhotoLike from './PhotoLike';
import PhotoComment from './PhotoComment';
import './styles/homeEmoji.css'
import style from './styles/HomeStyle';

import LoginPage from './LoginPage';

import useAllMethodsState from './hooks/useAllMethodsState';
import useToggleBox from './hooks/useToggleBox';

import { AllMethodsContext } from './contexts/AllMethodsContext';

function Home() {
    // const { postedImages, photoDialogShowing, showPhotoDialog, toggleComment, handleCommentReaction } = useContext(AllMethodsContext);
    const { postedImages, dispatch } = useContext(AllMethodsContext);
    // console.log('postedimage', postedImages)

    const [photoDialogShowing, toggle] = useToggleBox(false);

    // const { selectedFile, anchorEl, open, defaultLikeToggle, onDrop,
    //     hidePhotoDialog, uploadedData, handlePopoverOpen, handlePopoverClose, handleLikeReaction, displayCommentOptions,
    //     closeCommentOptions, addComment, deleteComment, toggleEdit,
    //     editComment } = useAllMethodsState();

    const [showMore, setShowMore] = useState({ toggle: false, target: null });
    const classes = style();

    const showMoreOptions = (event) => {
        setShowMore({ toggle: true, target: event.currentTarget })
    }
    const hideShowMoreOptions = () => {
        setShowMore({ ...showMore, toggle: false })
    }

    // const showPhotoDialog = () => {
    //     // setSelectedFile(null);
    //     setPhotoDialogShowing(true)
    // }

    const images = postedImages.map((file, index) => {
        return (
            file.selectedFile ? (
                <div key={index}>
                    <br />
                    <Card variant="outlined" className={classes.fileCard}>
                        <CardHeader
                            avatar={
                                <Avatar alt="Farhad" src="/static/images/avatar/1.jpg" />
                            }
                            action={
                                <IconButton aria-label="photoOptions" onClick={showMoreOptions}>
                                    <MoreHorizIcon />
                                </IconButton>
                            }
                            title="Farhad Malik"
                            // subheader={date}
                            subheader={<GetTimeAndDate date={file.postedAt} />}
                        />
                        <CardContent className={classes.addedTextContainer}>
                            <Typography>
                                {file.uploadedText}
                            </Typography>
                        </CardContent>
                        <Divider />
                        <CardMedia
                            component={file.selectedFile.type === "image/jpeg" ? 'img' : 'iframe'}
                            height={file.selectedFile.type === "image/jpeg" ? 'auto'
                                : file.selectedFile.type === "video/mp4" ? '400' : '250'}
                            image={URL.createObjectURL(file.selectedFile)}
                            alt="uploaded img/iframe"
                            autoPlay
                        />
                        <div className={classes.userActionContainer}>
                            <div className={classes.userActionPerformed}>
                                <Box>
                                    <Typography variant='body' component="span">
                                        {
                                            file.likes.map((like) => {
                                                if (like.isTrue)
                                                    return <FacebookEmoji key={like.id} type={like.title} size='xxs' />
                                                return null;
                                            })
                                        }
                                        &nbsp;
                                    </Typography>
                                    <Typography variant='body' component="span">
                                        {
                                            file.likes.map((like) => {
                                                if (like.isTrue) return like.count;
                                                return null;
                                            })
                                        }
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body" component="span" className={classes.commentCounts} data-id={file.id}
                                        onClick={(event) => dispatch({ type: 'toggleComment', event: event.currentTarget.dataset.id })}>
                                        {file.comments.length} Comments
                                     </Typography>
                                    <Typography variant="body" component="span">
                                        &nbsp; 8 Share
                                    </Typography>
                                </Box>
                            </div>
                            <Divider />
                        </div>
                        <div className={classes.userActions}>
                            <PhotoLike
                                file={file}
                            />
                            <IconButton data-id={file.id}
                                onClick={(event) => dispatch({ type: 'commentReaction', event: event.currentTarget.dataset.id })}>
                                <div className={classes.userActionsButton}>
                                    <ChatBubbleOutlineRoundedIcon />&nbsp;Comment
                                 </div>
                            </IconButton>
                            <IconButton>
                                <div className={classes.userActionsButton}>
                                    <ReplyOutlinedIcon />&nbsp;Share
                                </div>
                            </IconButton>
                        </div>
                        <PhotoComment
                            file={file}
                        />
                    </Card>
                </div>
            ) : (
                    <div key={index}>
                        <br />
                        <Card variant="outlined" className={classes.fileCard}>
                            <CardHeader
                                avatar={
                                    <Avatar alt="Farhad" src="/static/images/avatar/1.jpg" />
                                }
                                action={
                                    <IconButton aria-label="settings" onClick={showMoreOptions}>
                                        <MoreHorizIcon />
                                    </IconButton>
                                }
                                title="Farhad Malik"
                                subheader={<GetTimeAndDate date={file.postedAt} />}
                            />
                            <CardContent className={classes.addedTextContainer}>
                                <Typography>
                                    {file.uploadedText}
                                </Typography>
                            </CardContent>
                            <div className={classes.userActionContainer}>
                                <div className={classes.userActionPerformed}>
                                    <Box>
                                        <Typography variant='body' component="span">
                                            Imojies &nbsp;
                                     </Typography>
                                        <Typography variant='body' component="span">
                                            You and 423 others
                                    </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body" component="span" className={classes.commentCounts} data-id={file.id}
                                            onClick={(event) => dispatch({ type: 'toggleComment', event: event.currentTarget.dataset.id })}>
                                            {file.comments.length} Comments
                                     </Typography>
                                        <Typography variant="body" component="span">
                                            &nbsp; 8 Share
                                    </Typography>
                                    </Box>
                                </div>
                                <Divider />
                            </div>
                            <div className={classes.userActions}>
                                <PhotoLike
                                    file={file}
                                />
                                <IconButton data-id={file.id}
                                    onClick={(event) => dispatch({ type: 'commentReaction', event: event.currentTarget.dataset.id })}>
                                    <div className={classes.userActionsButton}>
                                        <ChatBubbleOutlineRoundedIcon />&nbsp;Comment
                                        </div>
                                </IconButton>
                                <IconButton>
                                    <div className={classes.userActionsButton}>
                                        <ReplyOutlinedIcon />&nbsp;Share
                                        </div>
                                </IconButton>
                            </div>
                            <PhotoComment
                                file={file}
                            />
                        </Card>
                    </div>
                )
        )
    })
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid xs={3.5}>
                    <p>xs=3</p>
                </Grid>
                <Grid xs={5}>
                    <Card sx={{ minWidth: 275, borderRadius: '0.5rem' }}>
                        <CardContent className={classes.cardContent} >
                            <Avatar alt="Farhad" src="/static/images/avatar/1.jpg" />
                            <div className={classes.search}>
                                What's on your mind, Farhad?
                            </div>
                        </CardContent>
                        <Divider />
                        <CardActions className={classes.footer}>
                            <Stack spacing={8} direction="row">
                                <Button size="small">Live Video</Button>
                                <Button size="small" onClick={toggle}>Photo/Video</Button>
                                <Button size="small">Feeling/Activity</Button>
                            </Stack>
                        </CardActions>
                    </Card>
                    {images}
                </Grid>
                <Grid xs={3.5}>
                    <p>xs=3</p>
                </Grid>
            </Grid>
            {photoDialogShowing && <UploadPhotoDialog hidePhotoDialog={toggle} />}
            {
                showMore.toggle &&
                <UploadPhotoOptions
                    showMore={showMore}
                    hideShowMoreOptions={hideShowMoreOptions}
                />
            }
        </div >
    )
}
export default Home;


/* English app, 4 include persion, 7 offline may include persion, 8 include persion, 12 offline no persion */

// if setState iside map/forEach not work properly...

 /* search1
    // 1. how to use if else with filter
    // 2. how to return array with find
    // 3. how to use some to return value instead of boolean
    // useDidMountEffect
    // useLayoutEffect
    // useRef
    // useCallback
 */

// OR below we must declare isFirst out of component
// if (isFirst) {
//     isFirst = false;
//     return;
// }


// 1. work on like count      //  done
// 2. useref to edit comment  // done
// 3. create signup and login page
// 4. bring optimization like tab is inactive when loaded and the things noted in notion.
// 5. work on multiple images
// 6. when love clicked and then like should show unlike...


// NEW ENHANCEMENT
// 1. make a new hook for localStorage
// 2. if possible make new hooks for photo dialog/like/comment menthods which is actually
//  good practice to have  methods for a specific actions in a new hook (actually component)
// 3. use reducer for dialog/like/comment menthods hooks.

