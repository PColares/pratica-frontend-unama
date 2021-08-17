import React from 'react';
import OptionForm from './optionForm';

function SelectForm({option, option2, optionText, optionText2}) {
    return (
        <select
            name="tipo"
            id="telefone">
            <OptionForm value={option} text={optionText} />
            <OptionForm value={option2} text={optionText2} />
        </select>
    );
}

export default SelectForm;