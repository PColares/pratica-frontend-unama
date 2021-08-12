import React, { useState } from "react";
import validate from "../../components/validation/ValidateInfo";
import RadioButton from "../../components/buttonComponents/radioButton";
import "./HomePage.css"

function App() {
  const [errors, setErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  const [contact, setContact] = useState(
    {
      fName: "",
      lName: "",
      email: "",
      confirmEmail: "",
      cpf: "",
      password: ""
    });

  // function handleChange(event) {
  //   const { value, name } = event.target;

  //   setContact((prevValue) => {
  //     if (name === "fName") {
  //       return {
  //         fName: value,
  //         lName: prevValue.lName,
  //         email: prevValue.email,
  //         cpf: prevValue.cpf,
  //         password: prevValue.password
  //       };
  //     } else if (name === "lName") {
  //       return {
  //         fName: prevValue.fName,
  //         lName: value,
  //         email: prevValue.email,
  //         cpf: prevValue.cpf,
  //         password: prevValue.password
  //       };
  //     } else if (name === "email") {
  //       return {
  //         fName: prevValue.fName,
  //         lName: prevValue.lName,
  //         email: value,
  //         cpf: prevValue.cpf,
  //         password: prevValue.password
  //       };
  //     } else if (name === "confirmEmail") {
  //       return {
  //         fName: prevValue.fName,
  //         lName: prevValue.lName,
  //         email: prevValue.email,
  //         confirmEmail: value,
  //         cpf: prevValue.cpf,
  //         password: prevValue.password
  //       };
  //     } else if (name === "password") {
  //       return {
  //         fName: prevValue.fName,
  //         lName: prevValue.lName,
  //         email: prevValue.email,
  //         cpf: prevValue.cpf,
  //         password: value
  //       }
  //     }
  //     else if (name === "cpf") {
  //       return {
  //         fName: prevValue.fName,
  //         lName: prevValue.lName,
  //         email: prevValue.email,
  //         cpf: value,
  //         password: prevValue.password
  //       }
  //     } 
  //   });
  // }

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
    setIsSubmited(true);
  }
  return (
    <div className="grid-parent">
      <div className="container item-a">
        <form onSubmit={handleSubmit}>
          <input
            name="fName"
            onChange={handleChange}
            placeholder="Nome"
            value={contact.fName}
          />
          {errors.fName && <p>{errors.fName}</p>}
          <input
            name="lName"
            onChange={handleChange}
            placeholder="Sobrenome"
            value={contact.lName}
          />
          {errors.lName && <p>{errors.lName}</p>}
          <input
            name="email"
            onChange={handleChange}
            placeholder="E-mail"
            value={contact.email}
            type="email"
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            name="confirmEmail"
            onChange={handleChange}
            placeholder="Confirmar E-mail"
            value={contact.confirmEmail}
            type="email"
          />
          {errors.confirmEmail && <p>{errors.confirmEmail}</p>}
          <input
            name="cpf"
            onChange={handleChange}
            placeholder="CPF"
            value={contact.cpf}
          // pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
          />
          {errors.cpf && <p>{errors.cpf}</p>}
          <input
            name="password"
            onChange={handleChange}
            placeholder="Senha"
            value={contact.password}
            type="password"
          />
          {errors.password && <p>{errors.password}</p>}
          <RadioButton />
          <button>Concluir</button>
        </form>
      </div>

      <div className="container2 item-b">
        <p>Name: {contact.fName} {contact.lName}</p>
        <p>E-mail: {contact.email === contact.confirmEmail && contact.email}</p>
        <p>Cpf: {contact.cpf}</p>
        <p>Senha: {contact.password}</p>
      </div>
    </div>
  );
}

export default App;
