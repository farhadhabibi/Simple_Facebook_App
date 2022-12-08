import React, { useRef, useEffect } from 'react';
import InputEmoji from 'react-input-emoji';

function EditCommentForm({ comment, editComment }) {
    const emojiRef = useRef();

    useEffect(() => {
        emojiRef.current.value = comment.text;
        emojiRef.current.focus();
        // emojiRef.current.selectionStart = emojiRef.current.value.length;
        // emojiRef.current.selectionEnd = emojiRef.current.value.length;
    }, []);

    return (
        <InputEmoji
            // value={comment.text}
            // placeholder={comment.text}
            ref={emojiRef}
            theme="auto"
            cleanOnEnter
            autoFocus={true}
            onEnter={(e) => editComment(e, comment.id)}
        />
    )
}

export default EditCommentForm;