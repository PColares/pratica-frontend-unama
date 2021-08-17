import React from "react";
import InputMask from 'react-input-mask';
import '../../Page/HomePage/HomePage.css'

function InputForm({ textLabel, error, ...others }) {
    return (
        <div>
            <div>
                <label htmlFor={others.id}>{textLabel}</label>
                {error && <p className="error">{error}</p>}
            </div>
            <InputMask className={error === undefined ? "border-white" : "border"}
                id={others.id}
                {...others}
            />
        </div>
    );
}

export default InputForm;
