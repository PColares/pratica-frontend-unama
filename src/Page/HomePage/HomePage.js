import React, { useState } from "react";
import InputForm from '../../components/InputComponents/inputComponent';
import validate from "../../components/validation/ValidateInfo";
import RadioButton from "../../components/buttonComponents/radioButton";
import "./HomePage.css";

function App() {
  const [genderValue, setGenderValue] = useState("");
  const [errors, setErrors] = useState({});
  const [contact, setContact] = useState(
    {
      email: "",
      confirmEmail: "",
      fName: "",
      lName: "",
      telefone: "",
      cpf: "",
      nascimento: "",
      tipo: "Celular"
    });

  function handleChange(event) {
    const { name, value } = event.target;
    setContact({
      ...contact,
      [name]: value
    })
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
              <select
                name="tipo"
                onChange={handleChange}
                id="telefone">
                <option value="Celular">Celular</option>
                <option value="Fixo">Fixo</option>
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
                mask="99/99/99"
                placeholder="dd/mm/aa"
              />
            </div>

          </div>
          <button class="button" ><span>Concluir </span></button>
        </form>
      </div>

      <div className="item-b">
        <p>E-mail</p>
        <span>{contact.email === contact.confirmEmail && contact.email}</span>

        <p>Nome Completo</p>
        <span>{contact.fName + " " + contact.lName}</span>

        <p>Telefone - {contact.tipo}</p>
        <span> {contact.telefone} </span>

        <p>Cpf</p>
        <span>{contact.cpf}</span>

        <p>Data de Nascimento</p>
        <span>{contact.nascimento}</span>

        <p>Gênero</p>
        <span>{genderValue}</span>
      </div>
    </div>
  );
}

export default App;
