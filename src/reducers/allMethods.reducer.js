import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

function reducer(state, action) {
    const baseTime = Date.now();
    let timerOpen = 0;

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
        case 'popOverOpen':
            // const handlePopoverOpen = (async () => {
            //     const myPromise = await new Promise((resolve, reject) => {
            //         if (!action.file.displayLikePopover) {
            //             clearTimeout(timerOpen);
            //             const fileId = action.event;
            //             timerOpen = setTimeout(() => {
            //                 return resolve(handlePopoverOpenAndClose(fileId, true));
            //             }, 500)
            //         }
            //     })
            //     console.log('myPromise', myPromise)
            //     return myPromise;
            // })();
            // return handlePopoverOpen;

            const handlePopoverOpen = (() => {
                // setDefaultLikeToggle(true);
                if (!action.file.displayLikePopover) {
                    clearTimeout(timerOpen);
                    const fileId = action.event;
                    return handlePopoverOpenAndClose(fileId, true);
                }
            })();
            return handlePopoverOpen;

        case 'popOverClose':
            const handlePopoverClose = (() => {
                clearTimeout(timerOpen);
                const fileId = action.event;
                return handlePopoverOpenAndClose(fileId, false);
            })();
            return handlePopoverClose;

        case 'likeReaction':
            const handleLikeReaction = (() => {
                const title = action.event;
                // setDefaultLikeToggle(false)
                clearTimeout(timerOpen);
                /** Made all the isTrue key for likes object of a file to false */
                const updatedPostedImage = state.map(file => {
                    if (file.id === action.file.id) {
                        file.likes = file.likes.map(like => {
                            return {
                                ...like, isTrue: like.title === 'like' && action.toggle ? like.isTrue : false,
                                count: like.title === 'like' && action.toggle ? like.count : (like.count > 0) ? --like.count : like.count
                            };
                        })
                        if (!action.toggle) {
                            return { ...file, displayLikePopover: false }
                        } else return file
                    }
                    return file
                });
                const [result] = action.file.likes.filter(like => {
                    if (like.title === title) return like;
                    return null;
                })
                /** Made a single isTrue key to true  */
                const finalPostedImage = updatedPostedImage.map(file => {
                    file.likes = file.likes.map(like => {
                        if (like.id === result.id) {
                            return {
                                ...like, isTrue: like.title === 'like' && action.toggle ? !like.isTrue : true,
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
                return finalPostedImage;
            })();
            return handleLikeReaction;

        /** PHOTO COMMENT METHODS */
        case 'toggleComment':
            const toggleComment = (() => {
                const id = action.event;
                const updatedPostedImage = state.map((file) => {
                    if (id === file.id) {
                        return { ...file, displayComment: !file.displayComment }
                    }
                    return { ...file }
                })
                return updatedPostedImage;
            })();
            return toggleComment;
        case 'commentReaction':
            const handleCommentReaction = (() => {
                const id = action.event;
                const updatedPostedImage = state.map((file) => {
                    if (id === file.id) {
                        return { ...file, displayComment: true }
                    }
                    return { ...file }
                })
                return updatedPostedImage;
            })();
            return handleCommentReaction;
        case 'addComment':
            const addComment = (() => {
                if (!action.comment) return;
                const updatedPostedImage = state.map((file) => {
                    if (action.fileId === file.id) {
                        const updatedComments = file.comments.push({ text: action.comment, id: uuidv4(), isEditable: false })
                        return { ...file, updatedComments }
                    }
                    return { ...file }
                })
                return updatedPostedImage;
            })();
            return addComment;
        case 'deleteComment':
            const deleteComment = (() => {
                const updatedPostedImage = state.map((file) => {
                    file.comments = file.comments.filter((comment) => action.commentId !== comment.id);
                    return { ...file }
                })
                return updatedPostedImage;
            })();
            return deleteComment;
        case 'toggleEdit':
            const toggleEdit = (() => {
                const updatedPostedImage = state.map((file) => {
                    file.comments = file.comments.map((comment) => {
                        if (action.commentId === comment.id) return { ...comment, isEditable: !comment.isEditable };
                        return comment;
                    });
                    return file
                })
                return updatedPostedImage;
                // setAnchorEl(false);
            })();
            return toggleEdit;
        case 'editComment':
            const editComment = (() => {
                if (!action.updatedText) return;
                const updatedPostedImage = state.map((file) => {
                    file.comments = file.comments.map((comment) => {
                        if (action.commentId === comment.id) return { ...comment, text: action.updatedText, isEditable: !comment.isEditable };
                        return comment;
                    });
                    return file
                })
                return updatedPostedImage;
            })();
            return editComment;
        default:
            return state;
    }
}
export default reducer;
