import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

function useAllMethodsState() {
    const baseTime = Date.now();
    let timerOpen = 0;

    const [postedImages, setPostedImages] = useLocalStorageState('files');
    const [selectedFile, setSelectedFile] = useState(null);
    const [photoDialogShowing, setPhotoDialogShowing] = useState(false)
    const [commentId, setCommentId] = useState(null);
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    const [defaultLikeToggle, setDefaultLikeToggle] = useState(true);

    const handlePopoverOpenAndClose = (id, displayLikePopover) => {
        const updatedPostedImage = postedImages.map(file => {
            if (id === file.id) {
                return { ...file, displayLikePopover: displayLikePopover };
            }
            return file;
        })
        return updatedPostedImage;
    }

    return (
        {
            /** Parameters */
            postedImages,
            selectedFile,
            photoDialogShowing,
            anchorEl,
            open,
            defaultLikeToggle,

            /** PHOTO DIALOG METHODS */
            onDrop: useCallback(acceptedFiles => {
                acceptedFiles.forEach((file) => {
                    setSelectedFile(file)
                })
            }, []),
            showPhotoDialog: () => {
                setSelectedFile(null);
                setPhotoDialogShowing(true)
            },
            hidePhotoDialog: () => {
                setPhotoDialogShowing(false)
            },
            uploadedData: (uploadedText) => {
                const data = {
                    id: uuidv4(),
                    selectedFile,
                    uploadedText,
                    postedAt: new Date(baseTime).getTime(),
                    displayComment: false,
                    displayLikePopover: false,
                    comments: [],
                    likes: [
                        { id: uuidv4(), isTrue: false, title: 'like', count: 0 },
                        { id: uuidv4(), isTrue: false, title: 'love', count: 0 },
                        { id: uuidv4(), isTrue: false, title: 'yay', count: 0 },
                        { id: uuidv4(), isTrue: false, title: 'haha', count: 0 },
                        { id: uuidv4(), isTrue: false, title: 'wow', count: 0 },
                        { id: uuidv4(), isTrue: false, title: 'sad', count: 0 },
                        { id: uuidv4(), isTrue: false, title: 'angry', count: 0 }
                    ]
                }
                setPostedImages([...postedImages, data]);
            },

            /** PHOTO LIKE METHODS */
            handlePopoverOpen: (event, file) => {
                setDefaultLikeToggle(true);
                if (!file.displayLikePopover) {
                    clearTimeout(timerOpen);
                    const fileId = event.currentTarget.dataset.id;
                    timerOpen = setTimeout(() => {
                        setPostedImages(handlePopoverOpenAndClose(fileId, true));
                    }, 500)
                }
            },
            handlePopoverClose: (event, file) => {
                clearTimeout(timerOpen);
                const fileId = event.currentTarget.dataset.id;
                timerOpen = setTimeout(() => {
                    setPostedImages(handlePopoverOpenAndClose(fileId, false));
                }, 500)
            },
            handleLikeReaction: (event, fileContent, toggleLike = false) => {
                const title = event.currentTarget.dataset.name;
                setDefaultLikeToggle(false)
                clearTimeout(timerOpen);
                /** Made all the isTrue key for likes object of a file to false */
                const updatedPostedImage = postedImages.map(file => {
                    if (file.id === fileContent.id) {
                        file.likes = file.likes.map(like => {
                            return {
                                ...like, isTrue: like.title === 'like' && toggleLike ? like.isTrue : false,
                                count: like.title === 'like' && toggleLike ? like.count : (like.count > 0) ? --like.count : like.count
                            };
                        })
                        if (!toggleLike) {
                            return { ...file, displayLikePopover: false }
                        } else return file
                    }
                    return file
                });
                const [result] = fileContent.likes.filter(like => {
                    if (like.title === title) return like;
                    return null;
                })
                /** Made a single isTrue key to true  */
                const finalPostedImage = updatedPostedImage.map(file => {
                    file.likes = file.likes.map(like => {
                        if (like.id === result.id) {
                            return {
                                ...like, isTrue: like.title === 'like' && toggleLike ? !like.isTrue : true,
                            }
                        }
                        return like;
                    })
                    /** handle the like count; if like is true then count++ else count-- */
                    file.likes.map((like) => {
                        if (like.id === result.id) {
                            return {
                                ...like, count: like.isTrue ? ++like.count : --like.count
                            }
                        }
                        return like;
                    })
                    return file;
                })
                setPostedImages(finalPostedImage);
            },

            /** PHOTO COMMENT METHODS */
            displayCommentOptions: (event, commentId) => {
                setCommentId(commentId)
                setAnchorEl(event.currentTarget);
            },
            closeCommentOptions: () => {
                setAnchorEl(false);
            },
            toggleComment: (event) => {
                const id = event.currentTarget.dataset.id;
                const updatedPostedImage = postedImages.map((file) => {
                    if (id === file.id) {
                        return { ...file, displayComment: !file.displayComment }
                    }
                    return { ...file }
                })
                setPostedImages(updatedPostedImage)
            },
            handleCommentReaction: (event) => {
                const id = event.currentTarget.dataset.id;
                const updatedPostedImage = postedImages.map((file) => {
                    if (id === file.id) {
                        return { ...file, displayComment: true }
                    }
                    return { ...file }
                })
                setPostedImages(updatedPostedImage)
            },
            addComment: (comment, id) => {
                if (!comment) return;
                const updatedPostedImage = postedImages.map((file) => {
                    if (id === file.id) {
                        const updatedComments = file.comments.push({ text: comment, id: uuidv4(), isEditable: false })
                        return { ...file, updatedComments }
                    }
                    return { ...file }
                })
                setPostedImages(updatedPostedImage);
            },
            deleteComment: () => {
                const updatedPostedImage = postedImages.map((file) => {
                    file.comments = file.comments.filter((comment) => commentId !== comment.id);
                    return { ...file }
                })
                setPostedImages(updatedPostedImage);
                setAnchorEl(false);
            },
            toggleEdit: () => {
                const updatedPostedImage = postedImages.map((file) => {
                    file.comments = file.comments.map((comment) => {
                        if (commentId === comment.id) return { ...comment, isEditable: !comment.isEditable };
                        return comment;
                    });
                    return file
                })
                setPostedImages(updatedPostedImage);
                setAnchorEl(false);
            },
            editComment: (updatedText, id) => {
                if (!updatedText) return;
                const updatedPostedImage = postedImages.map((file) => {
                    file.comments = file.comments.map((comment) => {
                        if (id === comment.id) return { ...comment, text: updatedText, isEditable: !comment.isEditable };
                        return comment;
                    });
                    return file
                })
                setPostedImages(updatedPostedImage);
            }

        }
    )
}
export default useAllMethodsState;