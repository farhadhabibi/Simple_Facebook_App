import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

function reducer(state, action) {
    console.log('type', action.type)
    const baseTime = Date.now();
    let timerOpen = 0;

    // const [postedImages, setPostedImages] = useState([]);
    // // const [postedImages, setPostedImages] = useLocalStorageState('files');

    // const [selectedFile, setSelectedFile] = useState(null);
    // const [photoDialogShowing, setPhotoDialogShowing] = useState(false)
    // const [commentId, setCommentId] = useState(null);
    // const [anchorEl, setAnchorEl] = useState(false);
    // const open = Boolean(anchorEl);
    // const [defaultLikeToggle, setDefaultLikeToggle] = useState(true);

    const handlePopoverOpenAndClose = (id, displayLikePopover) => {
        const updatedPostedImage = state.map(file => {
            if (id === file.id) {
                return { ...file, displayLikePopover: displayLikePopover };
            }
            return file;
        })
        return updatedPostedImage;
    }

    switch (action.type) {
        case 'uploadData':
            return (() => {
                const data = {
                    id: uuidv4(),
                    selectedFile: action.selectedFile,
                    uploadedText: action.text,
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
                return [...state, data]
            })();

        /** PHOTO LIKE METHODS */
        case 'popeOverOpen':
            const handlePopoverOpen = (() => {
                let data = [];
                // setDefaultLikeToggle(true);
                if (!action.file.displayLikePopover) {
                    clearTimeout(timerOpen);
                    const fileId = action.event;
                    timerOpen = setTimeout(() => {
                        return handlePopoverOpenAndClose(fileId, true)
                    }, 500)
                }
            })();
            console.log('data return', handlePopoverOpen);
            return handlePopoverOpen;
        // case 'popOverClose':
        //     const handlePopoverClose = (event, file) => {
        //         clearTimeout(timerOpen);
        //         const fileId = event.currentTarget.dataset.id;
        //         timerOpen = setTimeout(() => {
        //             setPostedImages(handlePopoverOpenAndClose(fileId, false));
        //         }, 500)
        //     };
        //     return handlePopoverClose;
        // case 'likeReaction':
        //     const handleLikeReaction = (event, fileContent, toggleLike = false) => {
        //         const title = event.currentTarget.dataset.name;
        //         setDefaultLikeToggle(false)
        //         clearTimeout(timerOpen);
        //         /** Made all the isTrue key for likes object of a file to false */
        //         const updatedPostedImage = postedImages.map(file => {
        //             if (file.id === fileContent.id) {
        //                 file.likes = file.likes.map(like => {
        //                     return {
        //                         ...like, isTrue: like.title === 'like' && toggleLike ? like.isTrue : false,
        //                         count: like.title === 'like' && toggleLike ? like.count : (like.count > 0) ? --like.count : like.count
        //                     };
        //                 })
        //                 if (!toggleLike) {
        //                     return { ...file, displayLikePopover: false }
        //                 } else return file
        //             }
        //             return file
        //         });
        //         const [result] = fileContent.likes.filter(like => {
        //             if (like.title === title) return like
        //         })
        //         /** Made a single isTrue key to true  */
        //         const finalPostedImage = updatedPostedImage.map(file => {
        //             file.likes = file.likes.map(like => {
        //                 if (like.id === result.id) {
        //                     return {
        //                         ...like, isTrue: like.title === 'like' && toggleLike ? !like.isTrue : true,
        //                     }
        //                 }
        //                 return like;
        //             })
        //             /** handle the like count; if like is true then count++ else count-- */
        //             file.likes.map((like) => {
        //                 if (like.id === result.id) {
        //                     return {
        //                         ...like, count: like.isTrue ? ++like.count : --like.count
        //                     }
        //                 }
        //                 return like;
        //             })
        //             return file;
        //         })
        //         setPostedImages(finalPostedImage);
        //     };
        //     return handleLikeReaction;

        /** PHOTO COMMENT METHODS */
        // case 'displayCommentOptions':
        //     const displayCommentOptions = (event, commentId) => {
        //         setCommentId(commentId)
        //         setAnchorEl(event.currentTarget);
        //     };
        //     return displayCommentOptions;
        // case 'closeCommentOptions':
        //     const closeCommentOptions = () => {
        //         setAnchorEl(false);
        //     };
        //         return closeCommentOptions;
        //     case 'toggleComment':
        //         const toggleComment = (event) => {
        //             const id = event.currentTarget.dataset.id;
        //             const updatedPostedImage = postedImages.map((file) => {
        //                 if (id === file.id) {
        //                     return { ...file, displayComment: !file.displayComment }
        //                 }
        //                 return { ...file }
        //             })
        //             setPostedImages(updatedPostedImage)
        //         };
        //         return toggleComment;
        //     case 'commentReaction':
        //         const handleCommentReaction = (event) => {
        //             const id = event.currentTarget.dataset.id;
        //             const updatedPostedImage = postedImages.map((file) => {
        //                 if (id === file.id) {
        //                     return { ...file, displayComment: true }
        //                 }
        //                 return { ...file }
        //             })
        //             setPostedImages(updatedPostedImage)
        //         };
        //         return handleCommentReaction;
        //     case 'addComment':
        //         const addComment = (comment, id) => {
        //             if (!comment) return;
        //             const updatedPostedImage = postedImages.map((file) => {
        //                 if (id === file.id) {
        //                     const updatedComments = file.comments.push({ text: comment, id: uuidv4(), isEditable: false })
        //                     return { ...file, updatedComments }
        //                 }
        //                 return { ...file }
        //             })
        //             setPostedImages(updatedPostedImage);
        //         };
        //         return addComment;
        //     case 'deleteComment':
        //         const deleteComment = (commentId) => {
        //             const updatedPostedImage = postedImages.map((file) => {
        //                 file.comments = file.comments.filter((comment) => commentId !== comment.id);
        //                 return { ...file }
        //             })
        //             setPostedImages(updatedPostedImage);
        //             setAnchorEl(false);
        //         };
        //         return deleteComment;
        //     case 'toggleEdit':
        //         const toggleEdit = (commentId) => {
        //             const updatedPostedImage = postedImages.map((file) => {
        //                 file.comments = file.comments.map((comment) => {
        //                     if (commentId === comment.id) return { ...comment, isEditable: !comment.isEditable };
        //                     return comment;
        //                 });
        //                 return file
        //             })
        //             setPostedImages(updatedPostedImage);
        //             setAnchorEl(false);
        //         };
        //         return toggleEdit;
        //     case 'editComment':
        //         const editComment = (updatedText, id) => {
        //             if (!updatedText) return;
        //             const updatedPostedImage = postedImages.map((file) => {
        //                 file.comments = file.comments.map((comment) => {
        //                     if (id === comment.id) return { ...comment, text: updatedText, isEditable: !comment.isEditable };
        //                     return comment;
        //                 });
        //                 return file
        //             })
        //             setPostedImages(updatedPostedImage);
        //         };
        //         return editComment;
        //     default:
        //         return state;
    }
}
export default reducer;

