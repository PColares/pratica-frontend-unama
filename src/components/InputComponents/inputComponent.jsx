import React from "react";
import InputMask from 'react-input-mask';

function InputForm({textLabel,error, ...others}) {
    return (
        <div>
            <label htmlFor={others.id}>{textLabel}</label>
            {error && <p className="error">{error}</p>}
            <InputMask
                id={others.id}
                {...others}
            />
        </div>
    );
}
export default InputForm;