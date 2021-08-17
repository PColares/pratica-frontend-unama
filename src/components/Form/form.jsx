import React, { useState } from 'react';
import InputForm from '../Input/inputComponent';
import validate from "../../components/validation/ValidateInfo";
import RadioButton from "../button/radioButton";
import DisplayInput from "../Display/displayComponent";
import ptBr from '../../settings/pt-br';
import './form.css'

function FormComponent() {
    const [genderValue, setGenderValue] = useState("");
    const [errors, setErrors] = useState({});
    const [contact, setContact] = useState({
        email: "",
        confirmEmail: "",
        fName: "",
        lName: "",
        telefone: "",
        cpf: "",
        nascimento: "",
        tipo: "Celular",
    }
    );

    function handleChange(event) {
        const { name, value } = event.target;
        setContact({
            ...contact,
            [name]: value
        })
        console.log(contact);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setErrors(validate(contact));
    }

    return (
        <div className="flex-parent">
            <div className="item-a">
                <form onSubmit={handleSubmit}>
                    <InputForm
                        id="E-mail"
                        error={errors.email}
                        textLabel={ptBr.inputEmailLabel}
                        placeholder={ptBr.inputEmailPlaceholder}
                        name="email"
                        onChange={handleChange}
                        value={contact.email}
                        type="email"
                    />
                    <InputForm
                        id="E-mail"
                        error={errors.confirmEmail}
                        textLabel={ptBr.inputConfirmEmailLabel}
                        placeholder={ptBr.inputConfirmEmailPlaceholder}
                        name="confirmEmail"
                        onChange={handleChange}
                        value={contact.confirmEmail}
                        type="email"
                    />
                    <InputForm
                        id="Primeiro Nome"
                        error={errors.fName}
                        textLabel={ptBr.inputNameLabel}
                        placeholder={ptBr.inputNamePlaceholder}
                        name="fName"
                        onChange={handleChange}
                        value={contact.fName}
                        type="text"
                    />
                    <InputForm
                        id="Sobrenome"
                        error={errors.lName}
                        textLabel={ptBr.inputLastNameLabel}
                        placeholder={ptBr.inputLastNamePlaceholder}
                        name="lName"
                        onChange={handleChange}
                        value={contact.lName}
                        type="text"
                    />
                    <InputForm
                        id="cpf"
                        error={errors.cpf}
                        textLabel={ptBr.inputCpfLabel}
                        name="cpf"
                        onChange={handleChange}
                        value={contact.cpf}
                        type="text"
                        mask="999.999.999-99"
                        placeholder="___.___.___-__"
                    />
                    {/* Seção TELEFONE */}
                    <label for="telefone">{ptBr.inputPhoneLabel}</label>
                    <div className="tipos-telefone">
                        <div className="tipos">
                            <select
                                id="telefone"
                                name="tipo"
                                onChange={handleChange}
                            >
                                <option value="Celular">{ptBr.selectOptionLabel}</option>
                                <option value="Fixo">{ptBr.selectOption2Label}</option>
                            </select>
                        </div>
                        <div className="telefone">
                            <InputForm
                                error={errors.telefone}
                                name="telefone"
                                onChange={handleChange}
                                placeholder="(__) _____-____"
                                value={contact.telefone}
                                mask={contact.tipo === "Celular" ? "(99) 99999-9999" : "(99) 9999-9999"}
                                type="text"
                            />
                        </div>
                    </div>
                    {/* Seção GÊNERO */}
                    <div className="genero-nasc">
                        <div className="genero">
                            <label for="Gênero">{ptBr.inputGenderLabel}</label>
                            <div className="radio">
                                <RadioButton
                                    text={ptBr.inputMaleLabel}
                                    value="Masculino"
                                    onChange={(e) => setGenderValue("Masculino")} checked={genderValue === "Masculino"}
                                    name="gender"
                                />
                                <RadioButton
                                    text={ptBr.inputFemaleLabel}
                                    value="Feminino"
                                    onChange={(e) => setGenderValue("Feminino")} checked={genderValue === "Feminino"}
                                    name="gender"
                                />
                                <RadioButton
                                    text={ptBr.inputOthersLabel}
                                    value="Outros"
                                    onChange={(e) => setGenderValue("Outros")} checked={genderValue === "Outros"}
                                    name="gender"
                                />
                            </div>
                        </div>
                        <div className="nasc" >
                            <InputForm
                                textLabel={ptBr.inputBirthdayLabel}
                                id="nascimento"
                                error={errors.nascimento}
                                onChange={handleChange}
                                value={contact.nascimento}
                                name="nascimento"
                                type="text"
                                mask="99/99/9999"
                                placeholder="dd/mm/aaaa"

                            />
                        </div>
                    </div>
                    <button class="button" ><span>{ptBr.buttonLabel}</span></button>
                </form>
            </div>
            <div className="item-b">
                <DisplayInput title="E-mail" content={contact.email === contact.confirmEmail && contact.email} />
                <DisplayInput title="Nome Completo" content={contact.fName !== "" && contact.lName !== "" ? contact.fName + " " + contact.lName : null} />
                <DisplayInput title="Telefone - " tipo={contact.tipo} content={contact.telefone} />
                <DisplayInput title="CPF" content={errors.cpf === undefined ? contact.cpf : null} />
                <DisplayInput title="Data de Nascimento" content={errors.nascimento === undefined ? contact.nascimento : null} />
                <DisplayInput title="Gênero" content={genderValue} />
            </div>
        </div>
    )
}


export default FormComponent;

