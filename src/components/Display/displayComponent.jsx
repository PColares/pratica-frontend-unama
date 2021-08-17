import React from 'react';
function DisplayInput({ title, content, tipo }) {
    return (
        <>
            <p>{title}{tipo}</p>
            <span>{content}</span>
        </>
    );
}
export default DisplayInput;