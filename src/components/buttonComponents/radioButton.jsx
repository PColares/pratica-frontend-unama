import React from 'react';

function RadioButton({text, ...others}) {
    return (
        <p>
            <input
                type="radio"
                {...others}
            />{text}
        </p>
    );
}

export default RadioButton;