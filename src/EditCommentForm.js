import React, { useRef, useEffect, useContext } from 'react';
import InputEmoji from 'react-input-emoji';

import { AllMethodsContext } from './contexts/AllMethodsContext';

function EditCommentForm({ comment }) {
    const { dispatch } = useContext(AllMethodsContext)
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
            onEnter={(event) => dispatch({ type: 'editComment', updatedText: event, commentId: comment.id })}
        />
    )
}

export default EditCommentForm;