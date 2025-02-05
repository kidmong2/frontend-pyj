import React, { useEffect, useReducer, useRef } from 'react'

export default function Practice03() {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} placeholder='마운트 될 때 포커싱'/>
        </div>
    );
}
