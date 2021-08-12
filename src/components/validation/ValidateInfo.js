function validateInfo(values) {
  let errors = {};
  if (!values.fName) {
    errors.fName = 'Nome precisa ser preenchido';
  }
  // else if (!/^[A-Za-z]+/.test(values.name) {
  //   errors.name = 'Insira um nome válido';
  // }

  if (!values.lName) {
    errors.lName = 'Sobrenome precisa ser preenchido';
  }

  if (!values.email) {
    errors.email = 'E-mail precisa ser preenchido';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'O endereço de e-mail é inválido';
  }

  if (!values.confirmEmail) {
    errors.confirmEmail = 'Confirmação de e-mail precisa ser preenchido';
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = 'E-mails não combinam';
  }

  if (!values.cpf) {
    errors.cpf = "CPF precisa ser preenchido"
  }
  //else if (!/\d{3}?\d{3}?\d{3}-?\d{2}/.test(values.cpf)){
  //   errors.cpf = "Formato de CPF inválido"
  // }

  if (!values.password) {
    errors.password = 'Senha precisa ser preenchida';
  } else if (values.password.length < 6) {
    errors.password = 'Senha precisa possuir 6 caracteres ou mais';
  }

  // if (!values.password2) {
  //   errors.password2 = 'Password is required';
  // } else if (values.password2 !== values.password) {
  //   errors.password2 = 'Passwords do not match';
  // }
  return errors;
}

export default validateInfo;