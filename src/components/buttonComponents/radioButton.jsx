import React from 'react';

function RadioButton() {
    return (
        <div>
            <p>Selecione seu sexo:</p>
            <p className="float">Masculino<input type="radio" name="sex" /><br /></p>
            <p className="float">Feminino<input type="radio" name="sex" /></p>
        </div>
    );
}

export default RadioButton;