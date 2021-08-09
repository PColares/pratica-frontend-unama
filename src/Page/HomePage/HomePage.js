import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RadioButton from "../../components/buttonComponents/radioButton";
import "./HomePage.css"

function App() {
  const { register, handleSubmit } = useForm();

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    cpf: "",
    password: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
          cpf: prevValue.cpf,
          password: prevValue.password
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
          cpf: prevValue.cpf,
          password: prevValue.password
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
          cpf: prevValue.cpf,
          password: prevValue.password
        };
      } else if (name === "password") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          cpf: prevValue.cpf,
          password: value
        }
      }
      else if (name === "cpf") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          cpf: value,
          password: prevValue.password
        }
      }
    });
  }

  return (
    <div className="grid-parent">
      <div className="container item-a">
        <form>
          <input
            name="fName"
            onChange={handleChange}
            placeholder="Nome"
            value={contact.fName}
          />
          <input
            name="lName"
            onChange={handleChange}
            placeholder="Sobrenome"
            value={contact.lName}
          />
          <input
            name="email"
            onChange={handleChange}
            placeholder="E-mail"
            value={contact.email}
            type="email"
          />
          <input
            name="cpf"
            onChange={handleChange}
            placeholder="CPF"
            value={contact.cpf}
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
          />
          <input
            name="password"
            onChange={handleChange}
            placeholder="Senha"
            value={contact.password}
            type="password"
          />
          <RadioButton />
          <button>Concluir</button>
        </form>

      </div>

      <div className="container2 item-b">
        <p>Name: {contact.fName} {contact.lName}</p>
        <p>E-mail: {contact.email}</p>
        <p>Cpf: {contact.cpf}</p>
        <p>Senha: {contact.password}</p>
      </div>
    </div>
  );
}

export default App;
