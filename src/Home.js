import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
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
import InputEmoji from 'react-input-emoji';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
// import { FacebookSelector } from 'react-reactions';
import FacebookEmoji from "react-facebook-emoji";
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import UploadPhotoDialog from './UploadPhotoDialog';
import UploadPhotoOptions from './UploadPhotoOptions';
import GetTimeAndDate from './GetTimeAndDate';
import style from './styles/HomeStyle';

function Home() {
    const baseTime = Date.now();

    const [photoDialogShowing, setPhotoDialogShowing] = useState(false)
    const [postedImages, setPostedImages] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadText, setUploadText] = useState(null)
    const [showMore, setShowMore] = useState({ toggle: false, target: null });
    const [dataToLocalStorage, setDataToLocalStorage] = useState([]);
    const [likePopover, setLikePopover] = React.useState(null);
    const [likeReaction, setLikeReaction] = useState(null)
    const classes = style();

    const blobToFile = async (blobURL, fileName, mimeType, uploadText, postedAt) => {
        const response = await fetch(blobURL);
        const blob = await response.blob();
        return { selectedFile: new File([blob], fileName, { type: mimeType }), uploadText, postedAt }
    }

    useEffect(() => {
        const get = JSON.parse(localStorage.getItem('files'));
        // console.log('get', get)
        if (get) {
            (async () => {
                const result = await Promise.all(
                    get.map((file) => blobToFile(file.selectedFile, file.fileName,
                        file.fileType, file.uploadText, file.postedAt))
                )
                setPostedImages(result)
            })()
        }
    }, []);
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            setSelectedFile(file)
        })
    }, [])
    const showPhotoDialog = () => {
        setSelectedFile(null);
        setPhotoDialogShowing(true)
    }
    const hidePhotoDialog = () => {
        setPhotoDialogShowing(false)
    }
    const displayAddedText = (text) => {
        setUploadText(text)
    }
    const postData = () => {
        const data = {
            selectedFile,
            uploadText,
            postedAt: new Date(baseTime).getTime(),
        }
        setPostedImages([...postedImages, data]);
    }
    useEffect(() => {
        const result = postedImages.map((file) => {
            // if setState iside map/forEach not work properly...
            // used promise to first change all the files to blob and resolve to return the value
            return new Promise((resolve, reject) => {
                try {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const binaryStr = reader.result;
                        const obj = [
                            {
                                ...file, selectedFile: binaryStr, fileName: file.selectedFile.name,
                                fileType: file.selectedFile.type, postedAt: file.postedAt
                            }
                        ]
                        resolve(obj);
                    }
                    reader.readAsDataURL(file.selectedFile);
                } catch (err) {
                    console.log(err)
                }
            })
        });
        // result return array of fullfilled promises
        Promise.all(
            result.map((file) => {
                return file.then((res) => res)
            })
        ).then((val) => {
            setDataToLocalStorage(val.flat())
        })
    }, [postedImages]);

    // useDidMountEffect
    // useLayoutEffect
    // useRef
    // useCallback

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        // OR below we must declare isFirst out of component
        // if (isFirst) {
        //     isFirst = false;
        //     return;
        // }
        const local = localStorage.setItem('files', JSON.stringify(dataToLocalStorage))
    }, [dataToLocalStorage])
    const showMoreOptions = (event) => {
        setShowMore({ toggle: true, target: event.currentTarget })
    }
    const hideShowMoreOptions = () => {
        setShowMore({ ...showMore, toggle: false })
    }
    let timer = 0;
    let time = 0;
    const handlePopoverOpen = () => {
        timer = setTimeout(() => {
            setLikePopover(true)
        }, 1000)
        clearTimeout(time);

    };
    const handlePopoverClose = () => {
        time = setTimeout(() => {
            setLikePopover(false)
        }, 1000)
        clearTimeout(timer);
    };
    const handleLikeReaction = (e) => {
        console.log('e', e.currentTarget.dataset.name)
        setLikeReaction(e.currentTarget.dataset.name)
    }
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
                                {file.uploadText}
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
                                <Typography variant='body' component="span">
                                    Imojies &nbsp;You and 423 others
                                </Typography>
                                <Typography variant="body" component="span">
                                    6 Comments &nbsp;8 Share
                                </Typography>
                            </div>
                            <Divider />
                            <div className={classes.userActions} onMouseLeave={handlePopoverClose}>
                                <div onMouseEnter={handlePopoverOpen}>
                                    {likePopover &&
                                        <Paper variant='oulined' className={classes.likeReactionContainer}>
                                            <Box className={classes.likeReaction} data-name='Like' onClick={handleLikeReaction}>
                                                <Tooltip title="Like" placement="top">
                                                    <span><FacebookEmoji type='like' size='sm' /></span>
                                                </Tooltip>
                                            </Box>
                                            <Box className={classes.likeReaction} data-name='Love' onClick={handleLikeReaction}>
                                                <Tooltip title="Love" placement="top">
                                                    <span> <FacebookEmoji type='love' size='sm' /></span>
                                                </Tooltip>
                                            </Box>
                                            <Box className={classes.likeReaction} data-name='Care' onClick={handleLikeReaction}>
                                                <Tooltip title="Care" placement="top">
                                                    <span> <FacebookEmoji type='yay' size='sm' /></span>
                                                </Tooltip>
                                            </Box>
                                            <Box className={classes.likeReaction} data-name='Haha' onClick={handleLikeReaction}>
                                                <Tooltip title="Haha" placement="top">
                                                    <span> <FacebookEmoji type='haha' size='sm' /></span>
                                                </Tooltip>
                                            </Box>
                                            <Box className={classes.likeReaction} data-name='Wow' onClick={handleLikeReaction}>
                                                <Tooltip title="Wow" placement="top">
                                                    <span> <FacebookEmoji type='wow' size='sm' /></span>
                                                </Tooltip>
                                            </Box>
                                            <Box className={classes.likeReaction} data-name='Sad' onClick={handleLikeReaction}>
                                                <Tooltip title="Sad" placement="top">
                                                    <span> <FacebookEmoji type='sad' size='sm' /></span>
                                                </Tooltip>
                                            </Box>
                                            <Box className={classes.likeReaction} data-name='Angry' onClick={handleLikeReaction}>
                                                <Tooltip title="Angry" placement="top">
                                                    <span> <FacebookEmoji type='angry' size='sm' /></span>
                                                </Tooltip>
                                            </Box>
                                        </Paper>
                                    }
                                    <IconButton onClick={handleLikeReaction} data-name='Like' >
                                        <div className={classes.userActionsButton}>
                                            {
                                                likeReaction === 'Like' ?
                                                    (<>
                                                        <Typography color='primary' variant='span'>&nbsp;{likeReaction}</Typography></>)
                                                    : likeReaction === 'Love' ?
                                                        (<><ThumbUpOutlinedIcon className={classes.icon} />
                                                            <Typography color='red' variant='span'>&nbsp;{likeReaction}</Typography></>)
                                                        : likeReaction === 'Care' ?
                                                            (<><ThumbUpOutlinedIcon className={classes.icon} />
                                                                <Typography color='orange' variant='span'>&nbsp;{likeReaction}</Typography></>)
                                                            : likeReaction === 'Haha' ?
                                                                (<><ThumbUpOutlinedIcon className={classes.icon} />
                                                                    <Typography color='orange' variant='span'>&nbsp;{likeReaction}</Typography></>)
                                                                : likeReaction === 'Wow' ?
                                                                    (<><ThumbUpOutlinedIcon className={classes.icon} />
                                                                        <Typography color='orange' variant='span'>&nbsp;{likeReaction}</Typography></>)
                                                                    : likeReaction === 'Sad' ?
                                                                        (<><ThumbUpOutlinedIcon className={classes.icon} />
                                                                            <Typography color='orange' variant='span'>&nbsp;{likeReaction}</Typography></>)
                                                                        : likeReaction === 'Angry' ?
                                                                            (<><ThumbUpOutlinedIcon className={classes.icon} />
                                                                                <Typography color='#ff784e' variant='span'>&nbsp;{likeReaction}</Typography></>)
                                                                            : (<><ThumbUpOutlinedIcon className={classes.icon} />
                                                                                <Typography variant='span'>Like</Typography></>)
                                            }

                                        </div>
                                    </IconButton>
                                </div>
                                <IconButton>
                                    <div className={classes.userActionsButton}>
                                        <ChatBubbleOutlineRoundedIcon className={classes.icon} /> &nbsp;Comment
                                    </div>
                                </IconButton>
                                <IconButton>
                                    <div className={classes.userActionsButton}>
                                        <ReplyOutlinedIcon className={classes.icon} /> &nbsp;Share
                                    </div>
                                </IconButton>
                            </div>
                        </div>
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
                                subheader={file.postedAt}
                                subheader={<GetTimeAndDate date={file.postedAt} />}
                            />
                            <CardContent className={classes.addedTextContainer}>
                                <Typography>
                                    {file.uploadText}
                                </Typography>
                            </CardContent>
                            <div className={classes.userActionContainer}>
                                <div className={classes.userActionPerformed}>
                                    <Typography variant='body' component="span">
                                        Imojies &nbsp;You and 423 others
                                </Typography>
                                    <Typography variant="body" component="span">
                                        6 Comments &nbsp;8 Share
                                </Typography>
                                </div>
                                <Divider />
                                <div className={classes.userActions}>
                                    <Typography variant='body' component="span">
                                        <ThumbUpOutlinedIcon style={{ verticalAlign: 'middle' }} /> &nbsp;Like
                                </Typography>
                                    <Typography variant="body" component="span">
                                        <ChatBubbleOutlineRoundedIcon style={{ verticalAlign: 'middle' }} /> &nbsp;Comment
                                </Typography>
                                    <Typography variant="body" component="span">
                                        <ReplyOutlinedIcon style={{ verticalAlign: 'middle' }} /> &nbsp;Share
                                </Typography>
                                </div>
                            </div>
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
                                <Button size="small" onClick={showPhotoDialog}>Photo/Video</Button>
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
            {
                photoDialogShowing &&
                <UploadPhotoDialog hidePhotoDialog={hidePhotoDialog}
                    displayAddedText={displayAddedText}
                    postData={postData}
                    selectedFile={selectedFile}
                    onDrop={onDrop}
                // accept={"image/*"}
                />
            }
            {
                showMore.toggle === true &&
                <UploadPhotoOptions showMore={showMore}
                    hideShowMoreOptions={hideShowMoreOptions}
                />
            }
        </div >
    )
}

export default Home;