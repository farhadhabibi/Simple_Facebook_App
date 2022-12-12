import React, { useState } from 'react';

function useToggleBox(initialValue = false) {
    const [state, setState] = useState(initialValue);

    const toggleBox = () => {
        setState(!state)
    }
    return [state, toggleBox];
}
export default useToggleBox;