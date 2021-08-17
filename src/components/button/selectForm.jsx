import React from 'react';
// import OptionForm from './optionForm';

function SelectForm({tipo,text,text2, tipo2}) {
    return (
        <select
            name="tipo"
            id="telefone">
            {/* <OptionForm tipo="Celular"/>
            <OptionForm tipo="Fixo"/> */}
            <option value={tipo}>{text}</option>
            <option value={tipo2}>{text2}</option>
        </select>
    );
}

export default SelectForm;