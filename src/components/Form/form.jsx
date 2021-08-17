import React, { useState } from 'react';
import InputForm from '../Input/inputComponent';
import validate from "../../components/validation/ValidateInfo";
import RadioButton from "../button/radioButton";
import SelectForm from "../button/selectForm";
import DisplayInput from "../Display/displayComponent";
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
        tipo: "Celular"
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
                        textLabel="E-mail *"
                        name="email"
                        onChange={handleChange}
                        value={contact.email}
                        type="email"
                    />
                    <InputForm
                        id="E-mail"
                        error={errors.confirmEmail}
                        textLabel="Confirmar E-mail *"
                        name="confirmEmail"
                        onChange={handleChange}
                        value={contact.confirmEmail}
                        type="email"
                    />
                    <InputForm
                        id="Primeiro Nome"
                        error={errors.fName}
                        textLabel="Nome *"
                        name="fName"
                        onChange={handleChange}
                        value={contact.fName}
                        type="text"
                    />
                    <InputForm
                        id="Sobrenome"
                        error={errors.lName}
                        textLabel="Sobrenome *"
                        name="lName"
                        onChange={handleChange}
                        value={contact.lName}
                        type="text"
                    />
                    <InputForm
                        id="cpf"
                        error={errors.cpf}
                        textLabel="CPF *"
                        name="cpf"
                        onChange={handleChange}
                        value={contact.cpf}
                        type="text"
                        mask="999.999.999-99"
                        placeholder="___.___.___-__"
                    />
                    {/* Seção TELEFONE */}
                    <label for="telefone">Telefone</label>
                    <div className="tipos-telefone">
                        <div className="tipos">
                            <SelectForm
                                onChange={handleChange}
                                name="tipo"
                                id="telefone"
                                option="Celular"
                                optionText="Celular"
                                option2="Fixo"
                                optionText2="Fixo"
                            />
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
                            <label for="Gênero">Gênero</label>
                            <div className="radio">
                                <RadioButton
                                    text="Masculino"
                                    value="Masculino"
                                    onChange={(e) => setGenderValue("Masculino")} checked={genderValue === "Masculino"}
                                    name="gender"
                                />
                                <RadioButton
                                    text="Feminino"
                                    value="Feminino"
                                    onChange={(e) => setGenderValue("Feminino")} checked={genderValue === "Feminino"}
                                    name="gender"
                                />
                                <RadioButton
                                    text="Outros"
                                    value="Outros"
                                    onChange={(e) => setGenderValue("Outros")} checked={genderValue === "Outros"}
                                    name="gender"
                                />
                            </div>
                        </div>
                        <div className="nasc" >
                            <InputForm
                                textLabel="Data de nascimento *"
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
                    <button class="button" ><span>Concluir</span></button>
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

