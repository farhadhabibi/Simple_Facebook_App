import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@mui/material/CardActions';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import PersonIcon from '@mui/icons-material/Person';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MicIcon from '@mui/icons-material/Mic';

import InputEmoji from 'react-input-emoji';
import { useDropzone } from 'react-dropzone'

import { AllMethodsContext } from './contexts/AllMethodsContext';

// import './styles/homeEmoji.css'
import './styles/emoji.css'
import style from './styles/uploadPhotoDialogStyle'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        // fullWidth,
        maxWidth: "xl",
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
        maxWidth: "xl"
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
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

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function UploadPhotoDialog(props) {
    const classes = style();
    const { hidePhotoDialog, uploadedData, selectedFile, onDrop } = useContext(AllMethodsContext);

    const [open, setOpen] = useState(true);
    const [uploadedText, setUploadedText] = useState();


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        //  accept: {
        //     'image/jpeg': []
        // },
    })
    const handlePostData = () => {
        uploadedData(uploadedText);
        hidePhotoDialog();
    }
    const addedText = (event) => {
        setUploadedText(event);
    }
    return (
        <div>
            <BootstrapDialog className={classes.dialog}
                aria-labelledby="customized-dialog-title"
                open={open}>
                <BootstrapDialogTitle id="customized-dialog-title" onClose={hidePhotoDialog}>
                    Modal title
                </BootstrapDialogTitle>
                <DialogContent dividers style={{ overflow: 'scroll' }}>
                    <div className={classes.profileContainer}>
                        <Avatar alt="Farhad" src="/static/images/avatar/1.jpg"
                            sx={{ width: 50, height: 50 }} />
                        <div className={classes.profileSubContainer}>
                            <Typography variant="h7" component="span">
                                Farhad Malik
                            </Typography>
                            <Button variant="contained" color="inherit" size="small">
                                Public
                             <ArrowDropDownIcon />
                            </Button>
                        </div>
                    </div>
                    <div className={classes.reactEmojiPickerWrapper}>
                        <InputEmoji
                            value='text'
                            onChange={addedText}
                            placeholder="What's on your mind, Farhad?"
                            borderColor="white"
                        />
                    </div>
                    <div className={classes.uploadFileContainer}>
                        {
                            !selectedFile ? (
                                <Card variant="outlined" sx={{ border: 'none' }}>
                                    <CardContent className={classes.photoContent}>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            {
                                                isDragActive ?
                                                    <p>Add Photos or Vidoes</p> :
                                                    <>
                                                        <Typography sx={{ margin: 'auto' }} className={classes.addPhotoIcon}>
                                                            <AddToPhotosIcon />
                                                        </Typography>
                                                        <Typography variant="body1" component="p" sx={{ fontWeight: 'bold' }}>
                                                            Add Photos/Videos
                                                        </Typography>
                                                        <Typography variant='caption' component="p" align="center" color='#616161'>
                                                            or drag and drop
                                                        </Typography>
                                                    </>
                                            }
                                        </div>
                                    </CardContent>
                                </Card>
                            ) : (
                                    <Card variant="outlined" >
                                        <CardMedia
                                            component={selectedFile.type === "image/jpeg" ? 'img'
                                                : selectedFile.type === "video/mp4" ? 'video' : 'iframe'
                                            }
                                            autoPlay
                                            height={selectedFile.type === "image/jpeg" ? 'auto'
                                                : '250'}
                                            image={URL.createObjectURL(selectedFile)}
                                            // image={selectedFile}
                                            alt="uploaded img/iframe"
                                        />
                                    </Card>
                                )
                        }
                        <div className={classes.mobilePhoto}>
                            <Card variant="outlined" sx={{ border: 'none' }} className={classes.mobilePhotoCard}>
                                <CardContent className={classes.mobilePhotoContent}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <PhoneAndroidIcon />
                                        <Typography variant="caption" component="p">
                                            Add photos and vidoes from your mobile device.
                                        </Typography>
                                        <Button variant="contained" color="inherit" size="small"
                                            style={{ marginLeft: '40px' }}>
                                            Add
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <br />
                    <Card variant="outlined" className={classes.addToPostContainer}>
                        <CardContent className={classes.addToPostContent}>
                            <Typography variant="body2" component="p" sx={{ fontWeight: 'bold' }}>
                                Add to your post
                            </Typography>
                        </CardContent>
                        <div>
                            <IconButton>
                                <PhotoAlbumIcon color="success" />
                            </IconButton>
                            <IconButton>
                                <PersonIcon color='primary' fontSize="string" />
                            </IconButton>
                            <IconButton>
                                <TagFacesIcon color="warning" />
                            </IconButton>
                            <IconButton>
                                <LocationOnIcon color="error" />
                            </IconButton>
                            <IconButton>
                                <MicIcon color="disabled" />
                            </IconButton>
                        </div>
                    </Card>
                    <div className={classes.postButtonContainer}>
                        <Button variant="contained" color="primary"
                            className={classes.postButton} onClick={handlePostData}>
                            Post
                        </Button>
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </div >
    );
}
export default UploadPhotoDialog;



/* WHEN DROPZONE LIBRARY IS NOT USED
// const uploadFile = (e) => {
    //     uploadedData(e.target.files[0])
// }
 { <label htmlFor="input-file">
    <CardContent className={classes.photoContent}>
        Upload Photo / Video
    <input multiple type="file" name='file' id="input-file" onChange={uploadFile} />
    </CardContent>
</label> }
*/

// AUTOREXIZE TEXTAREA
// const autoResizeTextarea = (e) => {
//     setHeight(e.target.scrollHeight - 4)
// }
