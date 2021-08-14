import React from 'react';
function DisplayInput({ title, content }) {
    return (
        <>
            <p>{title}</p>
            <span>{content}</span>
        </>
    );
}
export default DisplayInput;